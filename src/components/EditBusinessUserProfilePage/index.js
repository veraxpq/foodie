import EditBusinessUserProfileComponent from "./EditBusinessUserProfileComponent";
import {useSelector} from "react-redux";
import React from "react";

const EditBusinessUserProfile = ({setEditProfile}) => {
    const profileData = useSelector(state => state.businessProfile);
    return (
        <>
            {
                profileData.map((profile, idx) => {
                    return (
                        <EditBusinessUserProfileComponent setEditProfile={setEditProfile} key={idx} profile={profile}/>
                    );
                })
            }

        </>

    )
}

export default EditBusinessUserProfile;