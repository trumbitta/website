<script lang="ts">
  import FeatureTableHeader from "./feature-table-header.svelte";
  import FeatureTableTocItem from "./feature-table-toc-item.svelte";
</script>

<div id="toc" class="p-4">
  <FeatureTableHeader />
  <section class="grid grid-cols-1 auto-rows-[3.75rem] pt-4">
    <FeatureTableTocItem
      type="image"
      definition={{
        text: "Bitbucket",
        image: { alt: "Bitbucket", path: "/svg/bitbucket.svg" },
      }}
    />
    <FeatureTableTocItem
      type="tooltip"
      definition={{
        text: "timeout Boost",
        tooltip: "Extra workspace inactivity timeout boost.",
      }}
    />
    <FeatureTableTocItem type="text" definition={{ text: "Baui" }} />
  </section>
</div>
