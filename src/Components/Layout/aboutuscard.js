import { Container, Col, Row, Image } from "react-bootstrap";
export default function AboutCard() {
  return (
    <>
      <Container md="4" className="mt-5">
        <Row>
          <Col  className="border p-4 ">
          <Row>
            <Col xs="12" className="d-flex justify-content-center mt-4 mb-4"> <Image
              className="rounded-circle d-block"
              style={{ height: "200px", width: "200px" }}
              src="https://usefulnext.com/wp-content/uploads/2022/05/Modern-Small-Office-Building.jpg"
            /></Col>
            <Col xs="12" className="text-center">
            <h3>The Estate Real Estate Inc.</h3>
            <p><i>Your Island Experts for 40 Years!</i></p>
            <p className="fs-5">O: (239) 463-2999</p>
            <div className="mt-5 mb-5">
            <a href="/" className="me-4 text-reset">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
           
            <h5>Toll-Free (800) 741-2986</h5>

            </Col>
          </Row>
            
            
          </Col>
        </Row>
      </Container>
    </>
  );
}
