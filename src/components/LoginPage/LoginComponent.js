import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateCurrentUser} from "../../services/logInService";

const LoginComponent = () => {
    // useEffect(() => {
    //     setPassword(user);
    // }, []);

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const updateUser = () => {

        const user = {
            email,
            // username,
            password,
            // zipCode,
            // "userType": 1
        }
        updateCurrentUser(dispatch, user);
    }

    return (
        <div className={"container"}>
            <div className={"row f-register-form-container"}>
                <div className={"col-sm-1 col-lg-3"}></div>
                <div className={"col-sm-10 col-lg-6 "}>
                    <form className={"f-register-form-border"}>
                        <fieldset>
                            <legend className={"f-login-form"}>Login</legend>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp" placeholder="Enter email"
                                       onChange={e => setEmail(e.target.value)}/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                    anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                       placeholder="Password"
                                       onChange={e => setPassword(e.target.value)}/>
                            </div>
                            <div>
                                <Link to={"/findPassword"} className={"f-login-forget"}>
                                    Forgot password
                                </Link>
                            </div>
                            <div className={""}>
                                <div className={"f-float-left"}><Link to={"/register"}>Create an account</Link></div>
                                <div className={"f-float-right"}><Link to={"/registerForBusiness"}>Post your restaurant
                                    in Foodie</Link></div>
                            </div>

                            <button onClick={updateUser} type="submit" className="btn btn-primary f-register-submit mt-2">Submit</button>
                        </fieldset>
                    </form>
                </div>
                <div className={"col-sm-1 col-lg-3"}></div>
            </div>
        </div>
    )
}

export default LoginComponent;