import React, {useEffect} from "react";

import "./profile.css"
import {useDispatch, useSelector} from "react-redux";
import ProfileItem from "./ProfileItem";
import {fetchAllPersonalProfile} from "../../services/personalProfileService";


const selectAllProfileData = (state) => state.personalProfile;
const PersonalProfile = ({setEditProfile, edit}) => {
    const profileData = useSelector(selectAllProfileData);
    const dispatch = useDispatch();

    const selectAllUserData = (state) => state.userInfo;
    const userData = useSelector(selectAllUserData);
    const userId = userData.id
    useEffect(() => fetchAllPersonalProfile(dispatch, userId), []);
    console.log("profileData",profileData)



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


                profileData&&profileData.data&&
                <ProfileItem edit={edit} setEditProfile={setEditProfile} profile={profileData.data}/>

            }




        </div>

    );



}

export default PersonalProfile;