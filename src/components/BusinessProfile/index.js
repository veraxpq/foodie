import React, {useEffect} from "react";

import "./profile.css"
import {useDispatch, useSelector} from "react-redux";
import BusinessProfileItem from "./BusinessProfileItem";
import profileData from "./BusinessProfile.json"
//import {fetchAllProfile} from "../../../../services/profileService";


const selectAllProfileData = (state) => state.profile;
const BusinessProfile = ({setEditProfile, edit}) => {
    //const profileData = useSelector(selectAllProfileData);
    //const dispatch = useDispatch();
    //useEffect(() => fetchAllProfile(dispatch), []);


    return(
        <>

            {
                profileData.map((profile, idx) => {
                    return (
                        <BusinessProfileItem edit={edit} setEditProfile={setEditProfile} key={idx} profile={profile}/>
                    );
                })
            }



        </>

    );



}

export default BusinessProfile;