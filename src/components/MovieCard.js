import React from "react";
import Rating from "@mui/material/Rating";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie } from "../Redux/movieSlice";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";

const MovieCard = ({ movieInfo }) => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  console.log(movieInfo);
  console.log(userInfo);
  return (
    <div>
      <Card style={{ width: "266px" }}>
        <Card.Img
          style={{
            width: "266px",
            height: "300px",
            backgroundImage: `url(${movieInfo.posterUrl}) `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          variant="top"
        />
        <Card.Body>
          <Card.Title style={{ color: " gray" }}>
            {movieInfo.movieTitle}
          </Card.Title>
          <Card.Text>
            <h6>Description:</h6>
            {movieInfo.descreption.length > 123
              ? ` ${movieInfo.descreption.substring(0, 120)}... `
              : movieInfo.descreption}
          </Card.Text>
          <Card.Text>
            <h6>Category:</h6>
            {movieInfo.category}
          </Card.Text>

          <Card.Text>
            <h6>Trailer:</h6>
            <iframe
              width="230px"
              height="250px"
              src={movieInfo.trailler}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Card.Text>
        </Card.Body>

        <Rating name="read-only" readOnly max={10} value={movieInfo.rate} />

        {userInfo?.role === "admin" || userInfo._id === movieInfo.postedBy ? (
          <>
            <Button
              variant="danger"
              onClick={() => {
                dispatch(deleteMovie(movieInfo._id));
              }}
            >
              Delete
            </Button>
            <Link to={`/new/${movieInfo._id}`}>
              <Button variant="secondary">Update</Button>
            </Link>
          </>
        ) : (
          ""
        )}

        <Link to={`/pro/${movieInfo._id}`}>
          <FavoriteIcon style={{ color: "red" }} />
        </Link>
      </Card>
    </div>
  );
};

export default MovieCard;
