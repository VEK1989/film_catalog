import React from "react";

import NoPosterCard from "../NoPosterCard/NoPosterCard";

const FilmPoster: React.FC<IProps> = ({ poster_path }) => {
  if (!poster_path) {
    return <NoPosterCard />;
  }

  return (
    <img
      src={`https://www.themoviedb.org/t/p/original${poster_path}`}
      alt="#"
      width="250px"
      height="330px"
    />
  );
};

export default FilmPoster;

interface IProps {
  poster_path: string;
}
