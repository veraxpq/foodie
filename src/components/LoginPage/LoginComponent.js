import {Link} from "react-router-dom";
import React from "react";

const LoginComponent = () => {
    return (
        <div className={"container"}>
            <div className={"row f-register-form-container"}>
                <div className={"col-sm-1 col-lg-3"}></div>
                <div className={"col-sm-10 col-lg-6 "}>
                    <form className={"f-register-form-border"}>
                        <fieldset>
                            <legend className={"f-login-form"}>Login</legend>
                            <div className="form-group row ">
                                <label htmlFor="staticEmail" className="col-sm-4 col-form-label ">Email</label>
                                <div className="col-sm-8">
                                    <input type="text" readOnly="" className="form-control-plaintext f-form-border" id="staticEmail"
                                           value=""/>
                                </div>
                                <label htmlFor="password" className="col-sm-4 col-form-label">Password</label>
                                <div className="col-sm-8">
                                    <input type="text" readOnly="" className="form-control-plaintext f-form-border" id="password"
                                           value=""/>
                                </div>
                                <Link to={"/findPassword"} className={"f-login-forget"}>
                                    Forgot password
                                </Link>
                            </div>
                            <div className={"mt-4 f-float-left"}><Link to={"/register"}>Create an account</Link></div>
                            <div className={"mt-4 f-float-right"}><Link to={"/registerForBusiness"}>Post your restaurant in Foodie</Link></div>
                            <button type="submit" className="btn btn-outline-dark f-register-submit">Submit</button>
                        </fieldset>
                    </form>
                </div>
                <div className={"col-sm-1 col-lg-3"}></div>

            </div>
        </div>
    )
}

export default LoginComponent;