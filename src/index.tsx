import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Data from "./Data";
import Loader from "./Loader";

import "./styles.css";
import "antd/dist/antd.css";
import { Input, Row } from "antd";

const { Search } = Input;

interface MovieList {
  title: string;
}
let movieList: MovieList[] = [];

interface Film {
  Title: string;
  Type: string;
}

interface Element {
  Title: string;
  Poster: string;
}
const getMovie = searchResult => {
  if (!searchResult) return [];
  movieList = searchResult
    .filter(function(film: Film) {
      return film.Type === "movie";
    })
    .map(function(el: Element) {
      return { title: el.Title, poster: el.Poster };
    });
  console.log(movieList);
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
        console.log(response.data);
        setFilms(getMovie(response.data.Search));
        setLoading(false);
      });
  };

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const filmArray = films.map((el, index) => {
    return <Data title={el.title} poster={el.poster} />;
  });

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
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

        /* <input
        onChange={handleTitleChange}
        value={title}
        type="text"
        placeholder="title"
      />
      <button onClick={listFilm}>search</button> */
      }
      {loading ? <Loader /> : <Row>{filmArray}</Row>}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
