import React from 'react'

const Signup = () => {
  return (
    <div className="App">
    <div className=" Login__container">
      {/* <img src={'../img/Signin.png'} alt="" /> */}
      <div className="row d-flex justify-content-center">


        <div className="col-md-4">
          <form id="loginform" onSubmit={loginSubmit}>
            <h2 id='login'>Sign In</h2>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                id="EmailInput"
                name="EmailInput"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
              <small id="emailHelp" className="text-danger form-text">
                {emailError}
              </small>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
              <small id="passworderror" className="text-danger form-text">
                {passwordError}
              </small>
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label">Check me out</label>
            </div>

            <button type="submit" className="btn " id="button__color">
              Submit
            </button>
            <div>
              {(formIsValid === true) ? localStorage.getItem('user', JSON.stringify({

                username: "Paribesh pandey"
              })) : ''}
            </div>

          </form>


        </div>

      </div>

    </div>

  </div>
  )
}

export default Signup