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
                            <div className="form-group ">
                                <label htmlFor="staticEmail" className="col-form-label">Email</label>
                                    <input type="text" readOnly="" className="form-control f-form-border" id="staticEmail"
                                           value=""/>
                                <label htmlFor="username" className="col-form-label">Username</label>
                                    <input type="text" readOnly="" className="form-control f-form-border" id="username"
                                           value=""/>
                                <label htmlFor="phoneNumber" className="col-form-label">Phone Number</label>
                                    <input type="text" readOnly="" className="form-control f-form-border" id="phoneNumber"
                                           value=""/>
                                <label htmlFor="password" className="col-form-label">Password</label>
                                    <input type="text" readOnly="" className="form-control f-form-border" id="password"
                                           value=""/>
                                <label htmlFor="confirmPassword" className="col-form-label">Confirm Password</label>
                                    <input type="text" readOnly="" className="form-control f-form-border" id="confirmPassword"
                                           value=""/>
                                <div className={"f-register-restaurant-title"}>
                                    Restaurant Information
                                </div>
                                <hr className="f-hr"/>

                                <label htmlFor="restaurantName" className="col-form-label">Restaurant Name</label>
                                    <input type="text" readOnly="" className="form-control f-form-border" id="restaurantName"
                                           value=""/>
                                <label htmlFor="restaurantAddress" className="col-form-label">Restaurant Address</label>
                                    <input type="text" readOnly="" className="form-control f-form-border" id="restaurantAddress"
                                           value=""/>
                                <label htmlFor="restaurantCity" className="col-form-label">Restaurant City</label>
                                    <input type="text" readOnly="" className="form-control f-form-border" id="restaurantCity"
                                           value=""/>
                                <label htmlFor="restaurantProvince" className="col-form-label">Restaurant Province</label>
                                    <input type="text" readOnly="" className="form-control f-form-border" id="restaurantProvince"
                                           value=""/>
                            </div>
                            <div className={"mt-4"}>Already have an account? <Link to={"/login"}>Login</Link></div>
                            <button type="submit" className="btn btn-outline-dark f-register-submit mt-2">Submit</button>
                        </fieldset>
                    </form>
                </div>
                <div className={"col-sm-1 col-lg-3"}></div>

            </div>
        </div>
    );
}
export default BusinessRegisterForm;