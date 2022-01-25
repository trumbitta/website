<script>
  import {
    gitpodTableData,
    jetbrainsTableData,
  } from "$lib/contents/jetbrains-space";

  import Section from "../section.svelte";
  import ComparisonTableSectionMobile from "../tables/comparison-table-section-mobile.svelte";
  import ComparisonTableSection from "../tables/comparison-table-section.svelte";
</script>

<style lang="postcss">
  .toc {
    @apply text-xs;
  }

  .toc img {
    @apply w-6;
  }

  @media (max-width: 1059px) {
    ul {
      @apply px-xx-small mt-macro;
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

  .footnote-container {
    max-width: 1140px;

    @media (max-width: 1059px) {
      @apply block max-w-sm md:max-w-none mt-x-small;
    }
  }
</style>

<Section>
  <div class="text-center">
    <h2>Compare features</h2>
    <p class="text-large mb-xx-small md:mb-small">
      Remote development without friction that integrates with your individual
      stack.
    </p>
  </div>

  <div class="featureTable">
    <section class="toc">
      <ul class="tableOfContents" role="presentation">
        <li>Pricing (SAAS)</li>
        <li>License</li>
        <li class="hasIcon">
          <img src="/svg/github.svg" alt="GitHub" width="24" /> GitHub Integration
        </li>

        <li class="hasIcon">
          <img src="/svg/gitlab.svg" alt="GitLab" width="24" />GitLab
          Integration
        </li>

        <li class="hasIcon">
          <img src="/svg/bitbucket.svg" alt="Bitbucket" width="24" /> Bitbucket Integration
        </li>

        <li class="hasIcon">
          <img
            src="/svg/brands/gcp.svg"
            alt="Google Cloud Platform"
            width="24"
          />
          Self-Host on GCP
        </li>

        <li class="hasIcon">
          <img
            src="/svg/brands/aws.svg"
            alt="Amazon Web Services"
            width="24"
          />Self-Host on AWS
        </li>
        <li class="hasIcon">
          <img
            src="/svg/brands/kubernetes.svg"
            alt="Kubernetes"
            width="24"
          />Self-Host on Kubernetes
        </li>
        <li>Prebuilds</li>
        <li>Snapshots</li>
        <li>VS Code Extensions</li>
        <li>iPad Support</li>
        <li>Virtual Desktop (VNC)</li>
        <li>Jetbrains Ide Support</li>
        <li>VS Code Support</li>
      </ul>
    </section>
    <ComparisonTableSection
      title={gitpodTableData.title}
      image={gitpodTableData.image}
      details={gitpodTableData.details}
      isHighlighted={true}
    />
    <ComparisonTableSection
      title={jetbrainsTableData.title}
      image={jetbrainsTableData.image}
      details={jetbrainsTableData.details}
    />
    <ComparisonTableSectionMobile
      title={gitpodTableData.title}
      image={gitpodTableData.image}
      details={gitpodTableData.details}
      usesTheArrowButton={true}
      isHighlighted={true}
    />
    <ComparisonTableSectionMobile
      title={jetbrainsTableData.title}
      image={jetbrainsTableData.image}
      details={jetbrainsTableData.details}
      usesTheArrowButton={true}
    />
  </div>
  <div class="text-xs mx-auto grid grid-cols-3 gap-x-small footnote-container">
    <div />
    <p class="col-span-2 text-center">
      Disclaimer: All data were last verified on Dec. 9, 2021. To report any
      incorrect or outdated information, please <a href="/contact">contact us</a
      >.
    </p>
  </div>
</Section>
