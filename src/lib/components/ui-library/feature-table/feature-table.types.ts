export type tocItemType = "text" | "tooltip" | "image";

export type tocItem = {
  text: string;
  tooltip?: string;
  image?: {
    path: string;
    alt: string;
  };
};

export type FeatureItemDetail = {
  term: string;
  list?: string[];
  text?: string;
  availability?: boolean;
};
