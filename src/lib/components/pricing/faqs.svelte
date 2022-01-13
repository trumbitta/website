<script lang="ts">
  import Section from "../section.svelte";
  import Faqs from "../faqs/faqs.svelte";
  import Faq from "../faqs/faq.svelte";
  import Modal from "../modal.svelte";
  import RedeemOffer from "./redeem-offer.svelte";

  import { pricingFAQ } from "$lib/contents/pricing";

  let isModalOpen: boolean = false;
</script>

<style lang="postcss">
  :global(.images) {
    @apply flex mt-xx-small;
  }
  :global(.images > *:not(:last-child)) {
    @apply mr-xx-small;
  }
</style>

<Section>
  <Faqs faq={pricingFAQ} />
</Section>

<Modal on:close={() => (isModalOpen = false)} isOpen={isModalOpen}>
  <RedeemOffer />
</Modal>
