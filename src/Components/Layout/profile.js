import { Row, Col, Container, Image, Form } from "react-bootstrap";
export default function Profile() {
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
            <h3 className="text-center " style={{ color: "#190e72" }}>
              Profile Picture
            </h3>
          </Col>
          <Col className="ms-3">
            <Row className="m-3">
              <Col className="" sm={6}>
                    <h3 style={{ color: "#190e72" , opacity:'0.8' }}>First Name:</h3>
                    <h4 className="dispaly-3">Bhargavi</h4>
              </Col>
              <Col className="" sm={6}>
              <h3 style={{ color: "#190e72" , opacity:'0.8' }}>Last Name:</h3>
              <h4 className="dispaly-3">Goyal</h4>
              </Col>
              <Col className="" sm={8}>
                {" "}
                <h3 style={{ color: "#190e72" , opacity:'0.8' }}>Email:</h3>
              <h4 className="dispaly-3">bhargavigoyal@gmail.com</h4>
              </Col>
              <Col className="" sm={8}>
                {" "}
                <h3 style={{ color: "#190e72" , opacity:'0.8' }}>Phone Number:</h3>
              <h4 className="dispaly-3">9517851432</h4>
              </Col>
              <Col className="" sm={8}>
              <h3 style={{ color: "#190e72" , opacity:'0.8' }}>Profession:</h3>
              <h4 className="dispaly-3">Undergraduate</h4>
                </Col>
              <Col className="" sm={8}>
                
              <h3 style={{ color: "#190e72" , opacity:'0.8' }}>Bio:</h3>
              <h4 className="dispaly-3">IT Major</h4>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
