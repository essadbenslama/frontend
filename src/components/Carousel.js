import React from "react";

import Carousel from "react-bootstrap/Carousel";

const Carossel = () => {
  return (
    <div>
      <Carousel style={{ width: "900px", marginLeft: "300px" }}>
        <Carousel.Item interval={1000}>
          <img
            style={{ height: "400px" }}
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9YoHu5dcxihLnQV9hrPmy2vn1lCpjjQsy_A&usqp=CAU"
            alt="firt movie"
          />
          <Carousel.Caption>
            <h3>Horror</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGw477Oik_Tn7zNdOoRekUKaySTJNWjDQNOA&usqp=CAU"
            alt="second movie"
            style={{ height: "400px" }}
          />

          <Carousel.Caption>
            <h3>Action</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsM6u4bSTsLbOv9H6ME9Erzster3jyadP50Q&usqp=CAU"
            alt="third movie"
            style={{ height: "400px" }}
          />

          <Carousel.Caption>
            <h3>Comedie</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8KDjgV9X0YuxDK_s4fm7UgypgwB1pfHZDOw&usqp=CAU"
            alt="fourth movie"
            style={{ height: "400px" }}
          />

          <Carousel.Caption>
            <h3>Romance</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carossel;
