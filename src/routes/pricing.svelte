<script context="module">
  export const prerender = true;
</script>

<script>
  import Explore from "$lib/components/explore.svelte";
  import Faqs from "$lib/components/pricing/faqs.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import PlansAndPricing from "$lib/components/pricing/plans-and-pricing.svelte";
  import { pricingPlans } from "$lib/contents/pricing";
  import UsedBy from "$lib/components/index/used-by.svelte";
  import Empower from "$lib/components/pricing/empower.svelte";
  import CompareFeatures from "$lib/components/pricing/compare-features.svelte";
  import FeatureTable from "$lib/components/ui-library/feature-table/feature-table.svelte";
</script>

<OpenGraph
  data={{
    description:
      "Gitpod is free for Open Source, and offers productive features for you, your team and your business at reasonable prices.",
    title: "Pricing",
  }}
/>
<PlansAndPricing {pricingPlans} />
<UsedBy title="Used by 500k+ developers" />
<CompareFeatures />
<Empower />
<Faqs />

<Explore />
<div class="mb-4">
  <FeatureTable />
</div>
