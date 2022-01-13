<script lang="ts">
  import { faqs } from "$lib/contents/opensource";
  import Faqs from "../faqs/faqs.svelte";
  import Section from "../section.svelte";
</script>

<Section>
  <h1 class="text-center mb-small">FAQs</h1>
  <Faqs faq={faqs} />
</Section>
