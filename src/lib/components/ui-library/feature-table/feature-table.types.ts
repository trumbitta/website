export type tocItemType = "text" | "tooltip" | "image";

export type tocItem = {
  text: string;
  tooltip?: string;
  image?: FeatureImage;
};

export type FeatureItemDetail = {
  term: string;
  list?: string[];
  text?: string;
  availability?: boolean;
};

export type FeatureTableHeader = {
  headline: string;
  subtitle?: string;
  image?: FeatureImage;
};

export type FeatureImage = {
  path: string;
  alt: string;
};
