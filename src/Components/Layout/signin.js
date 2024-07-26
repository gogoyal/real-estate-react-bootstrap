import { Container, Button, Form } from "react-bootstrap";
import $ from "jquery";
import "jquery-validation";
export default function SignIn() {
  $(document).ready(function(){
    $("#form").validate({
      rules:{
         email:{
          required:true,
          email:true
         },
         password:{
          required:true,
          minlength:6, 
         },
       
       
      },
      messages:{
          email:{
              required:'enter email here',
              email:'enter correct mail',
             },
             password:{
              required:'enter password here',
              minlength:'atleast 6 characters should be there', 
             },
           
           
           
      },
      errorPlacement:function(error, element){
      console.log(error);
      const $inputName = element.attr("name");
      $('#'+$inputName+'_error').append(error);
      },
      submitHandler:function(form){
          alert('submitted succesfully');
      }
    })
  })
  return (
    <>
      <Container className=" forgot" style={{ maxWidth: "400px" , height:'450px'}}>
        <h1 className="text-center mb-4 "><b>Sign In</b></h1>
        <Form id="form">
          <Form.Control
            className="mb-4 p-3 rounded-0"
            type="email"
            placeholder="Email Address"
            style={{ backgroundColor: "#ebebea" }}
            id="email"
            name="email"
          />
          <span id="email_error" class="text-danger"></span>

          <Form.Control
            className="mb-4 p-3 rounded-0"
            type="password"
            placeholder="Confirm Password"
            style={{ backgroundColor: "#ebebea" }}
            id="password"
            name="password"
          />
          <span id="password_error" class="text-danger"></span>
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
