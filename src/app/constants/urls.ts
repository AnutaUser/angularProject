import {environment} from "../../environments/environment";

const {API, API_KEY} = environment;

export const urls = {
  movies: `${API}/discover/movie`,
  genres: `${API}/genre/movie/list`
}
