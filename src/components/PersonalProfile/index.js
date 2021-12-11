import React, {useEffect} from "react";

import "./profile.css"
import {useDispatch, useSelector} from "react-redux";
import ProfileItem from "./ProfileItem";
import {getCompleteUserProfileById} from "../../services/userService";


const selectUser = (state) => state.userReducer;
const PersonalProfile = ({setEditProfile, edit}) => {
    const loggedInUser = useSelector(selectUser);
    const dispatch = useDispatch();
    useEffect(() => getCompleteUserProfileById(dispatch, loggedInUser), []);
    console.log("Complete User profile", loggedInUser)

    return(
        <div>

            {
                // <span>{JSON.stringify(profileData.data)}</span>
                // profileData.data&&profileData.data
                //profileData.data={} 不能被map因为他是一个json object， not an array
                // profileData&&profileData.data&& profileData.data

                // profileData.data.map((profile, idx) => {
                //     return (
                //         <ProfileItem edit={edit} setEditProfile={setEditProfile} key={idx} profile={profile}/>
                //     );
                // })


                // profileData&&profileData.data&&
                // <ProfileItem edit={edit} setEditProfile={setEditProfile} profile={profileData.data}/>

            }




        </div>

    );



}

export default PersonalProfile;