import React from 'react';
import '../Signup.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import Header from '../Auth/Header';
import Footer from '../Auth/Footer';

export function Signup() {
    const [fname, setFname] = useState(" ");
    const [lname, setLname] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [mobile, setMobile] = useState(" ")
    const [password, setPassword] = useState(" ");
    const [cpassword, setCpassword] = useState(" ");
    const [fnameerr, setFnameerr] = useState(false);
    const [lnameerr, setLnameerr] = useState(false);
    const [emailerr, setEmailerr] = useState(false);
    const [mobileerr, setMobileerr] = useState(false);
    const [passworderr, setPassworderr] = useState(false);
    const [cpassworderr, setCpassworderr] = useState(false);

    function FirstName(e) {
        let item = e.target.value;
        var capital=/\b[A-Z]/;
        var checkName= /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g;
        if (item.length < 5 || isNaN(item) == false || item.search(" ")!=-1 || item.length>12 || !item.match(capital) || item.match(checkName)) {
            setFnameerr(true);
            console.log(item)

        } else {
            setFnameerr(false);
        }


    }

    function LastName(e) {
        let item = e.target.value;
        var capital=/\b[A-Z]/;
        var checkName= /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g;
        if (item.length < 5 || isNaN(item) == false || item.search(" ")!=-1 || item.length>12  || !item.match(capital) || item.match(checkName)) {
            setLnameerr(true);
            console.log(item)

        } else {
            setLnameerr(false); 
            console.log(item)
        }


    }

    function EmailHandler(e) {
      var email=e.target.value;
        const re =
        /^\w+([\.-]?\w+)*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.){1,2}[a-zA-Z]{2,3}))$/
        if(email.match(re)==null){
            setEmailerr(true) 
        }else{
            setEmailerr(false);
        }

    }

    function MobileHandler(e) {
        let mobile = e.target.value;
        var phonexpress=/^[7-9][0-9]{9}/;
        if (mobile.length == 10 && mobile.match(phonexpress) ) {
            setMobileerr(false);
        } else {
            setMobileerr(true);
        }

    }


    function passwordHandler(e) {
        let item1 = e.target.value;
        var regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
        if (item1.match(regex) == null) {
            setPassworderr(true);
        } else {
            setPassworderr(false);
        }
        setPassword(item1)

    }




    function confirmPass(e) {
        let cpass=e.target.value;
        console.log(cpass)
        let item1=e.target.value;
        console.log(item1);
        if(cpass.confirmPass && cpass!== cpass.confirmPass){
            setCpassworderr(true)
        }else{
            setCpassworderr(false)
        }
        setCpassword(cpass);


    }


    // function passwordHandler(e) {
    //     let item = e.target.value;
    //     if (item.length < 3) {
    //         setPassworderr(true)
    //         console.log(item)
    //     }
    //     else {
    //         setPassworderr(false)
    //     }
    //     setPassword(item)

    // }


    return (
        <div className='signup'>
            {/* <Header /> */}
            <section>
                {/* <form id="form3"> */}
                <form >
                    <div class="container">
                        <form class="row g-3">
                            <h1>Signup</h1>
                            <div class="col-md-6">
                                <label for="inputEmail4" class="form-label" id="name">First Name</label>
                                <input type="text" class="form-control" id="inputEmail4" onChange={FirstName} />{fnameerr ? <ul style={{ color: 'red' }}>
                                    <li>Length should be greater than 5</li>
                                    <li>Number is not allowed</li>
                                    <li>Space is not allowed</li>
                                    <li>length should be less than 12</li>
                                    <li>first letter Must be Capital</li>
                                    </ul> : ""}
                            </div>
                            <div class="col-md-6">
                                <label for="inputPassword4" class="form-label" id="name">Last Name</label>
                                <input type="text" class="form-control" id="Lastname" onChange={LastName} />{lnameerr ? <ul style={{ color: 'red' }}>
                                <li>Length should be greater than 5</li>
                                    <li>Number is not allowed</li>
                                    <li>Space is not allowed</li>
                                    <li>length should be less than 12</li>
                                    <li>first letter Must be Capital</li>
                                </ul> : ""}
                            </div>
                            <div class="col-12">
                                <label for="inputAddress" class="form-label"    >Email Id</label>
                                <input type="email" class="form-control" id="inputAddress3" onChange={EmailHandler} />{emailerr ? <span style={{color:'red'}}> please Enter valid email</span> : " "}
                            </div>
                            <div class="col-6">
                                <label for="inputAddress2" class="form-label">Country</label>
                                <select id="inputAddress2" class="form-select">
                                    <option selected>Choose...</option>
                                    <option>India</option>
                                    <option>America</option>
                                    <option>China</option>
                                    <option>America</option>
                                    <option>India</option>
                                    <option>India</option>
                                    <option>India</option>
                                </select>
                            </div>
                            <div class="col-6">

                                <label for="inputCity" class="form-label">Mobile Number</label>
                                {/* <div class="col-md-3">
                                <select id="inputAddress2" class="form-select">
                                    <option selected>Choose...</option>
                                    <option>+91</option>
                                    <option>+92</option>
                                    <option>+2</option>
                                    <option>+89</option>
                                    <option>+93</option>
                                    <option>+94</option> 
                                    <option>+96</option>
                                </select>
                                </div> */}
                                <input type="number" class="form-control" id="inputCity" onChange={MobileHandler} />{mobileerr ? <span style={{ color: 'red' }}>please Enter only 10 digit Number</span> : ""}
                            </div>
                            <div class="col-md-6">
                                <label for="inputState" class="form-label">Password</label>
                                <input type="password" class="form-control" id="inputZip" onChange={passwordHandler} />{passworderr ? <ul style={{ color: 'red' }}>
                                    <li>Must be at least 8 characters long</li>
                                    <li> Must be atleast one uppercase letter</li>
                                    <li>Must be atleast one lowercase letter</li>
                                    <li>Must be at least one digit</li>
                                    <li>Must be at least one special case Character</li>
                                </ul> : " "}

                            </div>
                            <div class="col-md-6">
                                <label for="inputZip" class="form-label">Confirm password</label>
                                <input type="password" class="form-control" id="inputZip" onChange={confirmPass} />{cpassworderr ? <span>Password are not matching</span> :" "}
                            </div>

                            <div class="col-lg-12">
                                <button type="submit" class="btn btn-primary">Sign in</button>
                            </div>

                            <div>
                                <h5 id="link1">Already have an account ?<Link to='/Login'><a href="#">login</a></Link></h5>
                            </div>
                        </form>
                    </div>
                </form>
                {/* </form> */}
            </section>
            {/* <Footer/> */}

        </div>
    );
}




