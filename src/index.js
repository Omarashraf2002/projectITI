import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TvShow from "./Components/TvShow/TvShow";
import TvDetails from "./Components/TvDetails/TvDetails";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { Provider } from "react-redux";
import store from './store/store';
import Favorite from "./Components/Favorite/Favorite";
import Movies from "./Components/movies/movies";
import MoviesDetails from "./Components/moviedetails/moviedeatails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tv" element={<TvShow />} />
      <Route path="/movie" element={<Movies />} />
      <Route path="/myfavorite" element={<Favorite />} />
      <Route path="/tvdetails/:id" element={<TvDetails />} />
      <Route path="/moviedeatails/:id" element={<MoviesDetails />} />
    </Routes>
   
    <App /> 
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
