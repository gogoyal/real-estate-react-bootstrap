import {Container, Row , Col , Image , Button} from "react-bootstrap";
import { useParams } from "react-router-dom";
export default function CondoDetails(props){
    const detail = require("./condos.json");
    const id = useParams("id") || null;
  
    const Detail = (condos) => {
      switch (condos) {
        case "1":
          return detail[0];
        case "2":
          return detail[1];
        case "3":
          return detail[2];
        case "4":
          return detail[3];
        case "5":
          return detail[4];
        case "6":
          return detail[5];
        case "7":
          return detail[6];
        case "8":
          return detail[7];
        case "9":
          return detail[8];
          case "10":
          return detail[9];
          case "11":
            return detail[10];
            case "12":
                return detail[11];
                case "13":
                    return detail[12];
                    case "14":
                        return detail[13];
        default:
          return null;
      }
    };
  
    return(
        <>
         <Container className="">
        <Row className="m-2">
          <Col sm={12}>
            <h1 className="m-2">{Detail(id.id).title}</h1>
          </Col>
          <Col md={7}>
            <Image src={Detail(id.id).image} fluid />
            <Row>
              <h3>{Detail(id.id).body}</h3>
            </Row>
            <Row className="m-1">
              <Button className="btn-lg btn-dark rounded-1 mt-2">
                Contact Seller..
              </Button>
            </Row>
           
          </Col>

          <Col md={5} className="">
            
            <Row className="border border-2 p-3 mb-2">
              <Col sm={12} className="d-flex flex-row justify-content-evenly">
                <h4 style={{ color: "#f38758" }}>Rating given by our experts:</h4>
                <h3>{Detail(id.id).rating}</h3>
              </Col>
              
            </Row>
            <Row className="border border-2 p-3 mb-2">
              <Col sm={12} className="">
                <h4 style={{ color: "#f38758" }}>Description :</h4>
              </Col>
              <Col lg={12}>{Detail(id.id).description}</Col>
            </Row>
            <Row className="border border-2 p-3 mb-2">
              <Col sm={12} className="border-bottom">
                <h4 style={{ color: "#f38758" }}>Property Hightlights</h4>
              </Col>
              {Detail(id.id).highlights.map((items, index) => {
                return (
                  <Col lg={6} key={index}>
                    <i
                      className="fa-solid fa-circle-check"
                      style={{ color: "#f38758" }}
                    ></i>
                    {items}
                  </Col>
                );
              })}
            </Row>
             
            <Row className="border border-2 p-3 mb-2">
              <Col sm={12}>
                <h4 style={{ color: "#f38758" }}>Amenities</h4>
              </Col>
              {Detail(id.id).amenities.map((items, index) => {
                return (
                  <Col xxl={4} className="mb-1" key={index}>
                    <i className={"fa-solid " + items.icon}></i> {items.name}
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="bg-info gradient p-3">
        <Row>
          <Col
            md={7}
            className="text-white d-flex justify-content-center align-items-center"
          >
            Get Best Results With Our PREMIUM Services
          </Col>
          <Col>
            <a
              className="btn btn-lg d-flex justify-content-center"
              href="/premium"
              style={{ color: "#f38758" }}
            >
              Go Pro Now
            </a>
          </Col>
        </Row>
      </Container>
        </>
    )
} 