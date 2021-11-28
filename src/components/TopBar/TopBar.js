import React from "react";
import {Link} from "react-router-dom";

const TopBarComponent = () => {
    return (
        <>
            <div className={"f-topbar-occupy"}></div>
            <div className={"f-location-fix"}>
                <div className={"f-align-left"}>
                    Foodie
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
                                Hi, xxx!
                            </div>
                            <div className="list-group ">
                                <Link to={"/login"} className={"list-group-item dropdown-item"}>
                                    <div className="row">
                                        <div className="col-2">
                                            <i className="fas fa-home"></i>
                                        </div>
                                        <div className="d-none d-xl-block col-10">
                                            Home
                                        </div>
                                    </div>
                                </Link>
                                <Link to={"/a9/twitter/explore"} className={"list-group-item "}>
                                    <div className="row">
                                        <div className="col-2">
                                            <i className="fas fa-hashtag"></i>
                                        </div>
                                        <div className="d-none d-xl-block col-10">
                                            Explore
                                        </div>
                                    </div>
                                </Link>
                                <div className={"list-group-item "}>
                                    <div className="row">
                                        <div className="col-2">
                                            <i className="far fa-bell"></i>
                                        </div>
                                        <div className="d-none d-xl-block col-10">
                                            Category
                                        </div>
                                    </div>
                                </div>
                                <div className={"list-group-item "}>
                                    <div className="row">
                                        <div className="col-2">
                                            <i className="far fa-envelope"></i>
                                        </div>
                                        <div className="d-none d-xl-block col-10">
                                            Profile
                                        </div>
                                    </div>
                                </div>
                                <Link to={"/login"} className={"list-group-item f-sidebar-logout"}>
                                    <div className="row">
                                        <div className="col-2">
                                        </div>
                                        <div className="d-none d-xl-block col-10">
                                            Log out
                                        </div>
                                    </div>
                                </Link>
                                {/*<div className={"list-group-item wd-left-bg" +*/}
                                {/*(active.status === 'Lists' ? ' active' : '')}>*/}
                                {/*    <div className="row">*/}
                                {/*        <div className="col-2">*/}
                                {/*            <i className="far fa-list-alt"></i>*/}
                                {/*        </div>*/}
                                {/*        <div className="d-none d-xl-block col-10">*/}
                                {/*            Lists*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                    {/*<div className="btn-group">*/}
                    {/*    <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"*/}
                    {/*            aria-expanded="false">*/}
                    {/*        <i className="fas fa-bars"></i>*/}
                    {/*    </button>*/}
                    {/*    <ul className="dropdown-menu dropdown-menu-end">*/}
                    {/*        <li><a className="dropdown-item" href="#">Menu item</a></li>*/}
                    {/*        <li><a className="dropdown-item" href="#">Menu item</a></li>*/}
                    {/*        <li><a className="dropdown-item" href="#">Menu item</a></li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}

                </div>
            </div>
        </>
    )
}

export default TopBarComponent;