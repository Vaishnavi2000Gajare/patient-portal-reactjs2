import '../../';

import Header from '../Auth/Header';
import Footer from '../Auth/Footer';
// import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
export function Password(){
    return(
        <div className='Password'>
            {/* <Header/> */}
        <section>
            <form id="form1">
                <h4 id="h4"><Link to="/Login">Go Back</Link></h4>
            <h1 id="log1">Forgot Password</h1>
            <h6 id="log2">Lorem Ipsum is Simply dummy text of the printing</h6>
            <h6 id="log3">and tysetting industry</h6>
            <div class="dropdown col-lg-12" >
              <label for="example" class="form-label1">Mobile Number</label><br></br>
                  <button class="btn dropdown-toggle" type="button" id="34" data-bs-toggle="dropdown" aria-expanded="false">
                  +91
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">90</a></li>
                    <li><a class="dropdown-item" href="#">98</a></li>
                    <li><a class="dropdown-item" href="#">91</a></li>
                    <li><a class="dropdown-item" href="#">15</a></li>
                   
                  </ul>
                  <input type="number"placeholder='Enter Mobile Number' class="form-control" id="example" aria-describedby="emailHelp"></input>
                 
                </div>
                <div class="d-grid gap-2">
                  <button class="btn btn-primary" id="login-btn" type="button">Submit</button>
              </div>
            </form>
        </section>
        {/* <Footer/> */}
        </div>
        

    );
}
 