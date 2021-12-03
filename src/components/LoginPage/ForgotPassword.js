import React from "react";
import {Link} from "react-router-dom";
import TopBar from "../TopBar";

const ForgotPassword = () => {
    return (
        <>
            <TopBar/>
            <div className={"container"}>
                <div className={"row f-register-form-container"}>
                    <div className={"col-sm-1 col-lg-3"}></div>
                    <div className={"col-sm-10 col-lg-6 "}>
                        <form className={"f-register-form-border"}>
                            <fieldset>
                                <legend className={"f-login-form"}>Find your password</legend>
                                <div className="form-group ">
                                    <label htmlFor="staticEmail" className="col-form-label ">Email</label>
                                    <input type="text" readOnly="" className="form-control f-form-border"
                                           id="staticEmail"
                                           value=""/>
                                    <div className={"f-forget-password"}>
                                        <Link to={"/login"}>
                                            Login
                                        </Link>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-outline-dark f-register-submit">Submit</button>
                            </fieldset>
                        </form>
                    </div>
                    <div className={"col-sm-1 col-lg-3"}></div>

                </div>
            </div>
        </>
    )
}

export default ForgotPassword;