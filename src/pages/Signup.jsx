import React from 'react'
import '../assets/styles/signup.scss'

const Signup = () => {
  return (
    <div className="Signup">
      <div className=" Signup__container">
        {/* <img src={'../img/Signin.png'} alt="" /> */}
        <div className="row d-flex justify-content-center">


          <div className="col-md-4">
            <div id="Signupform" >
              <h2 id='Signup'>Signup</h2>
              <div className="form-group">
                <div>
                  <p> Name</p>
                  <input
                    type="name"
                    className="form-control"
                    id="nameInput"
                    name="nameInput"

                    placeholder="Enter Name"
                 
                  />
                </div>



              </div>
              <div className="form-group">
                <div>
                  <p>Email address</p>
                  <input
                    type="email"
                    className="form-control"
                    id="EmailInput"
                    name="EmailInput"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  
                  />
                </div>



              </div>
              <div className="form-group">
                <div>
                  <p>Password</p>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  
                  />

                </div>


              </div>


              <button type="submit" className="btn " id="button__color">
                Submit
              </button>
              <div>

              </div>

            </div>


          </div>

        </div>

      </div>

    </div>
  )
}

export default Signup