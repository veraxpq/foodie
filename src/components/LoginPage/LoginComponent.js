import {Link} from "react-router-dom";
import React from "react";

const LoginComponent = () => {
    return (
        <div className={"container"}>
            <div className={"row f-register-form-container"}>
                <div className={"col-sm-1 col-lg-3"}></div>
                <div className={"col-sm-10 col-lg-6 "}>
                    <div className={"f-register-title"}>Login</div>
                    <form className={"f-register-form-border"}>
                        <fieldset>
                            <legend>Legend</legend>
                            <div className="form-group row ">
                                <label htmlFor="staticEmail" className="col-sm-4 col-form-label">Email</label>
                                <div className="col-sm-8">
                                    <input type="text" readOnly="" className="form-control-plaintext f-form-border" id="staticEmail"
                                           value="email@example.com"/>
                                </div>
                                <label htmlFor="password" className="col-sm-4 col-form-label">Password</label>
                                <div className="col-sm-8">
                                    <input type="text" readOnly="" className="form-control-plaintext f-form-border" id="password"
                                           value=""/>
                                </div>
                            </div>
                            <div className={"mt-4"}><Link to={"/register"}>Create an account</Link></div>
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