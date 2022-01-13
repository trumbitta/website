<script lang="ts">
  import { faqs } from "$lib/contents/opensource";
  import Faq from "../faqs/faq.svelte";
  import Faqs from "../faqs/faqs.svelte";
  import Section from "../section.svelte";
</script>

<Section>
  <h1 class="text-center mb-small">FAQs</h1>
  <Faqs>
    {#each faqs as f}
      <Faq title={f.title}>
        {@html f.text}
      </Faq>
    {/each}
  </Faqs>
</Section>
