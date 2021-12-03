import {useSelector} from "react-redux";
import React from "react";
import EditRestaurantProfileComponent from "./EditRestaurantProfileComponent";

const EditRestaurantProfile = ({setEditProfile}) => {
    const profileData = useSelector(state => state.myRestaurantProfile);
    return (
        <>

            {
                profileData.map((profile, idx) => {
                    return (
                        <EditRestaurantProfileComponent setEditProfile={setEditProfile} key={idx} profile={profile}/>
                    );
                })
            }

        </>

    )
}

export default EditRestaurantProfile;