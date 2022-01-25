<script>
  import {
    bobTableData,
    aliceTableData,
  } from "$lib/contents/local-development";

  import Section from "../section.svelte";
  import ComparisonTableSectionMobile from "../tables/comparison-table-section-mobile.svelte";
  import ComparisonTableSection from "../tables/comparison-table-section.svelte";
</script>

<style lang="postcss">
  .title {
    max-width: 1260px;

    @media (min-width: 1060px) {
      @apply grid text-center mx-auto;
      grid-template-columns: 1fr 2fr;
    }

    @media (max-width: 1059px) {
      @apply text-center mb-micro;
    }
  }

  @media (max-width: 1059px) {
    ul {
      @apply px-xx-small mt-macro;
    }
  }

  .featureTable > * > * {
    grid-template-rows: 350px 250px 400px 200px 100px;
  }

  .featureTable {
    max-width: 1260px;

    @media (min-width: 1200px) {
      gap: 3rem;
    }
  }

  @media (max-width: 1200px) {
    .toc li {
      @apply pl-0;
    }
  }

  li {
    @apply text-left;
  }
  .toc li {
    font-weight: 700;
  }
</style>

<Section>
  <div class="title">
    <div />
    <h3>How does the setup affect their work?</h3>
  </div>
  <div class="featureTable">
    <section class="toc">
      <ul class="tableOfContents" role="presentation">
        <li>Setup new Project</li>
        <li>Develop a new feature</li>
        <li>Switch context</li>
        <li>Set up a new computer</li>
        <li>Contribute to open-source projects</li>
      </ul>
    </section>
    <ComparisonTableSection
      title={bobTableData.title}
      image={bobTableData.image}
      details={bobTableData.details}
      renderedOn="local-development"
    />
    <ComparisonTableSection
      title={aliceTableData.title}
      image={aliceTableData.image}
      details={aliceTableData.details}
      isHighlighted={true}
      renderedOn="local-development"
    />
    <ComparisonTableSectionMobile
      title={bobTableData.title}
      image={bobTableData.image}
      details={bobTableData.details}
    />
    <ComparisonTableSectionMobile
      title={aliceTableData.title}
      image={aliceTableData.image}
      details={aliceTableData.details}
    />
  </div>
</Section>
