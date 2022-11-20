import { movies } from "./getMovies";
import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    let movie = movies.results[0];
    // let movie = "";
    
    return (
      <>
        {movie === "" ? (
          <div className="d-flex justify-content-center my-2">
            <div className="spinner-border text-secondary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="card container p-3 my-3" style={{width: '22rem'}}>
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}className="card-img-top img-responsive" alt={movie.title} />
            <div className="card-body">
              <h1 className="card-title">{movie.original_title}</h1>
              <p className="card-text">
                {movie.overview}
              </p>
              {/* <a href="/" className="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>
        )}
      </>
    );
  }
}
