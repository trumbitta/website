export type tocItemType = "text" | "tooltip" | "image";

export type tocItem = {
  text: string;
  tooltip?: string;
  image?: {
    path: string;
    alt: string;
  };
};
