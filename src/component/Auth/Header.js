import React from 'react';
import {Link } from 'react-router-dom';
import Surgeon from '../Master/Surgeon';

export default function Header() {
    return (
        <header className="App-header">
        <div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          {/* <i class="fa-solid fa-circle-envelope"></i> */}
            <div class="container">
              <div class="row">
                <div class="col-lg-">

                </div>

              </div>

            </div>
            {/* <h6 id="mail">drop us an email</h6><br></br>
            <h6>call us</h6> */}
            {/* <i class="fa-solid fa-circle-envelope"></i> */}

          <Link to="/Signup"><button class="btn btn-primary me-md-2"  id="btn2" type="button">Register</button></Link>
            <Link to="/Login">  <button class="btn btn-primary" id="btn2" type="button">login</button></Link>
            <Link to="/Home"><button class="btn btn-primary" id="btn2" type="button">logout</button></Link> 
          </div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#"></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarText">
              
                  <li class="nav-item" >
                  <a class="nav-link active " aria-current="page" href="#" id="logo">Hospital</a>
                  </li>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="/Home"><a class="nav-link active" href="#">Dashboard</a></Link>  
                  </li>
                 
                  <li class="nav-item">
                    <Link to="/Patient"><a class="nav-link active" aria-current="page" href="#">Patient detail</a></Link>
                  </li>
                  <li class="nav-item">
                   <Link to="/Surgeon"><a class="nav-link active" href="#">Surgeon detail</a></Link> 
                    </li>
                 
                 
                  {/* <li class="nav-item">
                    <a class="nav-link active" href="#">Patient Entry</a>
                  </li> */}
                  {/* <li class="nav-item">
                    <a class="nav-link active" href="#"></a>
                  </li> */}
                  {/* <li class="nav-item">
                    <a href="#" class="fa fa-search"></a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="fa fa-th"></a>
                  </li> */}

                </ul>

              </div>
            </div>


          </nav>

        </div>

      </header>
    );
}
