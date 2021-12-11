import React, {useEffect, useState} from "react";
import "./profile.css"
import {useDispatch, useSelector} from "react-redux";
import ProfileItem from "./ProfileItem";
import {fetchAllPersonalProfile} from "../../services/personalProfileService";

const USER_INFO_API = "https://foodie-mysql-database.herokuapp.com/foodie/userInfo";

const PersonalProfile = ({setEditProfile, edit}) => {
    let userId = localStorage.getItem("userId");
    console.log("Get userId from localStorage in personal profile", userId)
    const dispatch = useDispatch();
    const selectUserProfile = (state) => state.personalProfile;
    const profileData = useSelector(selectUserProfile);
    console.log("personal profileData before effect", profileData);

    // useEffect(async() => {
    //     const userInfo = await fetch(`${USER_INFO_API}?id=${userId}`)
    //         .then(response => response.json());
    //     };
    // });
    useEffect(()=>{fetchAllPersonalProfile(dispatch,userId)},[dispatch])
    console.log("personal profileData after effect", profileData);
    return(
        <div>
            {
                // profileData.data&&profileData.data
                // // profileData.data={} 不能被map因为他是一个json object， not an array
                // profileData&&profileData.data&& profileData.data
                //
                // profileData.data.map((profile, idx) => {
                //     return (
                //         <ProfileItem edit={edit} setEditProfile={setEditProfile} key={idx} profile={profile}/>
                //     );
                // })
                //
                //
                profileData&&profileData.data&&
                <ProfileItem edit={edit} setEditProfile={setEditProfile} profile={profileData.data}/>
            }




        </div>

    );



}

export default PersonalProfile;