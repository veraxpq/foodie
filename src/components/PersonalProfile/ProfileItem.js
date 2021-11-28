import React from "react";


const ProfileItem = ({profile, setEditProfile}) => {

    return (
        <>

            <div>

                <img src={profile.profilePicture} className="wd-profile-avatar ms-2"></img>
                <span>
                    <button onClick={()=>setEditProfile(true)} className="fa-pull-right rounded-pill mt-2 me-3 btn-primary">Edit profile</button>
                </span>

            </div>

            <div className="ms-1">
                <h5>{profile.firstName} {profile.lastName}</h5>

            </div>

            <div className="row">
                <span className="mt-1">
                    <i className="fas fa-map-marker-alt fa-xs ms-2"></i>
                    <span className="wd-icon-text-font ms-1">{profile.location}</span>


                    <i className="fas fa-ankh fa-xs ms-3"></i>

                    <span className="wd-icon-text-font ms-1">
                        {"Born " + profile.dateOfBirth}
                    </span>

                    <i className="far fa-calendar-alt fa-xs ms-3"></i>

                    <span className="wd-icon-text-font ms-1">
                        {"Joined " + profile.dateJoined}
                    </span>
                </span>


            </div>



        </>
    );

}


export default ProfileItem;