import React, {useEffect} from "react";

import "./profile.css"
import {useDispatch, useSelector} from "react-redux";
import ProfileItem from "./ProfileItem";
import {fetchAllPersonalProfile} from "../../services/personalProfileService";


const selectAllProfileData = (state) => state.personalProfile;
const PersonalProfile = ({setEditProfile, edit}) => {
    const profileData = useSelector(selectAllProfileData);
    const dispatch = useDispatch();
    useEffect(() => fetchAllPersonalProfile(dispatch), []);
    console.log("profileData",profileData)


    return(
        <>

            { // profileData.data&&profileData.data
                profileData&&profileData.map((profile, idx) => {
                    return (
                        <ProfileItem edit={edit} setEditProfile={setEditProfile} key={idx} profile={profile}/>
                    );
                })
            }



        </>

    );



}

export default PersonalProfile;