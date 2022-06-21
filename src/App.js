import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./component/Master/Login";
import React from "react";

import { Password } from "./component/Master/Password";
import { Signup } from "./component/Master/Signup";
import { Home } from "./component/Master/Home";
// import { Patientdetail } from "./component/Master/Patientdetail";
import { Validation } from "./component/Master/Validation";
import { Surgeon } from "./component/Master/Surgeon";
import { Patient } from "./component/Master/Patient";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/password" element={<Password />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/patientdetail" element={<Patientdetail />} /> */}
        <Route path="/validation" element={<Validation />} />
        <Route path="/surgeon" element={<Surgeon />} />
        <Route path="/patient" element={<Patient />} />
      </Routes>
    </div>
  );
}

export default App;
