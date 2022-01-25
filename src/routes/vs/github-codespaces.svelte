<script context="module">
  export const prerender = true;
</script>

<script>
  import CalloutSecondary from "$lib/components/callout-secondary.svelte";
  import Card from "$lib/components/card/card.svelte";
  import FeatureBox from "$lib/components/feature-box.svelte";
  import Header from "$lib/components/github-codespaces/header.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import Section from "$lib/components/section.svelte";
  import { openSourceFeature } from "$lib/contents/jetbrains-space";
</script>

<style lang="postcss">
  .featureTable + p {
    margin: auto;
    max-width: 60%;
  }
  .featureTable > * > * {
    grid-auto-rows: 3rem;
  }
  .featureTable .toc li {
    font-weight: 700;
    margin-bottom: 1rem;
    padding-left: 2.175rem;
    font-size: 12px;
    display: flex;
    align-items: center;
  }

  .featureTable .card-heading {
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .featureTable .toc img {
    width: 24px;
  }
  .featureTable [aria-label] {
    min-height: 1.5rem;
    min-width: 1.5rem;
  }

  .page-bottom {
    @apply mb-xx-large;

    @media (max-width: 972px) {
      @apply mb-x-large;
    }
  }
</style>

<OpenGraph
  data={{
    description:
      "Gitpod is the faster, more powerful, open-source platform that integrates with your individual stack.",
    title: "Gitpod vs GitHub Codespaces",
  }}
/>

<Header />

<FeatureBox
  feature={{
    title: "Ready in a flash",
    paragraph:
      "Gitpod removes long init and build times by continuously pre-building workspaces for your project. Thereby it allows you to start coding or debugging immediately, from any context, at any time.",
    moreButton: {
      href: "/docs/prebuilds",
      text: "More about Prebuilds.",
    },
    image: {
      src: "/images/github-codespaces/spaces-1.svg",
      alt: "Gitpod vs GitHub Codespaces speed comparison",
    },
    footnote:
      "Compared start-up time until ready-to-code for<br /> <a href='https://github.com/gitpod-io/vscode' target='_blank'>https://github.com/gitpod-io/vscode</a>. Last verified 25 Sep 2020.",
  }}
/>

<FeatureBox
  feature={{
    title: "Resource Efficient",
    paragraph:
      "Instead of running on expensive VMs, Gitpod provisions secure containers and achieves best-in-class resource-efficiency with scalable workspaces running on shared high-powered cloud servers. <a href='https://www.researchgate.net/publication/333096446_Reduced_carbon_emission_and_optimized_power_consumption_technique_using_container_over_virtual_machine' target='_blank'>Helping our planet</a> 🌱.",
    image: {
      src: "/images/github-codespaces/spaces-2.svg",
      alt: "Gitpod vs GitHub Codespaces price comparison",
    },
    footnote:
      "Price comparison for a developer working 5h per day, 21 per month with 8 core CPUs and 12GB RAM. Last verified 3 Sep 2021. Sources: <a href='/pricing'>Gitpod</a>, <a href='https://github.com/features/codespaces' target='_blank'>GitHub Codespaces</a>.",
  }}
/>

<Section>
  <div class="featureTable">
    <section class="toc">
      <ul class="tableOfContents" role="presentation">
        <li>Pricing (Hosted)</li>
        <li>Free Tier</li>
        <li>License</li>
        <li>Availability</li>
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
          Self-Host on GKE
        </li>

        <li class="hasIcon">
          <img
            src="/svg/brands/aws.svg"
            alt="Amazon Web Services"
            width="24"
          />Self-Host on EKS
        </li>
        <li class="hasIcon">
          <img src="/svg/brands/azure.svg" alt="Azure" width="24" />Self-Host on
          AKS
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
        <li>Desktop VS Code</li>
        <li>Multi-IDE Support</li>
      </ul>
    </section>
    <section
      class="p-xx-small sm:py-small sm:px-x-small md:p-medium rounded-2xl bg-off-white alive text-center"
    >
      <h2 class="card-heading">
        <img
          alt="Gitpod"
          src="/images/gitpod-logo.svg"
          width="40"
          height="36"
        />
      </h2>
      <dl id="gitpodPricing" class="tableColumn">
        <dt>Pricing (Hosted)</dt>
        <dd>Free for Open-Source</dd>
        <dt>Free Tier</dt>
        <dd>50h per month</dd>
        <dt>License</dt>
        <dd>Open Source</dd>
        <dt>Availability</dt>
        <dd>Everyone</dd>
        <dt>GitHub Integration</dt>
        <dd>
          <img
            alt="Yes"
            class="mx-auto"
            height="24"
            width="24"
            src="/tick.svg"
          />
        </dd>
        <dt>GitLab Integration</dt>
        <dd>
          <img
            alt="Yes"
            class="mx-auto"
            height="24"
            width="24"
            src="/tick.svg"
          />
        </dd>
        <dt>Bitbucket Integration</dt>
        <dd>
          <img
            alt="Yes"
            class="mx-auto"
            height="24"
            width="24"
            src="/tick.svg"
          />
        </dd>
        <dt>Self-Host on GKE</dt>
        <dd>
          <img
            alt="Yes"
            class="mx-auto"
            height="24"
            width="24"
            src="/tick.svg"
          />
        </dd>
        <dt>Self-Host on EKS</dt>
        <dd>
          <img
            alt="Yes"
            class="mx-auto"
            height="24"
            width="24"
            src="/tick.svg"
          />
        </dd>
        <dt>Self-Host on AKS</dt>
        <dd>
          <img
            alt="Yes"
            class="mx-auto"
            height="24"
            width="24"
            src="/tick.svg"
          />
        </dd>
        <dt>Self-Host on Kubernetes</dt>
        <dd>
          <img
            alt="Yes"
            class="mx-auto"
            height="24"
            width="24"
            src="/tick.svg"
          />
        </dd>
        <dt>Prebuilds</dt>
        <dd>
          <img
            alt="Yes"
            class="mx-auto"
            height="24"
            width="24"
            src="/tick.svg"
          />
        </dd>
        <dt>Snapshots</dt>
        <dd>
          <img
            alt="Yes"
            class="mx-auto"
            height="24"
            width="24"
            src="/tick.svg"
          />
        </dd>
        <dt>VS Code Extensions</dt>
        <dd>
          <img
            alt="Yes"
            class="mx-auto"
            height="24"
            width="24"
            src="/tick.svg"
          />
        </dd>
        <dt>iPad Support</dt>
        <dd>
          <img
            alt="Yes"
            class="mx-auto"
            height="24"
            width="24"
            src="/tick.svg"
          />
        </dd>
        <dt>Virtual Desktop (VNC)</dt>
        <dd>
          <img
            alt="Yes"
            class="mx-auto"
            height="24"
            width="24"
            src="/tick.svg"
          />
        </dd>
        <dt>Desktop VS Code</dt>
        <dd>
          <img
            alt="Yes"
            class="mx-auto"
            height="24"
            width="24"
            src="/tick.svg"
          />
        </dd>
        <dt>Multi-IDE Support</dt>
        <dd>
          <img
            alt="Yes"
            class="mx-auto"
            height="24"
            width="24"
            src="/tick.svg"
          />
        </dd>
      </dl>
    </section>
    <section
      class="p-xx-small sm:py-small sm:px-x-small md:p-medium rounded-2xl bg-off-white text-center shadow-normal"
    >
      <h2 class="card-heading h5">GitHub<br />Codespaces</h2>
      <dl>
        <dt>Pricing (Hosted)</dt>
        <dd>
          <span aria-label="unknown" class="icon">$$$</span>
        </dd>
        <dt>Free Tier</dt>
        <dd>
          <img
            alt="No"
            class="mx-auto"
            height="24"
            width="24"
            src="/cross.svg"
          />
        </dd>
        <dt>License</dt>
        <dd>Proprietary</dd>
        <dt>Availability</dt>
        <dd>Teams, Enterprise</dd>
        <dt>GitHub Integration</dt>
        <dd>
          <img
            alt="Yes"
            class="mx-auto"
            height="24"
            width="24"
            src="/tick.svg"
          />
        </dd>
        <dt>GitLab Integration</dt>
        <dd>
          <img
            alt="No"
            class="mx-auto"
            height="24"
            width="24"
            src="/cross.svg"
          />
        </dd>
        <dt>Bitbucket Integration</dt>
        <dd>
          <img
            alt="No"
            class="mx-auto"
            height="24"
            width="24"
            src="/cross.svg"
          />
        </dd>
        <dt>Self-Host on GKE</dt>
        <dd>
          <img
            alt="No"
            class="mx-auto"
            height="24"
            width="24"
            src="/cross.svg"
          />
        </dd>
        <dt>Self-Host on EKS</dt>
        <dd>
          <img
            alt="No"
            class="mx-auto"
            height="24"
            width="24"
            src="/cross.svg"
          />
        </dd>
        <dt>Self-Host on AKS</dt>
        <dd>
          <img
            alt="No"
            class="mx-auto"
            height="24"
            width="24"
            src="/cross.svg"
          />
        </dd>
        <dt>Self-Host on Kubernetes</dt>
        <dd>
          <img
            alt="No"
            class="mx-auto"
            height="24"
            width="24"
            src="/cross.svg"
          />
        </dd>
        <dt>Prebuilds</dt>
        <dd>
          <img
            alt="No"
            class="mx-auto"
            height="24"
            width="24"
            src="/cross.svg"
          />
        </dd>
        <dt>Snapshots</dt>
        <dd>
          <img
            alt="No"
            class="mx-auto"
            height="24"
            width="24"
            src="/cross.svg"
          />
        </dd>
        <dt>VS Code Extensions</dt>
        <dd>
          <img
            alt="Yes"
            class="mx-auto"
            height="24"
            width="24"
            src="/tick.svg"
          />
        </dd>
        <dt>iPad Support</dt>
        <dd>
          <img
            alt="Yes"
            class="mx-auto"
            height="24"
            width="24"
            src="/tick.svg"
          />
        </dd>
        <dt>Virtual Desktop (VNC)</dt>
        <dd>
          <img
            alt="Yes"
            class="mx-auto"
            height="24"
            width="24"
            src="/tick.svg"
          />
        </dd>
        <dt>Desktop VS Code</dt>
        <dd>
          <img
            alt="Yes"
            class="mx-auto"
            height="24"
            width="24"
            src="/tick.svg"
          />
        </dd>
        <dt>Multi-IDE Support</dt>
        <dd>
          <img
            alt="No"
            class="mx-auto"
            height="24"
            width="24"
            src="/cross.svg"
          />
        </dd>
      </dl>
    </section>
  </div>
  <p>
    <small
      >Disclaimer: All information, prices, and data were last verified on Sept.
      3, 2021. To report any incorrect or outdated information, please <a
        href="/contact/support">contact us.</a
      ></small
    >
  </p>
</Section>

<CalloutSecondary
  title="Ready to feel the difference?"
  text="Spin up an example workspace now, just link your git provider"
/>

<FeatureBox feature={openSourceFeature} />

<div class="flex justify-center flex-wrap page-bottom">
  <Card
    card={{
      title: "Automation-first",
      text: "Simply add your build command into a .gitpod.yml file and let Gitpod do the heavy-lifting. Once you’ve experienced the freedom of ephemeral workspaces, you’ll never want to go back to long-lived manually-maintained environments.",
      link: {
        href: "/#get-started",
        text: "Try Now",
      },
    }}
    btnClassNames="btn-primary mt-x-small"
    class="mx-micro mb-micro"
    headingLevel="h2"
  />

  <Card
    card={{
      title: "Code in a carbon-neutral workspace",
      text: "Not only is Gitpod more resource-efficient but it also runs on 100% carbon-neutral cloud servers (GCP). All the power, with a lower cost to our planet.",
      link: {
        href: "https://cloud.google.com/sustainability",
        text: "More on GCP carbon neutral",
      },
    }}
    btnClassNames="btn-green mt-x-small"
    class="mx-micro mb-micro"
    headingLevel="h2"
  />
</div>
