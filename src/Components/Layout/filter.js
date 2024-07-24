import {
  Container,
  Row,
  Col,
  Dropdown,
  Card,
  CardTitle,
  CardBody,
  CardImg,
} from "react-bootstrap";
import AboutCard from "./aboutuscard";
import { Link } from "react-router-dom";
// import Condo1 from "./condo1.jpg";
// import Condo2 from "./condo2.jpg";

export default function Filter() {
  const condoDetails = require("../Layout/condos.json");

  return (
    <>
      <Container fluid className="">
        <Row>
          <div className="text-center text-white condo d-flex align-items-center justify-content-center">
            <h1 className=" display-1 fw-bold">Condos For Sale</h1>
          </div>
          <Col sm="8" className=" p-5">
            <div className="d-flex flex-row">
              <Dropdown>
                <Dropdown.Toggle
                  variant="none"
                  className="rounded-0 border-bottom border-0"
                >
                  Select Filter
                </Dropdown.Toggle>

                <Dropdown.Menu className="border-0">
                  <Dropdown.Item href="#/action-1">Price</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Baths</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Year Built</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Beds</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Sqft</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>{" "}
              <Dropdown>
                <Dropdown.Toggle
                  variant="none"
                  className="rounded-0 border-bottom border-0"
                >
                  Ascending
                </Dropdown.Toggle>

                <Dropdown.Menu className="border-0">
                  <Dropdown.Item href="#/action-1">Ascending</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Decsending</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>{" "}
            </div>
            <Row className="p-3 m-4">
              {condoDetails.map((items, index) => {
                return (
                  <Col key={index} lg="6">
                    <Card className="rounded-0 m-1 border-0 p-2">
                      <CardImg
                        variant="top"
                        src={items.image}
                        className=" cardimg"
                      ></CardImg>
                      <CardTitle>{items.title}</CardTitle>
                      <CardBody>{items.body}</CardBody>
                      <Link  to={"/condodetails/" + items.id} className="btn btn-dark rounded-0">Details</Link>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col sm="4" className=" ">
            <AboutCard />
          </Col>
        </Row>
      </Container>
    </>
  );
}
