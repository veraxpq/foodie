import React from "react";
import {RatingView} from "react-simple-star-rating";

const BusinessProfileItem = ({profile, setEditProfile}) => {

    return (
        <>
            <li className="list-group-item">
                <div>
                    <img src={profile.avatar} className="wd-profile-avatar ms-2"></img>
                    <span><button onClick={() => setEditProfile(true)}
                                  className="fa-pull-right rounded-pill mt-2 me-3 btn-primary">Edit profile</button></span>
                </div>

                <div className="ms-1">
                    <h5>{profile.name}</h5>
                    <h6><i className="fas fa-envelope me-1"></i> {profile.email}</h6>
                    <h6><i className="fas fa-phone-alt me-1"></i> {profile.tel}</h6>

                </div>

            </li>

            {/*<li className="list-group-item"><span><i className="fas fa-store-alt me-1"></i>Restaurant Info</span></li>*/}


            {/*<li className="list-group-item">*/}
            {/*    <h4>Restaurant Info</h4>*/}

            {/*    <div className="row">*/}
            {/*        <div className="col-2">*/}
            {/*            <img src={profile.restaurantPicture} width="108"*/}
            {/*                 className="img-fluid rounded float-start"/>*/}

            {/*        </div>*/}
            {/*        <div className="col-6">*/}
            {/*            <h5>{profile.restaurantName}</h5>*/}
            {/*            <RatingView ratingValue={profile.rating}/>*/}
            {/*            <div>*/}
            {/*                <i className="fas fa-tags fa-xs"></i>*/}
            {/*                <span className="wd-icon-text-font ms-1">{profile.tag}</span>*/}

            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <i className="fas fa-map-marker-alt fa-xs "></i>*/}
            {/*                <span className="wd-icon-text-font ms-1">{profile.address}</span>*/}
            {/*            /!*</span>*!/*/}
            {/*            /!*    <i className="far fa-calendar-alt fa-xs ms-3"></i>*!/*/}
            {/*            /!*    <span className="wd-icon-text-font ms-1"> {"Joined "*!/*/}
            {/*            /!*                                               + profile.dateJoined}</span>*!/*/}
            {/*            </div>*/}

            {/*        </div>*/}
            {/*        /!*<div className="col-4 text-end">*!/*/}
            {/*        /!*    <button onClick={() => setEditProfile(true)}*!/*/}
            {/*        /!*            className="fa-pull-right rounded-pill mt-2 me-3 btn-primary">Edit*!/*/}
            {/*        /!*        profile*!/*/}
            {/*        /!*    </button>*!/*/}
            {/*        /!*</div>*!/*/}
            {/*    </div>*/}
            {/*</li>*/}
        </>

    )

}

export default BusinessProfileItem;