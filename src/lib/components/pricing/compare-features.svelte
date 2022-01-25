<script>
  import {
    freePlanTableData,
    personalPlanTableData,
    professionalPlanTableData,
    unleashedPlanTableData,
  } from "$lib/contents/pricing";

  import QaTooltip from "../qa-tooltip.svelte";
  import SectionCommon from "../section-common.svelte";
  import ComparisonTableSectionMobile from "../tables/comparison-table-section-mobile.svelte";
  import ComparisonTableSection from "../tables/comparison-table-section.svelte";
</script>

<style lang="postcss">
  .featureTable {
    @apply max-w-none gap-x-macro lgx:gap-x-micro grid-cols-5;
  }

  .featureTable > :global(*:not(:first-of-type)) {
    @apply h-full;
  }

  .featureTable :global(section) {
    @apply p-xx-small;
  }

  .toc {
    @apply text-xs;
  }

  .toc :global(button) {
    @apply uppercase;
  }

  .hasIcon span {
    @apply flex items-center;
  }

  .toc img {
    @apply static mr-micro;
  }

  @media (max-width: 1059px) {
    ul {
      @apply px-xx-small mt-macro;
    }

    .card {
      @apply pb-micro;
    }
  }

  .toc li {
    @apply flex items-center pl-0 text-left font-bold;

    @media (max-width: 1160px) {
      transform: translateX(-18px);
    }
  }
</style>

<SectionCommon
  title="Compare features"
  text="Choose the plan that's fits your needs. You can always start for free."
  textClassNames="mb-xx-small"
>
  <div class="featureTable" slot="content">
    <section class="toc">
      <ul class="tableOfContents text-left" role="presentation">
        <li>Public & Private Repos</li>
        <li>
          <QaTooltip
            text="Team Plans"
            tooltip="You can create team plans and manage subscriptions for your team members."
          />
        </li>
        <li>
          <QaTooltip
            text="Inactivity timeout"
            tooltip="Time after which workspaces are automatically stopped."
          />
        </li>
        <li>
          <QaTooltip
            text="timeout Boost"
            tooltip="Extra workspace inactivity timeout boost."
          />
        </li>
        <li>
          <QaTooltip
            text="Parallel Workspaces"
            tooltip="Run multiple workspaces at the same time."
          />
        </li>
        <li>
          <QaTooltip
            text="prebuilds"
            tooltip="Enable prebuilds to continuously build your Git branches, so you and your team can always start coding right away."
          />
        </li>
        <li>
          <QaTooltip
            text="Shared workspaces"
            tooltip="Pair program with your team by sharing running workspaces."
          />
        </li>
        <li>
          <QaTooltip
            text="Snapshots"
            tooltip="Create a copy of your workspace by sharing a snapshot with your team."
          />
        </li>
        <li>
          <QaTooltip
            text="Admin Dashboard"
            tooltip="Access to exclusive stats of your team."
          />
        </li>
        <li>
          <QaTooltip
            text="Encrypted backups"
            tooltip="Keeps your data safe. More on <a href='/security'>security</a>."
          />
        </li>
        <li>
          <QaTooltip
            text="multi-ide support"
            tooltip="Connect Gitpod with your favourite IDE. View <a href='/docs/editors'>docs/IDE</a> to see all suported IDE’s."
          />
        </li>
        <li class="hasIcon">
          <span
            ><img src="/svg/gitlab.svg" alt="GitLab" width="24" /> GitLab</span
          >
        </li>
        <li class="hasIcon">
          <span
            ><img src="/svg/github.svg" alt="GitHub" width="24" /> GitHub</span
          >
        </li>
        <li class="hasIcon">
          <span
            ><img src="/svg/bitbucket.svg" alt="Bitbucket" width="24" /> Bitbucket</span
          >
        </li>
        <li />
        <!-- Don't remove this it is to help with the layout temporarily unless we find a better way to adjust it.  -->
      </ul>
    </section>
    <ComparisonTableSection
      title={freePlanTableData.title}
      subtitle={freePlanTableData.subtitle}
      details={freePlanTableData.details}
      image={null}
      link={freePlanTableData.link}
    />
    <ComparisonTableSection
      title={personalPlanTableData.title}
      subtitle={personalPlanTableData.subtitle}
      details={personalPlanTableData.details}
      image={null}
      link={personalPlanTableData.link}
    />
    <ComparisonTableSection
      title={professionalPlanTableData.title}
      subtitle={professionalPlanTableData.subtitle}
      details={professionalPlanTableData.details}
      image={null}
      isHighlighted={true}
      link={professionalPlanTableData.link}
    />
    <ComparisonTableSection
      title={unleashedPlanTableData.title}
      subtitle={unleashedPlanTableData.subtitle}
      details={unleashedPlanTableData.details}
      image={null}
      link={unleashedPlanTableData.link}
    />
    <ComparisonTableSectionMobile
      title={freePlanTableData.title}
      subtitle={freePlanTableData.subtitle}
      details={freePlanTableData.details}
      link={freePlanTableData.link}
      image={null}
      usesTheArrowButton={true}
    />
    <ComparisonTableSectionMobile
      title={personalPlanTableData.title}
      subtitle={personalPlanTableData.subtitle}
      details={personalPlanTableData.details}
      link={personalPlanTableData.link}
      image={null}
      usesTheArrowButton={true}
    />
    <ComparisonTableSectionMobile
      title={professionalPlanTableData.title}
      subtitle={professionalPlanTableData.subtitle}
      details={professionalPlanTableData.details}
      link={professionalPlanTableData.link}
      image={null}
      usesTheArrowButton={true}
      isHighlighted={true}
    />
    <ComparisonTableSectionMobile
      title={unleashedPlanTableData.title}
      subtitle={unleashedPlanTableData.subtitle}
      details={unleashedPlanTableData.details}
      link={unleashedPlanTableData.link}
      image={null}
      usesTheArrowButton={true}
    />
  </div>
</SectionCommon>
