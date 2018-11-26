import { Pool, Client } from 'pg';

export const connectionPool = new Pool({
  user: process.env["MOVIE_DB_USERNAME"],
  host: process.env["MOVIE_DB_URL"] || 'localhost',
  database: 'postgres',
  password: process.env["MOVIE_DB_PASSWORD"],
  port: 5432,
  max: 2
})
