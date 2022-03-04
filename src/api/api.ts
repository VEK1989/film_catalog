import axios, { AxiosResponse } from "axios";
import { FilmPropertiesType } from "../store/types/filmPropertiesType";
import { GenresType } from "../store/types/genresType";
import { ItemType } from "../store/types/ItemType";

const instans = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

export class FilmsDataApi {
  static async getPopularFilms(
    page: number,
    value: string = "popular",
    name: string
  ): Promise<AxiosResponse<ItemResultType>> {
    const response = await instans.get<ItemResultType>(
      `${name}/${value}?api_key=${process.env.REACT_APP_API_KEY}&language=${process.env.REACT_APP_LANG_ENG}&page=${page}`
    );
    return response;
  }

  static async getFilmData(
    filmId: number,
    name: string
  ): Promise<AxiosResponse<FilmPropertiesType>> {
    const response = await instans.get<FilmPropertiesType>(
      `${name}/${filmId}?api_key=${process.env.REACT_APP_API_KEY}&language=${process.env.REACT_APP_LANG_ENG}`
    );
    return response;
  }

  static async getSerchFilm(
    query: string,
    page: number,
    name: string
  ): Promise<AxiosResponse<ItemResultType>> {
    const response = await instans.get<ItemResultType>(
      `search/${name}?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&page=${page}`
    );
    return response;
  }

  static async getGenresId(
    name: string
  ): Promise<AxiosResponse<GenresResponseType>> {
    const response = await instans.get<GenresResponseType>(
      `genre/${name}/list?api_key=${process.env.REACT_APP_API_KEY}&language=${process.env.REACT_APP_LANG_ENG}`
    );
    return response;
  }
}

interface ItemResultType {
  page: number;
  results: ItemType[];
  total_pages: number;
  total_results: number;
}

interface GenresResponseType {
  genres: GenresType[];
}
