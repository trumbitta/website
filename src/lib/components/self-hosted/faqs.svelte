<script lang="ts">
  import Section from "../section.svelte";
  import Faqs from "../faqs/faqs.svelte";
  import Faq from "../faqs/faq.svelte";
  import { selfhostedFAQ } from "$lib/contents/self-hosted";
</script>

<Section>
  <Faqs>
    <h1 class="text-center">FAQs</h1>
    {#each selfhostedFAQ as item}
      <Faq title={item.title}>
        {@html item.content}
      </Faq>
    {/each}
  </Faqs>
</Section>
