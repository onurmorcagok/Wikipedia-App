type Result = {
  pageid: string;
  title: string;
  extract: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
  pageimage: string;
};

type SearchResult = {
  query?: {
    pages?: Result[];
  };
};
