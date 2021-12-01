import React from "react";
import {Link} from "react-router-dom";

const RegisterForm = () => {
    return (
        <div className={"container"}>
            <div className={"row f-register-form-container"}>
                <div className={"col-sm-1 col-lg-3"}></div>
                <div className={"col-sm-10 col-lg-6 "}>
                    <form className={"f-register-form-border"}>
                        <fieldset>
                            <legend className={"f-login-form"}>Sign up</legend>
                            <div className="form-group">
                                <label htmlFor="staticEmail" className="form-label mt-4">Email</label>
                                    <input type="text" readOnly="" className="form-control f-form-border" id="staticEmail"
                                           value=""/>
                                <label htmlFor="username" className="col-form-label">Username</label>
                                    <input type="text" readOnly="" className="form-control f-form-border" id="username"
                                           value=""/>
                                <label htmlFor="password" className="col-form-label">Password</label>
                                    <input type="text" readOnly="" className="form-control f-form-border" id="password"
                                           value=""/>
                                <label htmlFor="password" className="col-form-label">Confirm Password</label>
                                    <input type="text" readOnly="" className="form-control-plaintext f-form-border" id="password"
                                           value=""/>
                                <label htmlFor="zipcode" className="col-form-label">Zip/Postal Code</label>
                                    <input type="text" readOnly="" className="form-control-plaintext f-form-border" id="zipcode"
                                           value=""/>
                            </div>
                            <div className={"mt-5"}>Already have an account? <Link to={"/login"}>Login</Link></div>
                            <button type="submit" className="btn btn-outline-dark f-register-submit mt-2">Submit</button>
                        </fieldset>
                    </form>
                </div>
                <div className={"col-sm-1 col-lg-3"}></div>

            </div>
        </div>
    );
}
export default RegisterForm;