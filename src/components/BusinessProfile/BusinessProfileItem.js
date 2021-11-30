import React from "react";
import {RatingView} from "react-simple-star-rating";


const BusinessProfileItem = ({profile, setEditProfile}) => {

    return (
        <>

            <div>

                <img src={profile.profilePicture} className="wd-profile-avatar1 ms-2"></img>
                <span>
                    <button onClick={()=>setEditProfile(true)} className="fa-pull-right rounded-pill mt-2 me-3 btn-primary">Edit profile</button>
                </span>

            </div>

            <div className="ms-1">
                <h4>{profile.restaurantName}</h4>

            </div>
            <RatingView ratingValue={profile.rating} />
            <div>
                <i className="fas fa-tags fa-xs ms-2"></i>
                <span className="wd-icon-text-font ms-1">
                        {profile.tag}
                </span>
            </div>

            <div className="row mb-4">
                <span className="mt-1">
                    <i className="fas fa-map-marker-alt fa-xs ms-2"></i>
                    {/*<span className="wd-icon-text-font ms-1">{profile.address}, {profile.city}, {profile.state} {profile.zipCode}</span>*/}
                    <span className="wd-icon-text-font ms-1">{profile.address}</span>

                    <i className="far fa-calendar-alt fa-xs ms-3"></i>

                    <span className="wd-icon-text-font ms-1">
                        {"Joined " + profile.dateJoined}
                    </span>


                </span>


            </div>




        </>
    );

}


export default BusinessProfileItem;