import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../services/userService";
import {useNavigate} from "react-router-dom";

const LoginComponent2 = () => {
    const [email, setEmail] = useState({});
    const [password, setPassword] = useState({});
    const [user, setUser] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const selectAllUserData = (state) => state.userInfo;
    // const userData = useSelector(selectAllUserData);
    // const [errorMsg, setErrorMsg]=useState("");
    // const userId = userData.id
    // console.log("login user id",userId)
    console.log("user input for login", email, password)

    const loginClickHandler = () => {
        login(dispatch, email, password)
        console.log(user)
    }


    return (
        <div className={"container"}>
            {/*<h2>{errorMsg}</h2>*/}
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
                                       onChange={(e) => setEmail( e.target.value)}/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                    anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                       placeholder="Password"
                                       onChange={(e) => setPassword( e.target.value)}/>
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

                            <button onClick={loginClickHandler} type="submit" className="btn btn-primary f-register-submit mt-2 mb-5">Submit</button>

                            <div onClick={loginClickHandler}>ddghdhjdh</div>

                        </fieldset>
                    </form>
                </div>
                <div className={"col-sm-1 col-lg-3"}></div>
            </div>
        </div>
    )
}

export default LoginComponent2;