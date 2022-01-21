import { isEurope } from "../../../utils/helpers";
import type {
  FeatureTable,
  FeatureTableColumn,
  FeatureTableToc,
} from "./feature-table.types";

export const freePlanTableData: FeatureTableColumn = {
  header: {
    headline: "Free",
    subtitle: `${isEurope() ? "€" : "$"}0 per user/month`,
  },
  items: [
    {
      term: "Public & Private Repos",
      text: "limited to 50h",
    },
    {
      term: "Team Plans",
      availability: false,
    },
    {
      term: "Inactivity timeout",
      text: "30min",
    },
    {
      term: "timeout Boost",
      availability: false,
    },
    {
      term: "Parallel Workspaces",
      text: "4",
    },
    {
      term: "prebuilds",
      availability: true,
    },
    {
      term: "Shared workspaces",
      availability: true,
    },
    {
      term: "Snapshots",
      availability: true,
    },
    {
      term: "Admin Dashboard",
      availability: false,
    },
    {
      term: "Encrypted backups",
      availability: true,
    },
    {
      term: "multi-ide support",
      availability: true,
    },
    {
      term: "GitLab",
      availability: true,
    },
    {
      term: "GitHub",
      availability: true,
    },
    {
      term: "Bitbucket",
      availability: true,
    },
  ],
};

export const personalPlanTableData: FeatureTableColumn = {
  header: {
    headline: "Personal",
    subtitle: `${isEurope() ? "€8" : "$9"} per user/month`,
  },
  items: [
    {
      term: "Public & Private Repos",
      text: "limited to 100h",
    },
    {
      term: "Team Plans",
      availability: false,
    },
    {
      term: "Inactivity timeout",
      text: "30min",
    },
    {
      term: "timeout Boost",
      availability: false,
    },
    {
      term: "Parallel Workspaces",
      text: "4",
    },
    {
      term: "prebuilds",
      availability: true,
    },
    {
      term: "Shared workspaces",
      availability: true,
    },
    {
      term: "Snapshots",
      availability: true,
    },
    {
      term: "Admin Dashboard",
      availability: false,
    },
    {
      term: "Encrypted backups",
      availability: true,
    },
    {
      term: "multi-ide support",
      availability: true,
    },
    {
      term: "GitLab",
      availability: true,
    },
    {
      term: "GitHub",
      availability: true,
    },
    {
      term: "Bitbucket",
      availability: true,
    },
  ],
};

export const professionalPlanTableData: FeatureTableColumn = {
  header: {
    headline: "Professional",
    subtitle: `${isEurope() ? "€23" : "$25"} per user/month`,
  },
  items: [
    {
      term: "Public & Private Repos",
      text: "unlimited",
    },
    {
      term: "Team Plans",

      availability: true,
    },
    {
      term: "Inactivity timeout",
      text: "30min",
    },
    {
      term: "timeout Boost",
      availability: false,
    },
    {
      term: "Parallel Workspaces",
      text: "8",
    },
    {
      term: "prebuilds",
      availability: true,
    },
    {
      term: "Shared workspaces",
      availability: true,
    },
    {
      term: "Snapshots",
      availability: true,
    },
    {
      term: "Admin Dashboard",
      availability: false,
    },
    {
      term: "Encrypted backups",
      availability: true,
    },
    {
      term: "multi-ide support",
      availability: true,
    },
    {
      term: "GitLab",
      availability: true,
    },
    {
      term: "GitHub",
      availability: true,
    },
    {
      term: "Bitbucket",
      availability: true,
    },
  ],
};

export const unleashedPlanTableData: FeatureTableColumn = {
  header: {
    headline: "Unleashed",
    subtitle: `${isEurope() ? "€35" : "$39"} per user/month`,
  },
  items: [
    {
      term: "Public & Private Repos",
      text: "unlimited",
    },
    {
      term: "Team Plans",
      availability: true,
    },
    {
      term: "Inactivity timeout",
      text: "1h",
    },
    {
      term: "timeout Boost",
      text: "3h",
    },
    {
      term: "Parallel Workspaces",
      text: "16",
    },
    {
      term: "prebuilds",
      availability: true,
    },
    {
      term: "Shared workspaces",
      availability: true,
    },
    {
      term: "Snapshots",
      availability: true,
    },
    {
      term: "Admin Dashboard",
      availability: false,
    },
    {
      term: "Encrypted backups",
      availability: true,
    },
    {
      term: "multi-ide support",
      availability: true,
    },
    {
      term: "GitLab",
      availability: true,
    },
    {
      term: "GitHub",
      availability: true,
    },
    {
      term: "Bitbucket",
      availability: true,
    },
  ],
};

export const pricingTableToc: FeatureTableToc[] = [
  {
    type: "text",
    data: { text: "Public & Private Repos" },
  },
  {
    type: "tooltip",
    data: {
      text: "Team Plans",
      tooltip:
        "You can create team plans and manage subscriptions for your team members.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Inactivity timeout",
      tooltip: "Time after which workspaces are automatically stopped.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "timeout Boost",
      tooltip: "Extra workspace inactivity timeout boost.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Parallel Workspaces",
      tooltip: "Run multiple workspaces at the same time.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "prebuilds",
      tooltip:
        "Enable prebuilds to continuously build your Git branches, so you and your team can always start coding right away.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Shared workspaces",
      tooltip: "Pair program with your team by sharing running workspaces.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Snapshots",
      tooltip:
        "Create a copy of your workspace by sharing a snapshot with your team.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Admin Dashboard",
      tooltip: "Access to exclusive stats of your team.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Encrypted backups",
      tooltip:
        "Keeps your data safe. More on <a href='/security'>security</a>.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "multi-ide support",
      tooltip:
        "Connect Gitpod with your favourite IDE. View <a href='/docs/editors'>docs/IDE</a> to see all suported IDE’s.",
    },
  },
  {
    type: "image",
    data: {
      text: "GitLab",
      image: {
        path: "/svg/gitlab.svg",
        alt: "GitLab",
      },
    },
  },
  {
    type: "image",
    data: {
      text: "GitHub",
      image: {
        path: "/svg/github.svg",
        alt: "GitHub",
      },
    },
  },
  {
    type: "image",
    data: {
      text: "Bitbucket",
      image: {
        path: "/svg/bitbucket.svg",
        alt: "Bitbucket",
      },
    },
  },
];

export let pricingTable: FeatureTable = {
  toc: pricingTableToc,
  columns: [
    freePlanTableData,
    personalPlanTableData,
    professionalPlanTableData,
    unleashedPlanTableData,
  ],
};
