<script lang="ts">
  import Section from "../section.svelte";
  import Faqs from "../faqs/faqs.svelte";
  import Modal from "../modal.svelte";
  import RedeemOffer from "./redeem-offer.svelte";

  import { pricingFAQ } from "$lib/contents/pricing";

  let isModalOpen: boolean = false;

  const handleBodyClickToOpenModal = (event: Event) => {
    if (
      (event.target as HTMLButtonElement).dataset.openModal ===
      "redeem-student-offer"
    ) {
      isModalOpen = true;
    }
  };
</script>

<svelte:body on:click={handleBodyClickToOpenModal} />

<Section>
  <Faqs faq={pricingFAQ} />
</Section>

<Modal on:close={() => (isModalOpen = false)} isOpen={isModalOpen}>
  <RedeemOffer />
</Modal>
