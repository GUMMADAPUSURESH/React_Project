import React from "react";
import "./Netflix.css";

//Destructuring props while taking
const MovieBanner = ({ movieBanner }) => {
  return <img className="moviebanner" src={movieBanner} alt="Netflix Banner" />;
};

//Destructuring props while taking
const MovieTitle = ({ movieTitle }) => {
  return <h4 className="movietitle">{movieTitle}</h4>;
};

const Netflix = ({ moviebanner, movietitle, link }) => {
  return (
    <a
      className="movielink"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <article className="movie">
        <MovieBanner movieBanner={moviebanner} />
        <MovieTitle movieTitle={movietitle} />
      </article>
    </a>
  );
};

export default Netflix;
