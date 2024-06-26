import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
export default function Premium() {
  return (
    <>
      <Container>
        <Row className="m-4">
          <Col
            lg={4}
            className="border border-4 rounded "
            style={{ backgroundColor: "#6bc9dd" }}
          >
            <h1 className="display-4 text-white text-center">Basic</h1>
            <Container className="bg-light mb-2 rounded MaxHeight">
              <h1 className=" text-center">Free</h1>
              <ListGroup>
                <ListGroup.Item className="border border-0">
                  <i className="fa-solid fa-check" style={{ color: "#1eb821" }}></i>
                  Basic Features
                </ListGroup.Item>
              </ListGroup>
              <Row className="">
                <Col sm={12} className="text-center m-2 ">
                  <Button className=" btn-lg"  style={{ backgroundColor: "#6bc9dd" }}  >Try Now</Button>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col
            lg={4}
            className="border border-4 rounded"
            style={{ backgroundColor: "#4c58cf" }}
          >
            <h1 className="display-4 text-white text-center">Standard</h1>
            <Container className="bg-light mb-2 rounded MaxHeight">
              <h1 className=" text-center">
              <i className="fa-sharp fa-thin fa-dollar-sign"></i>20
              </h1>
              <ListGroup>
                <ListGroup.Item className="border border-0">
                  <i className="fa-solid fa-check" style={{ color: "#1eb821" }}></i>
                  checks for new properties and price changes in real time.{" "}
                </ListGroup.Item>
                <ListGroup.Item className="border border-0">
                  <i className="fa-solid fa-check" style={{ color: "#1eb821" }}></i>
                  Email Support
                </ListGroup.Item>
                <ListGroup.Item className="border border-0">
                  <i className="fa-solid fa-check" style={{ color: "#1eb821" }}></i>
                  Cancel the service any time
                </ListGroup.Item>
                <ListGroup.Item className="border border-0">
                  <i className="fa-solid fa-check" style={{ color: "#1eb821" }}></i>
                  Email notification when a new property comes to the market
                </ListGroup.Item>
              </ListGroup>
              <Row className="d-flex justify-content-center">
                <Col sm={12} className="text-center m-2 ">
                  <Button style={{ backgroundColor: "#4c58cf"}} className="btn-lg">Try Now</Button>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col
            lg={4}
            className="border border-4 rounded"
            style={{ backgroundColor: "#13a045" }}
          >
            <h1 className="display-4 text-white text-center">Premium</h1>
            <Container className="bg-light mb-2 rounded">
              <h1 className=" text-center">
              <i className="fa-sharp fa-thin fa-dollar-sign"></i>30
              </h1>
              <ListGroup>
                <ListGroup.Item className="border border-0">
                  <i className="fa-solid fa-check" style={{ color: "#1eb821" }}></i>
                  checks for new properties and price changes in real time.{" "}
                </ListGroup.Item>
                <ListGroup.Item className="border border-0">
                  <i className="fa-solid fa-check" style={{ color: "#1eb821" }}></i>
                  Email Support
                </ListGroup.Item>
                <ListGroup.Item className="border border-0">
                  <i className="fa-solid fa-check" style={{ color: "#1eb821" }}></i>
                  Cancel the service any time
                </ListGroup.Item>
                <ListGroup.Item className="border border-0">
                  <i className="fa-solid fa-check" style={{ color: "#1eb821" }}></i>
                  Email notification when a new property comes to the market
                </ListGroup.Item>
                <ListGroup.Item className="border border-0">
                  <i className="fa-solid fa-check" style={{ color: "#1eb821" }}></i>
                  New listings that best match your needs up to 24 hours before
                  they show on REALTOR.ca
                </ListGroup.Item>
              </ListGroup>
              <Row className="d-flex justify-content-center">
                <Col sm={12} className="text-center m-2 ">
                  <Button style={{ backgroundColor: "#13a045" }} className="btn-lg">Try Now</Button>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
