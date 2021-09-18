import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleClick = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
    //this.setState({movies:movies})
  };

  render() {
    const { length } = this.state.movies;

    if (length === 0) return <h4 className="mt-5 text-danger">OPPSSSS!!! There Are No Movies in the Database.</h4>;

    return (
      <div className="container mt-5">
        <h4 className=" ">Showing {length} movies From Database.</h4>
        <table className="table table-info table-striped table-bordered table-hover mt-4 ">
          <thead>
            <tr className="table-danger">
              <th scope="col">Tittle</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr className=" table-sm" key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleClick(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
 
