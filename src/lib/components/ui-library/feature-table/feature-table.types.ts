export type TocItemType = "text" | "tooltip" | "image";

export type TocItem = {
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
  header: FeatureTableHeader;
  items: FeatureItemDetail[];
};

export type FeatureTable = {
  toc: TocItem[];
  columns: FeatureTableColumn[];
};
