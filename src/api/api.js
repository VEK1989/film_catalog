import * as axios from "axios";

const apiKey = "808cfd2d723af708f7da7e18f3b10d1e";
const langEng = "en-US";

const instans = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export class FilmsDataApi {
  static async getPopularFilms(page, value = "popular", name) {
    const response = await instans.get(
      `${name}/${value}?api_key=${apiKey}&language=${langEng}&page=${page}`
    );
    return response.data;
  }

  static async getFilmData(filmId, name) {
    const response = await instans.get(
      `${name}/${filmId}?api_key=${apiKey}&language=${langEng}`
    );
    return response.data;
  }

  static async getSerchFilm(query, page, name) {
    const response = await instans.get(
      `search/${name}?api_key=${apiKey}&query=${query}&page=${page}`
    );
    return response.data;
  }

  static async getGenresId(name) {
    const response = await instans.get(
      `genre/${name}/list?api_key=${apiKey}&language=${langEng}`
    );
    return response.data;
  }
}
