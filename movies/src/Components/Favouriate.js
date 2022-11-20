import React, { Component } from "react";
// import { movies } from "./getMovies";

export default class Favouriate extends Component {
  constructor() {
    super();
    this.state = {
      genres: [],
      currGenre: "All Genres",
      movies: [],
      currText: "",
      limit: 5,
      currPage: 1,
    };
  }
  componentDidMount() {
    let genreids = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Sci-Fi",
      10770: "TV",
      53: "Thriller",
      10752: "War",
      37: "Western",
    };

    let data = JSON.parse(localStorage.getItem("movies-app") || "[]");

    let temp = [];
    data.forEach((movieObj) => {
      if (!temp.includes(genreids[movieObj.genre_ids[0]])) {
        temp.push(genreids[movieObj.genre_ids[0]]);
      }
    });

    temp.unshift("All Genres");

    this.setState({
      genres: [...temp],
      movies: [...data],
    });
  }

  handleGenreChange = (genre) => {
    this.setState({
      currGenre: genre,
    });
  };

  sortPopularityDesc = () => {
    let temp = this.state.movies;
    temp.sort(function (objA, objB) {
      return objB.popularity - objA.popularity;
    });
    this.setState({
      movies: [...temp],
    });
  };
  sortPopularityAsc = () => {
    let temp = this.state.movies;
    temp.sort(function (objA, objB) {
      return objA.popularity - objB.popularity;
    });
    this.setState({
      movies: [...temp],
    });
  };

  sortRatingDesc = () => {
    let temp = this.state.movies;
    temp.sort(function (objA, objB) {
      return objB.vote_average - objA.vote_average;
    });
    this.setState({
      movies: [...temp],
    });
  };
  sortRatingAsc = () => {
    let temp = this.state.movies;
    temp.sort(function (objA, objB) {
      return objA.vote_average - objB.vote_average;
    });
    this.setState({
      movies: [...temp],
    });
  };

  handlePageChange = (page) => {
    this.setState({
      currPage: page
    })
  }

  handleDelete = (id) => {
    let newArr = [];
    newArr = this.state.movies.filter((movieObj) => (movieObj.id !== id))
    this.setState({
      movies: [...newArr],
    })
    localStorage.setItem('movies-app', JSON.stringify(newArr))
  }

  render() {
    // console.log("render called");
    // const movie = movies.results;
    // console.log(movie);

    let genreids = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Sci-Fi",
      10770: "TV",
      53: "Thriller",
      10752: "War",
      37: "Western",
    };

    let filter_arr = [];

    if (this.state.currText === "") {
      filter_arr = this.state.movies;
    } else {
      filter_arr = this.state.movies.filter((movieObj) => {
        let title = movieObj.original_title.toLowerCase();
        return title.includes(this.state.currText.toLocaleLowerCase());
      });
    }

    // if(this.state.currGenre==="All Genres"){
    //   filter_arr = this.state.movies
    // }
    if (this.state.currGenre !== "All Genres") {
      filter_arr = this.state.movies.filter(
        (movieObj) => genreids[movieObj.genre_ids[0]] === this.state.currGenre
      );
    }

    let pages = Math.ceil(filter_arr.length / this.state.limit);
    let pagesarr = [];
    for (let i = 1; i <= pages; i++) {
      pagesarr.push(i);
    }
    let si = (this.state.currPage - 1) * this.state.limit;
    let ei = si + this.state.limit;
    filter_arr = filter_arr.slice(si, ei);
    // this.setState({
    //   genres: [...temp]
    // })
    // console.log(temp);
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-12">
              <div className="list-group my-3">
                {this.state.genres.map((genres) =>
                  this.state.currGenre === genres ? (
                    <button
                      type="button"
                      className="list-group-item list-group-item-action"
                      style={{
                        background: "#3f51b5",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      {genres}
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="list-group-item list-group-item-action"
                      style={{ background: "white", color: "#3f51b5" }}
                      onClick={() => this.handleGenreChange(genres)}
                    >
                      {genres}
                    </button>
                  )
                )}
              </div>
            </div>
            <div className="col-lg-9 col-sm-12 my-3">
              <div className="row">
                <div className="col-sm-12 my-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Movie Name"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={this.state.currText}
                    onChange={(e) =>
                      this.setState({ currText: e.target.value })
                    }
                  />
                </div>
                <div className="col-sm-12">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Number"
                    aria-label="Number"
                    aria-describedby="basic-addon1"
                    value={this.state.limit} onChange={(e) => this.setState({ limit: e.target.value })} />
                </div>
                <div className="p-0 row my-3">
                  <div className="col-lg-9 col-sm-12">
                    <>
                      <table className="table table-sm">
                        <thead>
                          <tr>
                            <th scope="col">
                              Title
                            </th>
                            <th scope="col">General</th>
                            <th scope="col">
                              <i onClick={this.sortPopularityDesc}>&#8593;</i>Popularity<i onClick={this.sortPopularityAsc}>&#8595;</i>
                            </th>
                            <th scope="col">
                              <i onClick={this.sortRatingDesc}>&#8593;</i>Rating<i onClick={this.sortRatingAsc}>&#8595;</i>
                            </th>
                            <th scope="col">OP</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filter_arr.map((movieObj) => (
                            <tr>
                              <th scope="row"><img
                                src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                                alt=""
                                style={{ width: "5rem" }}
                              />{movieObj.original_title}
                              </th>
                              <td>{genreids[movieObj.genre_ids[0]]}</td>
                              <td>{movieObj.popularity}</td>
                              <td>{movieObj.vote_average}</td>
                              <span>
                                <button type="button" className="btn btn-warning btn-sm" onClick={() => this.handleDelete(movieObj.id)}>
                                  &#10060;
                                </button>
                              </span>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </>
                  </div>
                  <div className="Page navigation examplecontainer">
                    <ul className="pagination">
                      {
                        pagesarr.map((page) => (
                          <li class="page-item">
                            <button class="page-link" onClick={() => this.handlePageChange(page)}>
                              {page}
                            </button>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      </ >
    );
  }
}
