import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Pro = () => {
  const { id } = useParams();
  const { mymovies } = useSelector((state) => state.movie);
  const likedmovie = mymovies?.Filter((el) => el._id === id);
  const [favMovie, setFavMovie] = useState(likedmovie);
  const favHandler = (e) => {
    setFavMovie({ ...favMovie, [e.target.name]: e.target.vallue });
  };

  return <div>hello</div>;
};

export default Pro;
