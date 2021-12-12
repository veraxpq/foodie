import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";


const TopBarComponent = () => {
    // const selectAllUserData = (state) => state.userInfo;
    const navigate = useNavigate();
    const userName = localStorage.getItem("username");
    console.log("usename at topbar", userName)

    function submit(e) {
        if (localStorage.getItem('userId')) {
            localStorage.clear();
            navigate(`/home`);
        }
        else navigate(`/login`)
    }
    function submitProfile(e){
        if (localStorage.getItem('userType') === "1") {
            navigate(`/personal_profile`);
        }
        else navigate(`/business_profile`)
    }
    function loginCondition() {
        if (localStorage.getItem('userId')){
            return  <div>LogOut</div>;
        }
        else return <div>Login</div>;
    }


    return (
        <>
            <div className={"f-topbar-occupy"}></div>
            <div className={"f-location-fix"}>
                <Link to={"/home"} className={"f-align-left f-logo"}>
                    Foodie
                </Link>
                <div className="f-login-align-right">
                    <button onClick={submit} className="btn btn-primary btn-sm">{loginCondition()}</button>
                </div>
                <div className={"f-align-right"}>
                    {/*<div className="dropdown-divider"></div>*/}
                    <div className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                           aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-bars"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                            <div className={"f-sidebar-hi"}>
                                Hi {userName}!
                            </div>
                            <div className="list-group ">
                                <Link to={"/home"} className={"list-group-item dropdown-item"}>
                                    <div className="row">
                                        <div className="col-2">
                                            <i className="fas fa-home"></i>
                                        </div>
                                        <div className="d-none d-xl-block col-10">
                                            Home
                                        </div>
                                    </div>
                                </Link>
                                {/*<Link to={"/a9/twitter/explore"} className={"list-group-item dropdown-item"}>*/}
                                {/*    <div className="row">*/}
                                {/*        <div className="col-2">*/}
                                {/*            <i className="fas fa-hashtag"></i>*/}
                                {/*        </div>*/}
                                {/*        <div className="d-none d-xl-block col-10">*/}
                                {/*            Explore*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</Link>*/}
                                <Link to={"/search/restaurant/seattle"} className={"list-group-item dropdown-item"}>
                                    <div className="row">
                                        <div className="col-2">
                                            <i className="fas fa-hashtag"></i>
                                        </div>
                                        <div className="d-none d-xl-block col-10">
                                            Explore
                                        </div>
                                    </div>
                                </Link>
                                <div onClick={submitProfile} className={"list-group-item dropdown-item f-hand-cursor"}>
                                    <div className="row">
                                        <div className="col-2">
                                            <i className="far fa-user"></i>                                        </div>
                                        <div className="d-none d-xl-block col-10">
                                            Profile
                                        </div>
                                    </div>
                                </div>
                                <Link to={"/privacy_policy"} className={"list-group-item dropdown-item"}>
                                    <div className="row">
                                        <div className="col-2">
                                            <i className="fas fa-user-secret"></i>
                                        </div>
                                        <div className="d-none d-xl-block col-10">
                                            Privacy Policy
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopBarComponent;