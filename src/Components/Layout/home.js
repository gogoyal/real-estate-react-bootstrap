import { Card, Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import GIF from "./giphy.webp";
export default function Home() {
  const getImages = require("../details.json");

  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              src="https://i.pinimg.com/originals/cc/c1/c5/ccc1c5c5d52a2dbc1be00ccb81268e08.jpg"
              className="d-block w-100 caraosel"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <Image
              src="https://www.architectureartdesigns.com/wp-content/uploads/2015/07/713.jpg"
              className="d-block w-100 caraosel"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <Image
              src="https://www.mavericksinvitational.com/wp-content/uploads/2020/05/Beachfront-1024x512.jpg"
              className="d-block w-100 caraosel"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>third slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Container fluid className=" " style={{backgroundColor:'#8cccd4'}}>
        <Row className=" p-5">
          <Col sm="6" className="text-start text-white">
            <h2>Choice Real Estate Company Since 1980</h2>
            <p>
              <b>Loffreno Real Estate, Inc. Realtors </b> has been serving
              buyers and sellers for over 40 years. We serve all of SW Florida
              from our local office on Fort Myers Beach.{" "}
            </p>
            <p>
              From cozy island cottages to newer contemporary waterfront homes,
              Studio condos on the beach to exceptional penthouse units, we sell
              them all. Our family owned & operated company continues today with
              a dozen top notch Realtors. Contact us to work with one of our
              professionals...You'll be glad you did!.
            </p>
          </Col>
          <Col sm="6 text-center">
            <Image src={GIF}></Image>
          </Col>
        </Row>
      </Container>

      <Container>
        <h1 className="p-4">RECENT ADDITIONS</h1>
        <Row>
          {getImages.map((items, index) => {
            return (
              <Col key={index} sm={5} lg={4} className="mt-4">
                <Card className="shadow-lg">
                  <Card.Img
                    className="imgMaxHeight"
                    variant="top"
                    src={items.image}
                  ></Card.Img>
                  <Card.Body>
                    <Card.Title>{items.address}</Card.Title>
                    <Card.Text>
                      <h1> {items.price}</h1>
                      <p>{items.description}</p>
                    </Card.Text>
                    <Link
                      style={{ backgroundColor: "black" }}
                      className="btn btn-primary"
                      to={"/housedetails/" + items.id}
                    >
                      See Details..
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
