<script lang="ts">
  import { faqsKey } from "./faqs.svelte";
  import { getContext, onMount } from "svelte";
  import { stringToBeautifiedFragment } from "$lib/utils/helpers";

  export let title: string;

  const activeFaq: any = getContext(faqsKey);
  const fragment = stringToBeautifiedFragment(title);

  const setActive = ({ target }) => {
    const open = target.open;
    if (open) {
      $activeFaq = title;
    }
    // closing the faq that was active, no faq will remain open
    if (isActive && !open) $activeFaq = null;
  };

  onMount(() => {
    isActive = fragment === window.location.hash.substring(1);
  });

  $: isActive = $activeFaq === title;
</script>

<style lang="postcss">
  .faq {
    border-radius: 16px;
    @apply bg-sand-dark rounded-2xl;
    border: 1px solid transparent;
  }
  .faq:hover .faq:focus {
    border: 1px solid var(--white);
  }
  .faq:not(:last-child) {
    @apply mb-xx-small;
  }

  .faq__top {
    @apply items-center p-medium;
  }

  .faq__title {
    @apply inline-block w-5/6;
  }

  .faq__arrow {
    @apply h-6 w-6 outline-none transition-all duration-200;
  }

  .faq__text {
    @apply m-medium -mt-10;
  }

  .faq:global(a) {
    @apply font-semibold;
  }

  @media (max-width: 860px) {
    .faq__top {
      @apply p-xx-small items-start;
    }

    .faq__text {
      @apply m-xx-small -mt-4;
    }
  }

  @media (max-width: 375px) {
    .faq__top {
      @apply p-micro;
    }
    .faq__text {
      @apply m-micro -mt-2;
    }
  }

  @media (max-width: 768px) {
    .faq__arrow {
      @apply mt-1;
    }
  }

  .h4 {
    @apply mb-0;
  }

  details[open] .faq__arrow {
    @apply rotate-180;
  }

  summary {
    list-style: none;
  }

  summary::-webkit-details-marker {
    @apply hidden;
  }
</style>

<details
  class="faq"
  open={isActive}
  on:toggle={setActive}
  id={fragment}
  data-analytics={`{"context":"faq"}`}
>
  <summary class="outline-none">
    <div class="faq__top flex">
      <h3 class="h4 faq__title flex-1">{title}</h3>
      <img
        class="faq__arrow ml-macro"
        width="24"
        height="24"
        src="/arrow.svg"
        alt="Arrow"
      />
    </div>
  </summary>
  <div class="faq__text text-large">
    <slot />
  </div>
</details>
