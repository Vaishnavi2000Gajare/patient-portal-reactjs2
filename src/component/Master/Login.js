import React from 'react';
import '../Main.css';
import './Login.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from '../Auth/Header';
import Footer from '../Auth/Footer';
import Form from 'react-bootstrap/Form'
import { Link, useNavigate } from 'react-router-dom';

import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';

export function Login() {
 


    const [user, setUser] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [usererr,setUsererr]=useState(false);
    const [passworderr,setPassworderr]=useState(false);

    function handleSubmit(e) {
      if(user.length==="" || password.length===""){
        alert("please fill on the fields")
      }else{
        alert("welcome")
      }

      e.preventDefault()
    }




    function userHandler(e){
      var email=e.target.value;
      const re =
      /^\w+([\.-]?\w+)*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.){1,2}[a-zA-Z]{2,3}))$/
      if(email.match(re)==null){
        setUsererr(true) 
      }else{
        setUsererr(false);
      }

  }
   
    function passwordHandler(e) {
      let item1 = e.target.value;
      var regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
      if (item1.match(regex) == null) {
          setPassworderr(true);
          return true;
      } else {
          setPassworderr(false);
          return false;
      }
      setPassword(item1 )

  }


      const navigate = useNavigate();
      function loginBtn(e){
      
          navigate('/home')
        }



      return (
        <div class="App">
          {/* <Header /> */}
          <section>
            <div class="container-fluid">
              <div class="row">
                {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
                  <div className="ui message success">Signed in successfully</div>
                ) : (
                  <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
                )} */}

                <form id="form6" onSubmit={handleSubmit}>

                  <h1 id="log" style={{ color: 'red' }}>Login</h1>

                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email address" onChange={userHandler} />{usererr ? <span style={{color:'red'}}>please enter valid email</span>:""}
                  </Form.Group>
                  {/* <p>{formErrors.email}</p> */}
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" onChange={passwordHandler} />{passworderr ? <ul style={{color:'red'}}>
                      <li>Must be at least 8 characters long</li>
                      <li> Must be atleast one uppercase letter</li>
                      <li>Must be atleast one lowercase letter</li>
                      <li>Must be at least one digit</li>
                      <li>Must be at least one special case Character</li>
                    </ul> : " "}

                  </Form.Group>



                  <div class="d-grid gap-2">
                    <button class="btn btn-primary" id="login-btn" type="button" onClick={loginBtn}>Login</button>
                  </div>
                  <div>
                    <p id="forg"><Link to="/password">forgot password</Link></p>
                  </div>
                  <div>
                    <h5 id="link1">New customer?<Link to='/Signup'><a href="#">Register</a></Link></h5>
                  </div>
                </form>
              </div>

            </div>

            {/* </div> */}

          </section>
          {/* <Footer /> */}
        </div>
      );
    }
  

