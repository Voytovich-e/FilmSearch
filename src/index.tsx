import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import CardMovieMeth from "./CardMovieMeth";
import Loader from "./Loader";

import "./styles.css";
import "antd/dist/antd.css";
import { Input, Row } from "antd";

const { Search } = Input;

interface MovieList {
  title: string;
}

interface Element {
  Title: string;
  Poster: string;
  imdbID: string;
}
const getMovie = searchResult => {
  if (!searchResult) return [];
  const movieList: MovieList = searchResult
    .filter(function(film) {
      return film.Type === "movie";
    })
    .map(function(el: Element) {
      return { title: el.Title, poster: el.Poster, imdbID: el.imdbID };
    });

  return movieList;
};

function App() {
  const [title, setTitle] = useState("");
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  const listFilm = () => {
    setLoading(true);
    axios
      .get("https://www.omdbapi.com/?apikey=673b4974&", {
        params: {
          s: title
        }
      })
      .then(response => {
        setFilms(getMovie(response.data.Search));
        setLoading(false);
      });
  };

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const filmArray = films.map((el, index) => {
    return (
      <CardMovieMeth
        title={el.title}
        poster={el.poster}
        imdbID={el.imdbID}
        key={el.imdbID}
      />
    );
  });

  return (
    <div className="App">
      <h1>Find Movies</h1>
      {
        <div>
          <Search
            onChange={handleTitleChange}
            value={title}
            placeholder="input search text"
            enterButton="Search"
            size="default"
            onSearch={listFilm}
            style={{ width: 300 }}
          />
        </div>
      }
      {loading ? <Loader /> : <Row type="flex">{filmArray}</Row>}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
