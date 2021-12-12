import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./style.css"
import {useDispatch} from "react-redux";
import {createNewRestaurant, createNewBusinessUser} from "../../../services/businessUserService";

const BusinessRegisterForm = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [returnValue, setReturnValue] = useState('');
    const CreateUser = () => {
        if (password !== confirmPassword) {
            alert("Please input the same passwords in the form.")
        }
        const user = {
            email,
            username,
            phone,
            password,
            address,
            "userType": 0,
        }
        setReturnValue(createNewBusinessUser(dispatch, user));
        if (!returnValue.ok) alert("Unable to create account! Email is already registered.");
    }

    const [restaurantName, setRestaurantName] = useState('');
    const [address, setAddress] = useState('');
    // const [city, setCity] = useState('');
    // const [state, setState] = useState('');
    // const [location, setLocation] = useState('');


    // const CreateRestaurant = () => {
    //     const restaurant = {
    //         restaurantName,
    //         address,
    //         location: {
    //             display_address:[ ]
    //         },
    //         // city,
    //         // state,
    //         "userType": 0,
    //     }
    //     createNewRestaurant(dispatch, restaurant);
    // }

    return (
        <div className={"container"}>
            <div className={"row f-register-form-container"}>
                {/*<div className={"col-sm-1 col-lg-3"}>*/}
                {/*    */}
                {/*</div>*/}
                <div className={"col-sm-10 col-lg-6"}>
                    <form className={"f-register-form-border"}>
                        <fieldset>
                            <legend className={"f-login-form"}>Sign up</legend>
                            <div className="form-group ">
                                <label htmlFor="staticEmail"
                                       className="col-form-label">Email</label>
                                <input type="email" readOnly=""
                                       className="form-control f-form-border" id="staticEmail"
                                       onChange={e => setEmail(e.target.value)}
                                />
                                <label htmlFor="username"
                                       className="col-form-label">Username</label>
                                <input type="text" readOnly=""
                                       className="form-control f-form-border" id="username"
                                       onChange={e => setUsername(e.target.value)}
                                />
                                <label htmlFor="phoneNumber" className="col-form-label">Phone
                                    Number</label>
                                <input type="text" readOnly=""
                                       className="form-control f-form-border" id="phoneNumber"
                                       onChange={e => setPhone(e.target.value)}
                                />
                                <label htmlFor="password"
                                       className="col-form-label">Password</label>
                                <input type="password" readOnly=""
                                       className="form-control f-form-border" id="password"
                                       onChange={e => setPassword(e.target.value)}
                                />
                                <label htmlFor="confirmPassword" className="col-form-label">Confirm
                                    Password</label>
                                <input type="password" readOnly=""
                                       className="form-control f-form-border"
                                       id="confirmPassword"
                                       onChange={e => setConfirmPassword(e.target.value)}
                                />
                                <div className={"f-register-restaurant-title"}>
                                    Restaurant Information
                                </div>
                                <hr className="f-hr"/>

                                <label htmlFor="restaurantName" className="col-form-label">Restaurant
                                    Name</label>
                                <input type="text" readOnly=""
                                       className="form-control f-form-border"
                                       id="restaurantName"
                                       onChange={e => setRestaurantName(e.target.value)}
                                />
                                <label htmlFor="restaurantAddress" className="col-form-label">Restaurant
                                    Address</label>
                                <input type="text" readOnly=""
                                       className="form-control f-form-border"
                                       id="restaurantAddress"
                                       onChange={e => setAddress(e.target.value)}
                                />
                                {/*<label htmlFor="restaurantCity" className="col-form-label">Restaurant*/}
                                {/*    City</label>*/}
                                {/*<input type="text" readOnly=""*/}
                                {/*       className="form-control f-form-border"*/}
                                {/*       id="restaurantCity"*/}
                                {/*       onChange={e => setCity(e.target.value)}*/}
                                {/*/>*/}
                                {/*<label htmlFor="restaurantProvince" className="col-form-label">Restaurant*/}
                                {/*    State</label>*/}
                                {/*<input type="text" readOnly=""*/}
                                {/*       className="form-control f-form-border"*/}
                                {/*       id="restaurantProvince"*/}
                                {/*       onChange={e => setState(e.target.value)}*/}
                                {/*/>*/}
                            </div>
                            <div className={"mt-4"}>Already have an account? <Link
                                to={"/login"}>Login</Link></div>
                            {/*<button onClick={CreateUser} type="submit"*/}
                            {/*        className="btn btn-primary f-register-submit mt-2">Submit*/}
                            {/*</button>*/}
                            <Link to={"/login"} type="submit" className="btn btn-primary f-register-submit mt-2" onClick={CreateUser}>Submit</Link>

                        </fieldset>
                    </form>
                </div>

                <div className={"col-sm-1 col-lg-3 ms-5"}>
                    <img src="./images/register-bg.jpg" className="wd-bg-img rounded"></img>
                </div>


            </div>

        </div>

    );
}
export default BusinessRegisterForm;