import {
  Container,
  Row,
  Col,
  Dropdown,
  Card,
  CardTitle,
  CardBody,
  CardImg,
  Button,
} from "react-bootstrap";
import AboutCard from "./aboutuscard";
import { Link } from "react-router-dom";
import { useState } from "react";
// import Condo1 from "./condo1.jpg";
// import Condo2 from "./condo2.jpg";

export default function Filter() {
  const condoDetails = require("../Layout/condos.json");
  const [rating, setRating] = useState("");

  const getCardDesign = (index, items, Rating) => {
      return (
        <Col key={index} lg="6">
          <Card className="rounded-0 m-1 border-0 p-2">
            <CardImg
              variant="top"
              src={items.image}
              className=" cardimg"
            ></CardImg>
            <CardTitle>{items.title}</CardTitle>
            <CardBody className="d-flex justify-content-between">
              {items.body}
              <span className="border bg-success rounded-1 p-1 text-white">
                <i className="fa-solid fa-star"></i> {items.rating}
              </span>
            </CardBody>
            <Link
              to={"/condodetails/" + items.id}
              className="btn btn-dark rounded-0"
            >
              Details
            </Link>
          </Card>
        </Col>
      );
    } 
  
  

  return (
    <>
      <Container fluid className="">
        <Row>
          <div className="text-center text-white condo d-flex align-items-center justify-content-center">
            <h1 className=" display-1 fw-bold">Condos For Sale</h1>
          </div>
          <Col sm="8" className=" p-5">
            <div className="d-flex flex-row">
              <select className="form-select" aria-label="Default select example"  style={{maxWidth:'200px'}} onChange={(e)=>{
                 const selectedrating = e.target.value;
                 console.log(selectedrating);
                 setRating(selectedrating);
                 console.log(rating);
               
              }}>
                <option value="0">Ratings</option>
                <option value="4.5">above 4.5</option>
                <option value="4">above 4</option>
                <option value="3.5">above 3.5</option>
              </select>
            </div>
            <Row className="p-3 m-4">
              {condoDetails.map((items, index) =>
                getCardDesign(index, items, rating)
              )}
            </Row>
          </Col>
          <Col sm="4" className="">
            <AboutCard />
          </Col>
        </Row>
      </Container>
    </>
  );

}