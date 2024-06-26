import { Container, Button, Form } from "react-bootstrap";
export default function SignIn() {
  return (
    <>
      <Container className=" forgot" style={{ maxWidth: "400px" , height:'450px'}}>
        <h1 className="text-center mb-4 "><b>Sign In</b></h1>
        <Form>
          <Form.Control
            className="mb-4 p-3 rounded-0"
            type="email"
            placeholder="Email Address"
            style={{ backgroundColor: "#ebebea" }}
          />

          <Form.Control
            className="mb-4 p-3 rounded-0"
            type="password"
            placeholder="Confirm Password"
            style={{ backgroundColor: "#ebebea" }}
          />
          <div className="text-center mt-4">
            <Button
              variant="light"
              type="submit"
              className="btn btn-lg rounded-0  btn-outline-info"
            >
              Sign In
            </Button>
            <a className="d-block link-dark mt-4" href="/forgetpassword">
            Forgot your password ?
            </a>
            <a className="d-block link-dark mt-4" href="/Signup">
            Create an account
            </a>
          </div>
        </Form>
      </Container>
    </>
  );
}
