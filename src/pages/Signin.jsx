import React from 'react'
import '../assets/styles/signin.scss'

const Signin = () => {
    return (
        <div className="signin">
            <div className=" signin__container">
                {/* <img src={'../img/Signin.png'} alt="" /> */}
                <div className="row d-flex justify-content-center">


                    <div className="col-md-4">
                        <form id="signinform" >
                            <h2 id='signin'>Sign In</h2>
                            <div className="form-group">
                                <label>Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="EmailInput"
                                    name="EmailInput"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"

                                />

                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Password"

                                />

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

                            </div>

                        </form>


                    </div>

                </div>

            </div>

        </div>

    )
}

export default Signin