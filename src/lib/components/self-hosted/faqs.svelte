<script lang="ts">
  import Section from "../section.svelte";
  import Faqs from "../faqs/faqs.svelte";
  import Faq from "../faqs/faq.svelte";
  import { selfhostedFAQ } from "$lib/contents/self-hosted";
</script>

<Section>
  <Faqs faq={selfhostedFAQ} />
</Section>
