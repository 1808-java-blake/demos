export class Movie {
  id = 0;
  title = '';
  numBlades = 0;
  year = 0;

  constructor(id?: number, title?: string, numBlades?: number, year?: number) {
    id && (this.id = id);
    title && (this.title = title);
    numBlades && (this.numBlades = numBlades);
    year && (this.year = year);
  }
}