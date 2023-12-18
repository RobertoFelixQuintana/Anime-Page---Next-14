export interface IAnimeGetResponse {
  id: number;
  name: string;
  russian: string;
  image: Image;
  url: string;
  kind: string;
  score: string;
  status: string;
  episodes: number;
  episodes_aired: number;
  aired_on: Date;
  released_on: Date;
}

export interface Image {
  original: string;
  preview: string;
  x96: string;
  x48: string;
}
