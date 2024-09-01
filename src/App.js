
import './App.css';
import NavBar from './Components/Layout/navbar';
import Contact from './Components/Layout/contact'
import Home from './Components/Layout/home';
import Premium from './Components/Layout/premium';
import ForgetPassword from './Components/Layout/forgetpassword'
import SignUp from './Components/Layout/Signup';
import Evaluation from './Components/Layout/evaluation';
import Accessibility from './Components/Layout/accessibility';
import About from './Components/Layout/about';
import Dmca from './Components/Layout/dmca';
import Landing from './Components/Layout/landing';
import Filter from './Components/Layout/filter';
import SignIn from './Components/Layout/signin'

import Footer from './Components/Layout/footer';
import HouseDetails from './Components/Layout/housedetails';
import CondoDetails from './Components/Layout/condodetails'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    
    <>
    <NavBar />
    <BrowserRouter>
      <Routes>
     <Route path="/home" element={<Home />}></Route> 
       <Route path="/premium" element={<Premium />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/Signup" element={<SignUp />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
      <Route path="/evaluation" element={<Evaluation />}></Route>
      <Route path="/accessibility" element={<Accessibility/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/dmca" element={<Dmca/>}></Route>
      <Route path="/landing" element={<Landing/>}></Route>
      <Route path="/filter" element={<Filter/>}></Route>
      <Route path="/housedetails/:id" element={<HouseDetails/>}></Route>
      <Route path="/condodetails/:id" element={<CondoDetails/>}></Route>
      

       
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>

    
  );
}

export default App;
