<script lang="ts">
  import Section from "../section.svelte";
  import Faqs from "../faqs/faqs.svelte";
  import Faq from "../faqs/faq.svelte";
  import Modal from "../modal.svelte";
  import RedeemOffer from "./redeem-offer.svelte";

  import { pricingFAQ } from "$lib/contents/pricing";

  let isModalOpen: boolean = false;
</script>

<style lang="scss">
  h2 {
    text-align: center;
  }
  :global(.images) {
    display: flex;
    margin-top: var(--xx-small);
  }
  :global(.images > *:not(:last-child)) {
    margin-right: var(--xx-small);
  }
</style>

<Section>
  <Faqs>
    <h2 class="h1">FAQs</h2>
    {#each pricingFAQ as item}
      <Faq title={item.title}>
        {@html item.content}
      </Faq>
    {/each}
  </Faqs>
</Section>

<Modal on:close={() => (isModalOpen = false)} isOpen={isModalOpen}>
  <RedeemOffer />
</Modal>
