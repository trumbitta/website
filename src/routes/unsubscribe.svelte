<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import OpenGraph from "$lib/components/open-graph.svelte";
  import GitpodIllustration from "$lib/components/gitpod-illustration.svelte";
  import { onMount } from "svelte";

  onMount(() => {
    const footer: HTMLElement = document.querySelector('[data-id="footer"]');
    footer.style.display = "none";
  });
</script>

<style lang="postcss">
  section {
    @apply pb-0 mt-x-large sm:mt-large;
  }

  .h4 {
    @apply text-h4 mb-micro mt-0 !important;
  }
</style>

<OpenGraph
  data={{
    title: "Unsubscribed",
    description: "",
    norobots: true,
  }}
/>

<section
  class="p-xx-small sm:py-small sm:px-x-small md:p-medium rounded-2xl bg-off-white shadow-xl mb-medium text-center sm:mx-8"
>
  <h1 class="h4">Unsubscribed</h1>
  <p class="max-w-2xl text-large mx-auto">
    You have been sucessfully unsubscribed. If you would like to revert it,
    please go to <a
      href="https://gitpod.io/notifications"
      target="_blank"
      rel="nofollow">gitpod.io/notifications</a
    >.
  </p>
  <GitpodIllustration />
</section>
