export interface ItemType {
  adult?: boolean;
  first_air_date?: string;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  name?: string;
  original_language: string;
  original_title?: string;
  original_name?: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
}
