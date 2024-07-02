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
import Condo1 from "./condo1.jpg";

export default function Filter() {
  return (
    <>
      <Container fluid className="border">
        <Row>
          <div className="text-center condo d-flex align-items-center justify-content-center">
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
              <Col lg="6">
                <Card className="rounded-0 m-1 border-0">
                  <CardImg variant="top" src={Condo1} className="p-2"></CardImg>
                  <CardTitle>hi</CardTitle>
                  <CardBody>hi</CardBody>
                </Card>
              </Col>
              <Col lg="6">
                {" "}
                <Card className="rounded-0 m-1 border-0">
                  <CardImg variant="top" src={Condo1} className="p-2"></CardImg>
                  <CardTitle className="text-center">
                    6240 Estero Boulevard UNIT 4 PH, Fort Myers Beach, FL, 33931
                  </CardTitle>
                  <CardBody>$5,200,000 / 4 BEDS / 5 BATHS</CardBody>
                </Card>
              </Col>
              <Col lg="6">hi</Col>
              <Col lg="6">hi</Col>
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
