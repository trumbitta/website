<script lang="ts">
  import type { Pricing } from "$lib/types/pricing.type";
  import PricingBox from "./pricing-box.svelte";

  export let pricingPlans: Pricing[];
</script>

<div class="flex flex-wrap justify-center">
  {#each pricingPlans as pricing}
    <PricingBox {pricing} />
  {/each}
</div>
