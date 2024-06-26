import { Row, Col, Container, Image, Form, Button } from "react-bootstrap";
export default function EditProfile() {
  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col className="" md="4">
            <Image
              src="https://www.pngmart.com/files/21/Admin-Profile-PNG-Clipart.png"
              className=""
              fluid
            />
            <div className="d-flex justify-content-center">
            <Button style={{backgroundColor:'black'}} className="m-2">Edit Picture</Button>
            <Button className="m-2" style={{backgroundColor:'black'}} >Remove Picture</Button>
            </div>
          </Col>
          <Col className="">
           <Form>
           <Row className="m-3">
              <Col className="" lg={6}>
                <Form.Group className="mb-3 ">
                  <Form.Label>
                    <h3>First Name</h3>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Bhargavi"
                    className="border border-2 "
                  />
                </Form.Group>
              </Col>
              <Col className="" lg={6}>
                <Form.Group className="mb-3 ">
                  <Form.Label>
                    <h3>Last Name</h3>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Goyal"
                    className="border border-2 "
                  />
                </Form.Group>
              </Col>
              <Col className="" lg={6}>
                {" "}
                <Form.Group className="mb-3 ">
                  <Form.Label><h3>Email</h3></Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="bhargavigoyal@gmail.com"
                    className="border border-2 "
                  />
                </Form.Group>
              </Col>
              <Col className="" lg={6}>
                {" "}
                <Form.Group className="mb-3 ">
                  <Form.Label><h3>Phone Number</h3></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="9517851432"
                    className="border border-2 "
                  />
                </Form.Group>
              </Col>
              <Col className="" lg={6}>
              <Form.Group className="mb-3 ">
                  <Form.Label><h3>Profession</h3></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Undergraduate"
                    className="border border-2 "
                  />
                </Form.Group></Col>
              <Col className="" lg={7}>
                
                <Form.Group className="mb-3 ">
                  <Form.Label><h3>Bio</h3></Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Maximum of 300 characters"
                    className="border border-2 "
                  />
                </Form.Group>
                <div className="d-grid gap-2"><Button type="submit" style={{backgroundColor:'black'}}>Submit Changes</Button></div>
              </Col>
            </Row>
           </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
