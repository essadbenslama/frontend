import React from "react";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import { useDispatch } from "react-redux";
import { createMovie } from "../Redux/movieSlice";

const AddMovie = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newMovie, setNewMovie] = useState({
    movieTitle: "",
    descreption: "",
    posterUrl: "",
    trailler: "",
    category: "",
    rate: 0,
  });
  const changeHandler = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const AddHandler = (e) => {
    e.preventDefault();
    dispatch(createMovie(newMovie));
    handleClose();
  };

  return (
    <div>
      <Button variant="danger" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                name="movieTitle"
                onChange={changeHandler}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="..."
                name="descreption"
                onChange={changeHandler}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>PosterUrl</Form.Label>
              <Form.Control
                type="text"
                placeholder="..."
                name="posterUrl"
                onChange={changeHandler}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>trailler</Form.Label>
              <Form.Control
                type="text"
                placeholder="..."
                name="trailler"
                onChange={changeHandler}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>category</Form.Label>
              <Form.Control
                type="text"
                placeholder="..."
                name="category"
                onChange={changeHandler}
              />
            </Form.Group>

            <Rating
              name="simple-controlled"
              max={10}
              value={null}
              onChange={(event, newValue) => {
                setNewMovie({ ...newMovie, rate: newValue });
              }}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={AddHandler}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
