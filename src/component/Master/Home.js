import React from 'react';
import Header from '../Auth/Header';
import './Home.css';

export function Home() {
    return (
        <div>
            <Header />
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="col-lg-6" id="info">
                            <h1>Cloud-Based Hospital Information System</h1>
                            <h6>Get a free trial of a one-stop solution that allows you to transform hospital operations and deliver enhanced patient care.</h6>
                            

                        </div>
                        <div class="col-lg-6" id="info3">

                            <img src="https://campaigns.napierhealthcare.com/landing-page-image-1.png">
                            </img>

                        </div>

                    </div>
                    <div class="col-lg-12">

                        <h2 id="info2">Achieving Operational Efficiency & Optimal Revenue</h2>
                        <h6>The myNapier Hospital Information System (HIS) is a modern solution that enables medical facilities to overcome the biggest challenges in healthcare delivery today. It was created with a special focus on affordability, scalability and ease-of-use.</h6>
                    </div>





                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <img src='https://campaigns.napierhealthcare.com/his-features-1.png' id="imgFav">
                        </img>
                    </div>
                    <div class="col" id="info5">    
                        <h5>Ease of Management</h5>
                        <p>The solution allows a hospital to manage all departments, patients, and staff with ease.</p>
                        <h5 id="incre">Increase Revenue</h5>
                        <p>The increased operational efficiency will reduce revenue leakages and stock pilferage, bringing about increased revenue.</p>
                        <h5 id="increee">Improved Patient Experience</h5>
                        <p>A comprehensive Patient Management Portal ensures that patient wait times are minimised and better care is provided.</p>
                    </div>
                </div>
            </div>

        </div>
  );
}
