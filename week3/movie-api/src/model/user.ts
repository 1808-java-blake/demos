import { Movie } from "./movie";

export class User {
  id = 0;
  username = '';
  password = '';
  role = 'customer';
  movies: Movie[] = [];

  constructor(id?: number, username?: string, password?: string, role?: string, movies?: Movie[]) {
    id && (this.id = id);
    username && (this.username = username);
    password && (this.password = password);
    role && (this.role = role);
    movies && (this.movies = movies);
  }
}