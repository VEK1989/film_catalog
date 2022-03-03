export interface FilmPropertiesType {
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: BelongsToCollection;
  budget?: number;
  created_by?: CreatedByType;
  episode_run_time?: number[];
  first_air_date?: string;
  genres: GenreType[];
  homepage?: string;
  id?: number;
  in_production?: boolean;
  imdb_id?: string;
  languages?: string[];
  last_air_date?: string;
  networks?: NetworksType[];
  number_of_episodes?: number;
  number_of_seasons?: number;
  origin_country?: string[];
  original_language?: string;
  original_title?: string;
  original_name?: string;
  overview: string;
  popularity?: number;
  poster_path: string;
  production_companies?: ProductionCompaniesType[];
  release_date?: string;
  revenue?: number;
  runtime: number;
  seasons?: SeasonsType[];
  spoken_languages?: SpokenLanguagesType[];
  status?: string;
  tagline?: string;
  title?: string;
  type?: string;
  video?: boolean;
  vote_average: number;
  vote_count?: number;
}

type BelongsToCollection = {
  id: number;
  name?: string;
  poster_path: string;
  backdrop_path: string;
};

type GenreType = {
  id: number;
  name: string;
};

type ProductionCompaniesType = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

type SpokenLanguagesType = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

type CreatedByType = {
  credit_id: string;
  gender: number;
  id: number;
  name: string;
  profile_path: string;
};

type NetworksType = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

type SeasonsType = {
  air_date: string;
  episode_count: number;
  id: number;
  overview: string;
  poster_path: string;
  season_number: number;
};
