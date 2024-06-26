import { Image, Container, Row, Col, Form, Button } from "react-bootstrap";
import AboutCard from "./aboutuscard";
import logo from "./logo.png";
import Growth from "./Growth.jpg";
export default function About() {
  return (
    <>
      <Container className="p-3">
        <Row>
          <Col lg="8" className="">
            <h1 className="p-3">
              <b>About</b>
            </h1>
            <Image
              style={{ height: "300px", width: "300px" }}
              className=""
              src={logo}
            />
            <h3>
              <i>Over 40 Years of Leading Real Estate Service!</i>
            </h3>
            <p className="fs-5 opacity-75">
              Since 1980, the founding family of Loffreno Real Estate, Inc. have
              committed themselves to be the choice brokerage on Fort Myers
              Beach.
            </p>
            <Image src={Growth} style={{ height: "300px", width: "500px" }} />
            <p className="fs-5 opacity-75 mt-3">
              Our qualified and advanced team of Realtors® meet the demands of
              the competitive real estate business in Southwest Florida and
              exceed the nation's average in sales volume. F{" "}
            </p>
            <Image
              src="https://inception-app-prod.s3.amazonaws.com/ODZhYWY5ZGItNWFkNi00NzkzLTliMDktODZmZjBiMGM2YzIy/content/2021/05/images.png"
              style={{ height: "200px", width: "350px" }}
            />
            <p className="fs-5 opacity-75 mt-3">
              Loffreno Real Estate, Inc. Realtors® are members of The Realtor®
              Association of Greater Fort Myers and The Beach and surrounding
              area's Multiple Listing Service, giving us access to all other
              Realtor® properties for sale. We are also members of National
              Association of Realtors®, Florida Association of Realtors®, and
              individual members of GRI (Graduate of REALTOR® Institute) and
              CRS® (Certified Residential Specialists).
            </p>
            <Image
              src="https://inception-app-prod.s3.amazonaws.com/ODZhYWY5ZGItNWFkNi00NzkzLTliMDktODZmZjBiMGM2YzIy/content/2021/05/download%281%29.jpeg"
              style={{ height: "200px", width: "150px" }}
            />
            <Image
              src="https://inception-app-prod.s3.amazonaws.com/ODZhYWY5ZGItNWFkNi00NzkzLTliMDktODZmZjBiMGM2YzIy/content/2021/05/images2%282%29.png"
              style={{ height: "200px", width: "300px" }}
            />
            <p className="fs-5 opacity-75 mt-5">
              Loffreno Real Estate, Inc. offers full-color sales materials, a
              dynamic Web presence, individual color postcards and brochures to
              our clients and customers, and an international network of quality
              Brokers, plus a host of numerous other offered exclusive marketing
              services.
            </p>
            <p className="fs-5 opacity-75 mt-5">
              Loffreno Real Estate, Inc. is a technologically advanced
              computerized real estate sales company utilizing computer
              workstations complete with MLS/Internet, E-mail, and virtual tours
              on the Internet. In the summer of 1995, we developed the first
              operational Real Estate Company Internet Site on the Island! We
              are consistently on the leading edge of new technology and
              innovative marketing activities and are often imitated by our
              competitors. Our website goes under Loffreno.com and
              FortMyersBeachRealEstate.com, and is ranked as one of the most
              trafficked real estate websites in all the area! Additionally our
              online presence of our listings are on Nationally famous websites
              such as Realtor.com, Zillow, and several of the most high-profile
              luxury websites, and real estate publications.
              <Image
                style={{ height: "100px", width: "150px" }}
                src="https://inception-app-prod.s3.amazonaws.com/ODZhYWY5ZGItNWFkNi00NzkzLTliMDktODZmZjBiMGM2YzIy/content/2021/05/Screenshot2021-05-27at10.49.04PM.png"
              />
            </p>
            <h4>
              <i>
                It is with great pride and confidence that we welcome your
                business!
              </i>
            </h4>
            <Row>
              <Col xxl="7" className="d-flex align-items-center">
                <Image
                  style={{ height: "50px", width: "500px" }}
                  src="https://uploads.pl-internal.com/ODZhYWY5ZGItNWFkNi00NzkzLTliMDktODZmZjBiMGM2YzIy/content/2018/12/flagsanimations.jpg"
                />
              </Col>
              <Col xxl="5" className="fs-5 opacity-75 mt-3">
                Loffreno Real Estate, Inc., Realtors® has had the opportunity to
                work with buyers, sellers, and vacation renters from all parts
                of the world.
              </Col>
            </Row>
          </Col>
          <Col lg="4" className="">
            <h3 className="p-3 text-center">
              <b>Have a Question ?</b>
            </h3>
            <Form>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label className="fs-5">First Name :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  className="rounded-0 p-2 "
                  style={{ backgroundColor: "#ebebea" }}
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label className="fs-5">Last Name :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  className="rounded-0 p-2"
                  style={{ backgroundColor: "#ebebea" }}
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label className="fs-5">Phone Number :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Phone"
                  className="rounded-0 p-2"
                  style={{ backgroundColor: "#ebebea" }}
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email address"
                  className="rounded-0 p-2"
                  style={{ backgroundColor: "#ebebea" }}
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label className="fs-5">Location/Address :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  className="rounded-0 p-2"
                  style={{ backgroundColor: "#ebebea" }}
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control
                  as="textarea"
                  placeholder="Message"
                  className="rounded-0 p-2"
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
             <AboutCard/>
          </Col>
        </Row>
      </Container>
    </>
  );
}
