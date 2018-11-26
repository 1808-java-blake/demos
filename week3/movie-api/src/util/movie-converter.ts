import { SqlMovie } from "../dto/sql-movie";
import { Movie } from "../model/movie";

/**
 * This is used to convert a sql movie into an actual movie
 */
export function movieConverter(movie: SqlMovie) {
  return new Movie(movie.movie_id, movie.title, movie.num_blades, movie.year)
}