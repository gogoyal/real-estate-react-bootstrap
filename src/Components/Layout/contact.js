import { Image, Container, Col, Row, Form, Button } from "react-bootstrap";
export default function Contact() {
  return (
    <>
      <Container fluid className="contactHeight">
        <Row>
          <h1 className="text-center">
            <b>Contact Us</b>
          </h1>
          <Col md="6" className="d-flex align-items-center">
            <Form>
              <Row className="m-3">
                <Col className="" lg={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <h4>First Name</h4>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter First Name"
                      className="border border-2 p-3 rounded-0"
                      style={{ backgroundColor: "#f4f4f3" }}
                    />
                  </Form.Group>
                </Col>
                <Col className="" lg={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <h4>Last Name</h4>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter last Name"
                      className="border border-2 p-3 rounded-0"
                      style={{ backgroundColor: "#f4f4f3" }}
                    />
                  </Form.Group>
                </Col>
                <Col className="" lg={6}>
                  {" "}
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <h4>Email</h4>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="example@gmail.com"
                      className="border border-2 p-3 rounded-0"
                      style={{ backgroundColor: "#f4f4f3" }}
                    />
                  </Form.Group>
                </Col>
                <Col className="" lg={6}>
                  {" "}
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <h4>Phone Number</h4>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Number Here"
                      className="border border-2 p-3 rounded-0"
                      style={{ backgroundColor: "#f4f4f3" }}
                    />
                  </Form.Group>
                </Col>
                <Col className="" lg={12}>
                  <Form.Group className="mb-3 mt-3">
                    <Form.Control
                      as="textarea"
                      placeholder="Your Message"
                      className="border border-2 p-3 rounded-0"
                      style={{ backgroundColor: "#f4f4f3" }}
                    />
                  </Form.Group>
                </Col>
                <div className="d-grid gap-2">
                  <Button
                    type="submit"
                    className="rounded-0 p-2 btn btn-outline-secondary btn-dark text-white"
                  >
                    Submit
                  </Button>
                </div>
              </Row>
            </Form>
          </Col>
          <Col md="6">
            <Image
              src="https://1.bp.blogspot.com/-COpQWfWKqyc/YI1lbCIig5I/AAAAAAAACEc/q45NwMpWHFY8zvBfAJB_MqBE8zZqt7jugCLcBGAsYHQ/w1200-h630-p-k-no-nu/contact-us.gif"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
