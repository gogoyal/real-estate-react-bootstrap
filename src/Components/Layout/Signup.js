import { Container, Button, Form } from "react-bootstrap";
export default function SignUp() {
  return (
    <>
      <Container className=" mt-3 " style={{ maxWidth: "400px" }}>
        <h1 className="text-center mb-4 "> <b>Sign Up</b></h1>
        <Form>
          <Form.Control
            className="mb-4 p-3 rounded-0"
            type="text"
            placeholder="First Name"
            style={{ backgroundColor: "#ebebea" }}
          />

          <Form.Control
            className="mb-4 p-3 rounded-0"
            type="Last Name"
            placeholder="Last Name"
            style={{ backgroundColor: "#ebebea" }}
          />

          <Form.Control
            className="mb-4 p-3 rounded-0"
            type="email"
            placeholder="Email Address"
            style={{ backgroundColor: "#ebebea" }}
          />

          <Form.Control
            className="mb-4 p-3 rounded-0"
            type="PassWord"
            placeholder="Create Password"
            style={{ backgroundColor: "#ebebea" }}
          />
          <div className="m-2">
            <p>Your password needs:</p>
            <ul
              className="list-group opacity-75"
              style={{ listStyleType: "none" }}
            >
              <li className=""><i className="fa-solid fa-xmark" style={{color: '#e70d0d'}}></i> At least one uppercase letter</li>
              <li className=""><i className="fa-solid fa-xmark" style={{color: '#e70d0d'}}></i> At least one special symbol or numbe</li>
              <li className=""><i className="fa-solid fa-xmark" style={{color: '#e70d0d'}}></i> At least 8 characters</li>
            </ul>
          </div>

          <Form.Control
            className="mb-4 p-3 rounded-0"
            type="password"
            placeholder="Confirm Password"
            style={{ backgroundColor: "#ebebea" }}
          />
          <div className="text-center">
            <Button
              variant="light"
              type="submit"
              className="btn btn-lg rounded-0  btn-outline-info"
            >
              Sign Up
            </Button>
            <a className="d-block link-dark mt-2" href="/signin">
              Already a User ? Sign In
            </a>
          </div>
        </Form>
      </Container>
    </>
  );
}
