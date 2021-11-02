import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.scss";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies,fetchAsyncShows } from "../../features/movies/movieSlice";
const Header = () => {
  const dispatch = useDispatch()
  const [searchName, setSearchName] = useState("")

  const searchMovieOrSeries = (e) => {
    e.preventDefault()
    dispatch(fetchAsyncMovies(searchName))
    dispatch(fetchAsyncShows(searchName))
    setSearchName("")
  }
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie Details</div>
      </Link>
      <div className="searchBar">
        <div>
          <input
            type="text"
            placeholder="search movies/series"
            onChange={(e) => { setSearchName(e.target.value) }}
            value={searchName}
          />
          <button onClick={searchMovieOrSeries} >search</button>
        </div>
        <div className="user-image">
          <img src={user} alt="user" />
        </div>
      </div>
    </div>
  );
};

export default Header;
