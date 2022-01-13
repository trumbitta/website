<script context="module">
  export const faqsKey = {};
</script>

<script lang="ts">
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import Faq from "./faq.svelte";
  import type { FAQ } from "$lib/types/faq.type";

  export let faq: FAQ;

  const activeFaq = writable(null);

  setContext(faqsKey, activeFaq);
</script>

<div class="max-w-6xl mx-auto">
  <h1 class="text-center">{faq.headline}</h1>
  {#each faq.items as item}
    <Faq title={item.title}>
      {@html item.content}
    </Faq>
  {/each}
</div>
