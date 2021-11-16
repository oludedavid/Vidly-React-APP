import React, { Component } from "react";
import * as Movie from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: Movie.getMovies(),
  };

  handleDelete = (movie) => {
    const moviesNew = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: moviesNew });
  };

  render() {
    return (
      <main className="container">
        <h1>My Movies List!</h1>
        <p>{this.numberOfMovies()}</p>

        <table className="table table-hover">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th>#</th>
            </tr>
          </thead>

          <tbody>
            {this.state.movies.map((movie) => {
              return (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    {
                      <button
                        onClick={() => {
                          this.handleDelete(movie);
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    }
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    );
  }

  numberOfMovies = () => {
    let numOfMovies = this.state.movies.length;
    if (numOfMovies === 0) {
      return "There are no more movies in the database!";
    } else if (numOfMovies === 1) {
      return `Remaining ${numOfMovies} movie in the Database `;
    } else {
      return `Showing ${numOfMovies} movies in the Database `;
    }
  };
}

export default Movies;
