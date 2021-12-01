import React from "react";
import {RatingView} from "react-simple-star-rating";

const BusinessProfileItem = ({profile, setEditProfile}) => {

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img src={profile.profilePicture} width="108"
                         className="img-fluid rounded float-start"/>

                </div>
                <div className="col-6">
                    <h5>{profile.restaurantName}</h5>
                    <RatingView ratingValue={profile.rating}/>
                    <div>
                        <i className="fas fa-tags fa-xs"></i>
                        <span className="wd-icon-text-font ms-1">{profile.tag}</span>

                    </div>
                    <div>
                        <i className="fas fa-map-marker-alt fa-xs "></i>
                        <span className="wd-icon-text-font ms-1">{profile.address+", "} {profile.city+", "}
                            {profile.state} {profile.zipCode}
                        </span>
                        <i className="far fa-calendar-alt fa-xs ms-3"></i>
                        <span className="wd-icon-text-font ms-1"> {"Joined " + profile.dateJoined}</span>
                    </div>

                </div>
                <div className="col-4 text-end">
                    <button onClick={()=>setEditProfile(true)} className="fa-pull-right rounded-pill mt-2 me-3 btn-primary">Edit profile</button>
                </div>
            </div>
        </li>
    )


}

export default BusinessProfileItem;