type RelatedDocs = {
  path: string;
  title: string;
};

export type Screencast = {
  description: string;
  duration: number;
  nextScreencast?: number;
  screencastNumber?: number;
  relatedDocs?: RelatedDocs[];
  tile: string;
  title: string;
  youtubeId: string;
  tags?: string[];
};
