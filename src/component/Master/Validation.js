import React from 'react';

export function Validation() {
  return (
    <div>
      <section class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
            <div class="row justify-content-center align-items-center h-100">
                <div class="col-12 col-lg-9 col-xl-7">
                    <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
                        <div class="card-body p-4 p-md-5">
                            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 text-center">Login</h3>
                            <form >

                               
                                    <div class="col-md-12 mb-4">

                                        <div class="form-outline">
                                            <label class="form-label" for="firstName">User Name</label>
                                            <input type="text" id="firstName" class="form-control form-control-lg"
                                                onkeyup="Firstname()" />
                                                 <p id="nameError"></p>
                                        </div>

                                    </div>
                                   
                                    

                                
                                    <div class="col-md-12 mb-4 pb-2">

                                        <div class="form-outline">
                                            <label class="form-label" for="emailAddress">Email</label>
                                            <input type="email" id="emailAddress" class="form-control form-control-lg"
                                                onkeyup="Email()" />
                                                <p id="emailError"></p>
                                            
                                        </div>

                                    </div>
                                
                                    <div class="col-md-12 mb-4 pb-2">

                                        <div class="form-outline">
                                            <label class="form-label" for="phoneNumber">Phone Number</label>
                                            <input type="number" id="phoneNumber" class="form-control form-control-lg"
                                                onkeyup="Mobile()" />
                                                <p id="mobileError"></p>
                                           
                                        </div>

                                    </div>
                                    <div class="col-md-12 mb-4 pb-2">

                                        <div class="form-outline">
                                            <label class="form-label" for="phoneNumber">Password</label>
                                            <input type="password" id="pass" class="form-control form-control-lg"
                                                onkeyup="Password()" />
                                                <p id="passError"></p>
                                            
                                        </div>

                                    </div>
                              

                               

                                <div class="mt-4 pt-2">
                                    <input  type="button" value="submit" onclick="login()"/>
                                </div>

                            </form>
                            <p id="err"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
}




    
   





   


