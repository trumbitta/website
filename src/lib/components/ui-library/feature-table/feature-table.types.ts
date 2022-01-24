export type FeatureTocItemType = "text" | "tooltip" | "image";

export type FeatureTocItem = {
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

export type FeatureTableColumn = {
  isHighlighted?: boolean;
  header: FeatureTableHeader;
  items: FeatureItemDetail[];
};

export type FeatureTableToc = {
  type: FeatureTocItemType;
  data: FeatureTocItem;
};

export type FeatureTable = {
  toc: FeatureTableToc[];
  columns: FeatureTableColumn[];
};
