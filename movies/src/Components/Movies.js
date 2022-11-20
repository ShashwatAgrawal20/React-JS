import React, { Component } from "react";
// import { movies } from "./getMovies";
import axios from 'axios';
export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      hover: "",
      pagearr: [1],
      currPage: 1,
      movies: [],
      favouriates: [],
    };
  }
  async componentDidMount() {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=d223d1bd508999a34ddf355fd32d6a8c&language=en-US&page=${this.state.currPage}`)
    let data = res.data
    // console.log(data)
    this.setState({
      movies: [...data.results]
    })
  }

  changeMovies = async () => {
    // console.log(this.state.currPage);
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=d223d1bd508999a34ddf355fd32d6a8c&language=en-US&page=${this.state.currPage}`)
    let data = res.data
    // console.log(data)
    this.setState({
      movies: [...data.results]
    })
  }

  handleNext = () => {
    let temparr = []
    for (let i = 1; i <= this.state.pagearr.length + 1; i++) {
      temparr.push(i);
    }
    this.setState({
      pagearr: [...temparr],
      currPage: this.state.currPage + 1
    }, this.changeMovies)
  }

  handlePrev = () => {
    if(this.state.currPage!==1){
      this.setState({
        currPage:this.state.currPage-1
      }, this.changeMovies)
    }
  }

  pgClick = (value) => {
    if(value!==this.state.currPage){
      this.setState({
        currPage:value
      }, this.changeMovies)
    }
  }

  handleFavouriates=(movie)=>{
    let oldData = JSON.parse(localStorage.getItem('movies-app') || "[]")
    if(this.state.favouriates.includes(movie.id)){
      oldData = oldData.filter((m)=>m.id!==movie.id)
    }
    else{
      oldData.push(movie);
    }
    localStorage.setItem('movies-app', JSON.stringify(oldData));
    this.handleFavouriateState();
    // console.log(oldData);
  }

  handleFavouriateState=()=>{
    let oldData = JSON.parse(localStorage.getItem('movies-app') || "[]")
    let temp = oldData.map((movie)=>movie.id);
    this.setState({
      favouriates: [...temp],
    })
  }

  render() {
    // let movie = movies.results;
    return (
      <>
        {this.state.movies.length === 0 ? (
          <div className="d-flex justify-content-center my-2">
            <div className="spinner-border text-secondary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-center fw-bolder">
              Trending Movies
            </h2>
            <div className="container">
              <div className="row">
                {this.state.movies.map((movieObj) => (
                  <div
                    className="col-sm-4 my-2 container"
                    onMouseEnter={() =>
                      this.setState({
                        hover: movieObj.id,
                      })
                    }
                    onMouseLeave={() => this.setState({ hover: "" })}
                  >
                    <div className="card h-100 d-flex p-1">
                      <img
                        src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                        className="card-img-top img-responsive"
                        alt={this.state.movies.title}
                      />
                      <div className="card-body">
                        <h4 className="card-title">
                          {movieObj.original_title}
                        </h4>
                        <p className="card-text">
                          {movieObj.overview.slice(0, 100) + "..."}
                        </p>
                      </div>
                      {(this.state.hover === movieObj.id && (
                        <button onClick={() => this.handleFavouriates(movieObj)} className="btn btn-primary">
                          {this.state.favouriates.includes(movieObj.id)? "Remove from" : "Add to" } favouriate
                        </button>
                      )) || (<button className="btn btn-primary invisible">
                        Add to favouriate
                      </button>)}
                    </div>
                  </div>
                ))}
              </div>
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <button className="btn page-link" onClick={this.handlePrev}>
                      Previous
                    </button>
                  </li>
                  {this.state.pagearr.map((value) => (
                    <li className="page-item">
                      <button className="page-link" onClick={()=>this.pgClick(value)}>
                        {value}
                      </button>
                    </li>
                  ))}
                  <li className="page-item">
                    <button className="page-link" onClick={this.handleNext}>
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </>
    );
  }
}
