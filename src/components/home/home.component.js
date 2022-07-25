import React, { useEffect, useState } from "react";
import { Row, Col, CardGroup } from "react-bootstrap";
import { Buffer } from "buffer";
import FoodCard from "./foodCard/foodCard.component";
import Image from "./foodCard/food.jpg";
import "./home.css";

function Home({ foodlist }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const responese = await fetch("http://localhost:4000/");
      const data = await responese.json();
      setData(data);
      console.log("fetchData Success!");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <CardGroup className="mt-3 md-6">
      <Row
        className="justify-content-center g-4"
        /*{
          width >= 768
            ? "justify-content-center g-4"
            : width < 768 && width >= 576
            ? "mobile-center g-4"
            : "small-center g-4"
        }*/
      >
        {data.map((dat, index) => {
          const base64Img = Buffer(dat.image.data, "base64").toString("base64");
          return (
            <Col md="auto">
              <FoodCard
                cardStyleWidth={
                  width > 767
                    ? "19rem"
                    : width > 576 && width <= 767
                    ? `${width * 0.8}px`
                    : "90%"
                }
                cardMargin={
                  width > 767
                    ? ""
                    : width > 576 && width <= 767
                    ? `${width * 0.1}px`
                    : "5%"
                }
                cardVariant="top"
                image={`data:image;base64,${base64Img}`}
                title={dat.name}
                description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet."
              />
            </Col>
          );
        })}
      </Row>
    </CardGroup>
  );
}

export default Home;
