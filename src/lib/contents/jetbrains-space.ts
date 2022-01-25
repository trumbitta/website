import type { TableData } from "$lib/types/table-data.type";
import type { Feature } from "$lib/types/feature.type";

export const openSourceFeature = {
  title: "Open-source",
  paragraph:
    "Gitpod puts developers' interest first and seemlessly integrates with your existing tools & workflows.",
  featureList: [
    "Host Gitpod yourself on GCP, AWS, Azure or self-managed Kubernetes",
    "Contribute to Gitpod and build your own customizations",
    "Works just as smoothly with GitHub, GitLab and Bitbucket",
  ],
  image: {
    src: "/images/github-codespaces/spaces-3.svg",
    alt: "Gitpod integrations",
  },
};

export const features: Feature[] = [
  {
    title: "Your environment, your tools, your&nbsp;craft",
    paragraph:
      "We adapt, so you don't need to. That's why we natively integrated JetBrains IDEs into Gitpod next to VS Code. Don't limit yourself or your team to a single vendor and choose from the best options available.",
    image: {
      src: "/images/jetbrains-space/ides.png",
      alt: "Multiple IDEs supported by Gitpod",
    },
  },
  openSourceFeature,
  {
    title: "Ephemeral workspaces",
    paragraph:
      "Spin up preconfigured, standardized dev environments from any git context when you need them and close them when you're done. Once you’ve experienced the freedom, you won’t go back to the friction of long-living stateful environments as JetBrains Spaces offers it.",
    image: {
      src: "/svg/features/muti-track-development.svg",
      alt: "Ephemeral Workspaces",
    },
  },
  {
    title: "Greater cost-efficiency",
    paragraph:
      "Instead of running on expensive VMs, Gitpod provisions secure containers and achieves best-in-class resource-efficiency with scalable workspaces running on shared high-powered cloud servers. <strong>Saves you money, helps our planet 🌱</strong>.",
    image: {
      src: "/svg/jetbrains-space/cost-efficency.svg",
      alt: "Greater cost-efficiency",
    },
    footnote:
      'Price comparison for a developer working 5h per day, 21 per month with 8 core CPUs and 12GB RAM. Last verified 9 Dec 2021. Sources: <a href="/pricing">Gitpod</a>, <a href="https://www.jetbrains.com/space/buy/?billing=yearly#cloud" target="_blank">JetBrains Space</a>.',
  },
];

export const gitpodTableData: TableData = {
  image: {
    src: "/svg/media-kit/logo-mark.svg",
  },
  title: "Gitpod",
  details: [
    {
      term: "Pricing (SAAS)",
      text: "Free for 50h/month",
    },
    {
      term: "License",
      text: "Open-Source",
    },
    {
      term: "GitHub Integration",
      availibility: true,
    },
    {
      term: "GitLab Integration",
      availibility: true,
    },
    {
      term: "Bitbucket Integration",
      availibility: true,
    },
    {
      term: "Self-Host on GCP",
      availibility: true,
    },
    {
      term: "Self-Host on AWS",
      availibility: true,
    },
    {
      term: "Self-Host on Kubernetes",
      availibility: true,
    },
    {
      term: "Prebuilds",
      availibility: true,
    },
    {
      term: "Snapshots",
      availibility: true,
    },
    {
      term: "VS Code Extensions",
      availibility: true,
    },
    {
      term: "iPad Support",
      availibility: true,
    },
    {
      term: "Virtual Desktop (VNC)",
      availibility: true,
    },
    {
      term: "Jetbrains Ide Support",
      availibility: true,
    },
    {
      term: "VS Code Support",
      availibility: true,
    },
  ],
};

export const jetbrainsTableData: TableData = {
  image: {
    src: "/svg/jetbrains-space/space.svg",
  },
  title: "JetBrains Space",
  details: [
    {
      term: "Pricing (SAAS)",
      text: "$$$",
    },
    {
      term: "License",
      text: "Proprietary",
    },
    {
      term: "GitHub Integration",
      availibility: false,
    },
    {
      term: "GitLab Integration",
      availibility: false,
    },
    {
      term: "Bitbucket Integration",
      availibility: false,
    },
    {
      term: "Self-Host on GCP",
      availibility: false,
    },
    {
      term: "Self-Host on AWS",
      availibility: false,
    },
    {
      term: "Self-Host on Kubernetes",
      availibility: false,
    },
    {
      term: "Prebuilds",
      availibility: true,
    },
    {
      term: "Snapshots",
      availibility: true,
    },
    {
      term: "VS Code Extensions",
      availibility: true,
    },
    {
      term: "iPad Support",
      availibility: true,
    },
    {
      term: "Virtual Desktop (VNC)",
      availibility: false,
    },
    {
      term: "Jetbrains Ide Support",
      availibility: true,
    },
    {
      term: "VS Code Support",
      availibility: false,
    },
  ],
};
