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
  details:global(a) {
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

  summary::-webkit-details-marker {
    @apply hidden;
  }
</style>

<details
  class="faq group bg-sand-dark border border-solid border-transparent focus:border-white hover:border-white rounded-2xl"
  open={isActive}
  on:toggle={setActive}
  id={fragment}
  data-analytics={`{"context":"faq"}`}
>
  <summary class="outline-none list-none">
    <div class="faq__top flex items-center p-medium">
      <h3 class="h4 faq__title flex-1 inline-block w-5/6 mb-0">{title}</h3>
      <img
        class="faq__arrow group-open:rotate-180 ml-macro h-6 w-6 outline-none transition-all duration-200"
        width="24"
        height="24"
        src="/arrow.svg"
        alt="Arrow"
      />
    </div>
  </summary>
  <div class="faq__text text-large m-medium -mt-10">
    <slot />
  </div>
</details>
