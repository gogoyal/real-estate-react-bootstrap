import {Container, Button, Form} from "react-bootstrap";
export default function ForgetPassword(){
    return(
        <>
       <Container className=" forgot" style={{ maxWidth: "400px" , height:'400px', }}>
        <h1 className="text-center mb-4 "><b>Forgot Password</b></h1>
        <Form>
          <Form.Control
            className="mb-4 p-3 rounded-0"
            type="email"
            placeholder="Email Address"
            style={{ backgroundColor: "#ebebea" }}
          />

         
          <div className="text-center mt-4">
            <Button
              variant="light"
              type="submit"
              className="btn btn-lg rounded-0  btn-outline-info"
            >
              Reset Password
            </Button>
           
            <a className="d-block link-dark mt-4" href="/Signin">
            Back To LogIn
            </a>
          </div>
        </Form>
      </Container>
        </>
    )
}