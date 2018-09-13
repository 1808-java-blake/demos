import * as React from 'react';
import { environment } from '../../environment';

export class MoviesComponent extends React.Component<any, any> {

  public constructor(props: any) {
    super(props);
    this.state = {
      movies: [],
    }
  }

  public componentDidMount() {
    fetch(environment.context + 'movies')
      .then(resp => resp.json())
      .then(movies => {
        this.setState({movies});
      })
      .catch(err => {
        console.log(err);
      })
  }

  public render() {
    return (
      <table className="table table-striped table-dark col" id="movie-table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Number Blades</th>
            <th scope="col">Year</th>
          </tr>
        </thead>
        <tbody id="movie-table-body">
          {
            this.state.movies.map((movie: any) => (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.numBlades}</td>
                <td>{movie.year}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

