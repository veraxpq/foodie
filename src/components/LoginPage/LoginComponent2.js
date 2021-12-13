import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {logInUser} from "../../services/logInService";
const LOGIN_API = "https://foodie-mysql-database.herokuapp.com/foodie/login";

const selectUsers = (state) => state.userInfo;
const LoginComponent2 = () => {
    const [email, setEmail] = useState({});
    const [password, setPassword] = useState({});
    const [redirect, setRedirect] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loggedInUser = useSelector(selectUsers);
    useEffect(()=>{logInUser(dispatch, email, password)},[dispatch]);
    console.log("Get userInfo state at login", loggedInUser);
    const loginClickHandler = async (e:SyntheticEvent) => {
        e.preventDefault();
        console.log("user input at logging in", {email, password})
        const response = await fetch(`${LOGIN_API}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ email, password })
        })
            .then(response => response.json());
        const user = await response;
        console.log("USER_LOGIN_API return", user);
        if (user.status === 0) alert("Incorrect email and password combination");
        localStorage.setItem('userId',user.data.id);
        localStorage.setItem('token',user.data.token);
        localStorage.setItem('userType',user.data.userType);
        localStorage.setItem('username',user.data.username);
        console.log('current userId', localStorage.getItem('userId'))
        console.log('current token', localStorage.getItem('token'))
        console.log('current dataType', localStorage.getItem('userType'))
        console.log('current username', localStorage.getItem('username'))

        setRedirect(true);
    }

    if (redirect){
        if (localStorage.getItem('userType') === "1") {navigate(`/personal_profile`);}
        if (localStorage.getItem('userType') === "0") {navigate(`/business_profile`);}
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
                            {/*<div>*/}
                            {/*    <Link to={"/findPassword"} className={"f-login-forget"}>*/}
                            {/*        Forgot password*/}
                            {/*    </Link>*/}
                            {/*</div>*/}
                            <div className={""}>
                                <div className={"f-float-left"}><Link to={"/register"}>Create personal account</Link></div>
                                <div className={"f-float-right"}><Link to={"/registerForBusiness"}>Create business account</Link></div>
                            </div>

                            <button onClick={loginClickHandler} type="submit" className="btn btn-primary f-register-submit mt-2 mb-5">Submit</button>

                        </fieldset>
                    </form>
                </div>
                <div className={"col-sm-1 col-lg-3"}></div>
            </div>
        </div>
    )
}

export default LoginComponent2;