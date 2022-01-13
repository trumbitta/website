<script lang="ts" context="module">
  export const faqsKey = {};
</script>

<script lang="ts">
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import Faq from "./faq.svelte";
  import type { FAQ } from "$lib/types/faq.type";

  export let faq: FAQ;

  setContext(faqsKey, writable(null));
</script>

<div class="max-w-6xl mx-auto">
  <h1 class="text-center">{faq.headline}</h1>
  <div class="space-y-xx-small">
    {#each faq.items as item}
      <Faq title={item.title}>
        {@html item.content}
      </Faq>
    {/each}
  </div>
</div>
