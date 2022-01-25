<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import { goto } from "$app/navigation";
  import type { Form } from "$lib/types/form.type";
  import OpenGraph from "$lib/components/open-graph.svelte";

  import { countryList } from "$lib/contents/license-key";
  import type { Email } from "../functions/submit-form";

  const formData: Form = {
    firstName: {
      el: null,
      valid: false,
      value: "",
    },
    lastName: {
      el: null,
      valid: false,
      value: "",
    },
    email: {
      el: null,
      valid: false,
      value: "",
    },
    company: {
      el: null,
      valid: false,
      value: "",
    },
    country: {
      el: null,
      valid: false,
      value: "",
    },
    noOfDevelopers: {
      el: null,
      valid: false,
      value: "",
    },
    message: {
      el: null,
      valid: true,
      value: "",
    },
  };

  let isFormDirty: boolean = false;

  $: isFormValid = Object.values(formData).every((field) => field.valid);

  const handleSubmit = async () => {
    isFormDirty = true;
    if (!isFormValid) {
      return;
    }

    const email: Email = {
      from: {
        email: formData.email.value,
        name: `${formData.firstName.value} ${formData.lastName.value}`,
      },
      subject:
        "Requesting a professional self-hosted license" +
        "  (from " +
        formData.email.value +
        ")",
      message: `
        ${formData.company.value}
        ${formData.firstName.value} ${formData.lastName.value}

        developers: ${formData.noOfDevelopers.value}

        Message:
        ${formData.message.value}
      `,
    };

    try {
      const response = await fetch("/.netlify/functions/submit-form", {
        method: "POST",
        body: JSON.stringify(email),
      });
      if (response.ok) {
        goto("/docs/self-hosted/latest");
      } else {
        console.error(response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };
</script>

<style lang="scss">
  header {
    @apply mb-small;
  }

  .title:not(:first-child) {
    margin-top: var(--medium);
  }

  .half :last-child {
    @apply mt-macro;
  }

  .option {
    @apply text-gray-800;
  }
</style>

<OpenGraph
  data={{
    description: "Request a License Key for Gitpod Self-Hosted.",
    title: "Enterprise License",
    norobots: true,
  }}
/>

<header>
  <h2>Fill this out and get 10 additional users.</h2>
  <p>Tell us how we can help and your license will be emailed shortly.</p>
</header>

<section
  class="p-xx-small sm:py-small sm:px-x-small md:p-medium rounded-2xl bg-off-white shadow-xl mb-32 sm:mx-8"
>
  <form on:submit|preventDefault={handleSubmit} novalidate>
    <h2 class="h4 title">Customer Information</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-small">
      <label
        class="half"
        class:error={isFormDirty && !formData.firstName.valid}
      >
        First Name*
        <input
          name="firstName"
          type="text"
          bind:value={formData.firstName.value}
          bind:this={formData.firstName.el}
          on:change={() => {
            formData.firstName.valid =
              formData.firstName.value && formData.firstName.el.checkValidity();
          }}
          autocomplete="given-name"
        />
      </label>
      <label class="half" class:error={isFormDirty && !formData.lastName.valid}>
        Last Name*
        <input
          name="lastName"
          type="text"
          bind:value={formData.lastName.value}
          bind:this={formData.lastName.el}
          on:change={() => {
            formData.lastName.valid =
              formData.lastName.value && formData.lastName.el.checkValidity();
          }}
          autocomplete="family-name"
        />
      </label>
      <label class="half" class:error={isFormDirty && !formData.email.valid}>
        Work Email*
        <input
          type="email"
          name="email"
          bind:value={formData.email.value}
          bind:this={formData.email.el}
          on:change={() => {
            formData.email.valid =
              formData.email.value && formData.email.el.checkValidity();
          }}
          autocomplete="email"
        />
      </label>
      <label class="half" class:error={isFormDirty && !formData.company.valid}>
        Company*
        <input
          name="company"
          bind:value={formData.company.value}
          bind:this={formData.company.el}
          on:change={() => {
            formData.company.valid =
              formData.company.value && formData.company.el.checkValidity();
          }}
          type="text"
          autocomplete="organization"
        />
      </label>

      <label class="half" class:error={isFormDirty && !formData.country.valid}>
        Country*
        <!-- svelte-ignore a11y-no-onchange -->
        <select
          name="country"
          bind:value={formData.country.value}
          bind:this={formData.country.el}
          on:change={() => {
            formData.country.valid =
              formData.country.value && formData.country.el.checkValidity();
          }}
          class="option"
          autocomplete="country"
        >
          <option class="option" value="" disabled selected>Select...</option>
          {#each countryList as c}
            <option class="option" value={c}>
              {c}
            </option>
          {/each}
        </select>
      </label>

      <label
        class="half"
        class:error={isFormDirty && !formData.noOfDevelopers.valid}
      >
        Total Number of Developers*
        <select
          class="option"
          name="noOfDevelopers"
          bind:value={formData.noOfDevelopers.value}
          bind:this={formData.noOfDevelopers.el}
          on:change={() => {
            formData.noOfDevelopers.valid =
              formData.noOfDevelopers.value &&
              formData.noOfDevelopers.el.checkValidity();
          }}
        >
          <option class="option" value="" disabled selected>Select...</option>
          {#each ["1 - 100", "101 - 250", "251 - 500", "500 - 1000", "+1000"] as n}
            <option class="option" value={n}>
              {n}
            </option>
          {/each}
        </select>
      </label>
    </div>

    <label class="mt-macro half">
      <p>
        Optionally, tell us more about your interest in Gitpod. What challenges
        are you looking to solve? How can we help?
      </p>
      <textarea
        cols="30"
        rows="4"
        bind:value={formData.message.value}
        bind:this={formData.message.el}
        name="message"
      />
    </label>

    <button
      type="submit"
      class="btn-conversion title"
      disabled={isFormDirty && !isFormValid}>Install Now</button
    >
  </form>

  <div class="mt-6">
    <div>
      <p>
        <a href="/docs/self-hosted/latest"
          >Skip the 10 extra users and just go directly to the installation
          guides.</a
        >
      </p>
    </div>
  </div>
</section>
