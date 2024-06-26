import { Container, Image, Row, Col, Form ,Button} from "react-bootstrap";
export default function Evaluation() {
  return (
    <>
      <Container fluid className=" mt-5">
        <Row>
          <Col md="6" className=" imageprice"></Col>
          <Col md="6" className="p-5">
            <h2>
              <b>Your Fort Myers Beach Property Evaluation</b>
            </h2>
            <Image
              fluid
              style={{ height: "250px" }}
              src="https://www.precisionrealestate.com.au/wp-content/uploads/2020/11/Picture-1.jpg"
            />
            <p style={{ maxWidth: "700px" }} className="mt-5 mb-5 opacity-75">
              Please complete the form and one of our professionals at TheEstate
              Real Estate Inc. Realtors are happy to assist you. We are able to
              look into the most recent closed and sold properties to give you
              insight as to the value of your property in today's market. We
              welcome the opportunity to assist you!
            </p>
            <Form>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label className="fs-5">First Name :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  className="rounded-0 p-3 border"
                  style={{ backgroundColor: "#ebebea" }}
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label className="fs-5">Last Name :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  className="rounded-0 p-3"
                  style={{ backgroundColor: "#ebebea" }}
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label className="fs-5">Phone Number :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  className="rounded-0 p-3"
                  style={{ backgroundColor: "#ebebea" }}
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label className="fs-5">Email address :</Form.Label>
                <Form.Control
                  type="email"
                  placeholder=""
                  className="rounded-0 p-3"
                  style={{ backgroundColor: "#ebebea" }}
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label className="fs-5">Location/Address :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  className="rounded-0 p-3"
                  style={{ backgroundColor: "#ebebea" }}
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label className="fs-5">Comments :</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder=""
                  className="rounded-0 p-3"
                  style={{ backgroundColor: "#ebebea" }}
                />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button
                  type="submit"
                  className="rounded-0 p-3 btn btn-outline-secondary btn-dark text-white"
                >
                  SEND
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
