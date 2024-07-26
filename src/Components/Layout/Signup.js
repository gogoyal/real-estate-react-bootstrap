import { Container, Button, Form } from "react-bootstrap";
import $ from "jquery";
import "jquery-validation";
export default function SignUp() {
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
         firstname:{
          required:true,
         },
      
         lastname:{
          required:true,
         },
         confirmpassword:{
          required:true,
          equalTo: '#password'
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
              
             firstname:{
              required:'enter name here',
             },
             lastname:{
              required:'enter name here',
             },
             confirmpassword:{
              required:'re-enter password here',
              equalTo:'the password is not same'
              
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
      <Container className=" mt-3 " style={{ maxWidth: "400px" }}>
        <h1 className="text-center mb-4 "> <b>Sign Up</b></h1>
        <Form id="form">
          <Form.Control
            className="mb-4 p-3 rounded-0"
            type="text"
            placeholder="First Name"
            style={{ backgroundColor: "#ebebea" }}
             id="firstname"
            name="firstname"
          />
          <span id="firstname_error" class="text-danger"></span>


          <Form.Control
            className="mb-4 p-3 rounded-0"
            type="Last Name"
            placeholder="Last Name"
            style={{ backgroundColor: "#ebebea" }}
              id="lastname"
            name="lastname"
          />
              <span id="lastname_error" class="text-danger"></span>

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
            type="PassWord"
            placeholder="Create Password"
            style={{ backgroundColor: "#ebebea" }}
             id="password"
            name="password"
          />
            <span id="password_error" class="text-danger"></span>
          <div className="m-2">
            <p>Your password needs:</p>
            <ul
              className="list-group opacity-75"
              style={{ listStyleType: "none" }}
            >
              <li className=""><i className="fa-solid fa-xmark" style={{color: '#e70d0d'}}></i> At least one uppercase letter</li>
              <li className=""><i className="fa-solid fa-xmark" style={{color: '#e70d0d'}}></i> At least one special symbol or number</li>
              <li className=""><i className="fa-solid fa-xmark" style={{color: '#e70d0d'}}></i> At least 8 characters</li>
            </ul>
          </div>

          <Form.Control
            className="mb-4 p-3 rounded-0"
            type="password"
            placeholder="Confirm Password"
            style={{ backgroundColor: "#ebebea" }}
             id="confirmpassword"
            name="confirmpassword"
          />
          <span id="confirmpassword_error" class="text-danger"></span>
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
