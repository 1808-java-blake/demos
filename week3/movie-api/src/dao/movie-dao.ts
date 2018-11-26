import { connectionPool } from "../util/connection-util";
import { Movie } from "../model/movie";
import { movieConverter } from "../util/movie-converter";
import { SqlMovie } from "../dto/sql-movie";

/**
 * Retreive all movies from the database
 */
export async function findAll(): Promise<Movie[]> {
  const client = await connectionPool.connect();
  try {
    const resp = await client.query('SELECT * FROM movies.movies');
    return resp.rows.map(movieConverter);
  } finally {
    client.release();
  }
}

/**
 * Retreive a movie by its id
 * @param id 
 */
export async function findById(id: number): Promise<Movie> {
  const client = await connectionPool.connect();
  try {
    const resp = await client.query('SELECT * FROM movies.movies WHERE movie_id = $1', [id]);
    let movie: SqlMovie = resp.rows[0];
    if (movie !== undefined) {
      return movieConverter(movie);
    } else {
      return undefined;
    }
  } finally {
    client.release();
  }
}

/**
 * Add a new movie to the DB
 * @param movie 
 */
export async function createMovie(movie): Promise<number> {
  const client = await connectionPool.connect();
  try {
    const resp = await client.query(
      `INSERT INTO movies.movies 
        (title, num_blades, year)
        VALUES ($1, $2, $3)
        RETURNING movie_id`, [movie.title, movie.numBlades, movie.year]);
    return resp.rows[0].movie_id;
  } finally {
    client.release();
  }
}