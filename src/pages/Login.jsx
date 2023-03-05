import React from 'react'
import '../assets/styles/login.scss'

const Login = () => {
    return (
        <div className="Login">
            <div className=" Login__container">
                {/* <img src={'../img/Signin.png'} alt="" /> */}
                <div className="row d-flex justify-content-center">


                    <div className="col-md-4">
                        <div id="loginform" >
                            <h2 id='login'>Sign In</h2>
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
                                    // onChange={(event) => setEmail(event.target.value)}
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
                                    // onChange={(event) => setPassword(event.target.value)}
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

export default Login