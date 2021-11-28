import React from "react";
import {Link} from "react-router-dom";

const BusinessRegisterForm = () => {
    return (
        <div className={"container"}>
            <div className={"row f-register-form-container"}>
                <div className={"col-sm-1 col-lg-3"}></div>
                <div className={"col-sm-10 col-lg-6 "}>
                    <form className={"f-register-form-border"}>
                        <fieldset>
                            <legend className={"f-login-form"}>Sign up</legend>
                            <div className="form-group row ">
                                <label htmlFor="staticEmail" className="col-sm-4 col-form-label">Email</label>
                                <div className="col-sm-8">
                                    <input type="text" readOnly="" className="form-control-plaintext f-form-border" id="staticEmail"
                                           value=""/>
                                </div>
                                <label htmlFor="username" className="col-sm-4 col-form-label">Username</label>
                                <div className="col-sm-8">
                                    <input type="text" readOnly="" className="form-control-plaintext f-form-border" id="username"
                                           value=""/>
                                </div>
                                <label htmlFor="phoneNumber" className="col-sm-4 col-form-label">Phone Number</label>
                                <div className="col-sm-8">
                                    <input type="text" readOnly="" className="form-control-plaintext f-form-border" id="phoneNumber"
                                           value=""/>
                                </div>
                                <label htmlFor="password" className="col-sm-4 col-form-label">Password</label>
                                <div className="col-sm-8">
                                    <input type="text" readOnly="" className="form-control-plaintext f-form-border" id="password"
                                           value=""/>
                                </div>
                                <label htmlFor="confirmPassword" className="col-sm-4 col-form-label">Confirm Password</label>
                                <div className="col-sm-8">
                                    <input type="text" readOnly="" className="form-control-plaintext f-form-border" id="confirmPassword"
                                           value=""/>
                                </div>
                                <div className={"f-register-restaurant-title"}>
                                    Restaurant Information
                                </div>
                                <hr className="f-hr"/>

                                <label htmlFor="restaurantName" className="col-sm-4 col-form-label">Restaurant Name</label>
                                <div className="col-sm-8">
                                    <input type="text" readOnly="" className="form-control-plaintext f-form-border" id="restaurantName"
                                           value=""/>
                                </div>
                                <label htmlFor="restaurantAddress" className="col-sm-4 col-form-label">Restaurant Address</label>
                                <div className="col-sm-8">
                                    <input type="text" readOnly="" className="form-control-plaintext f-form-border" id="restaurantAddress"
                                           value=""/>
                                </div>
                                <label htmlFor="restaurantCity" className="col-sm-4 col-form-label">Restaurant City</label>
                                <div className="col-sm-8">
                                    <input type="text" readOnly="" className="form-control-plaintext f-form-border" id="restaurantCity"
                                           value=""/>
                                </div>
                                <label htmlFor="restaurantProvince" className="col-sm-4 col-form-label">Restaurant Province</label>
                                <div className="col-sm-8">
                                    <input type="text" readOnly="" className="form-control-plaintext f-form-border" id="restaurantProvince"
                                           value=""/>
                                </div>
                            </div>
                            <div className={"mt-4"}>Already have an account? <Link to={"/login"}>Login</Link></div>
                            <button type="submit" className="btn btn-outline-dark f-register-submit">Submit</button>
                        </fieldset>
                    </form>
                </div>
                <div className={"col-sm-1 col-lg-3"}></div>

            </div>
        </div>
    );
}
export default BusinessRegisterForm;