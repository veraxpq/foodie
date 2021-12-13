import React, {useState} from "react";
import {Link} from "react-router-dom";
import {createNewUser} from "../../../services/restaurantsService";
import {useDispatch} from "react-redux";
import "./style.css";
import {useNavigate} from "react-router-dom";

const URL = "https://foodie-mysql-database.herokuapp.com/foodie/createUser";
const RegisterForm = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [returnValue, setReturnValue] = useState('');
    const navigation = useNavigate();
    function register(e){
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Please input the same passwords in the form.")
        }
        const user = {
            email,
            username,
            password,
            zipCode,
            "userType": 0,
        }
        let resStatus = 0;
        fetch(URL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(res => {
                resStatus = res.status
                return res.json()
            })
            .then(res => {
                switch (resStatus) {
                    case 201:
                        console.log('success regsiter a business user')
                        break
                    case 400:
                        console.log('user already exist')
                        alert("Unable to create account! Email is already registered.")
                        break
                    case 500:
                        console.log('server error, try again')
                        break
                    default:
                        console.log('unhandled')
                        navigation(`/login`)
                        break
                }
            })
    }


    return (
        <div className={"container"}>
            <div className={"row f-register-form-container"}>
                {/*<div className={"col-sm-1 col-lg-3"}>*/}

                {/*</div>*/}
                <div className={"col-sm-10 col-lg-8 "}>
                    <form className={"f-register-form-border"}>
                        <fieldset>
                            <legend className={"f-login-form"}>Sign up</legend>
                            <div className="form-group">
                                <label htmlFor="staticEmail" className="form-label mt-4">Email</label>
                                    <input type="text"  className="form-control f-form-border" id="staticEmail"
                                           value={email} onChange={e => setEmail(e.target.value)}/>
                                <label htmlFor="username" className="col-form-label">Username</label>
                                    <input type="text" readOnly="" className="form-control f-form-border" id="username"
                                           value={username} onChange={e => setUsername(e.target.value)}/>
                                <label htmlFor="password" className="col-form-label">Password</label>
                                    <input type="password" readOnly="" className="form-control f-form-border" id="password"
                                           value={password} onChange={e => setPassword(e.target.value)}/>
                                <label htmlFor="confirmPassword" className="col-form-label">Confirm Password</label>
                                    <input type="password" readOnly="" className="form-control-plaintext f-form-border" id="confirmPassword"
                                           value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
                                <label htmlFor="zipcode" className="col-form-label">Zip/Postal Code</label>
                                    <input type="text" readOnly="" className="form-control-plaintext f-form-border" id="zipcode"
                                           value={zipCode} onChange={e => setZipCode(e.target.value)}/>
                            </div>
                            <div className={"mt-5"}>Already have an account? <Link to={"/login"}>Login</Link></div>
                            {/*<button onClick={CreateUser} type="submit" className="btn btn-primary f-register-submit mt-2">Submit</button>*/}
                            <Link to={"/login"} type="submit" className="btn btn-primary f-register-submit mt-2" onClick={register}>Submit</Link>
                        </fieldset>
                    </form>
                </div>
                <div className={"col-sm-2 col-lg-4"}>
                    <img src="./images/customer-register-bg.jpg" className="img-fluid wd-customer-bg-img"></img>
                </div>

            </div>
        </div>
    );
}
export default RegisterForm;