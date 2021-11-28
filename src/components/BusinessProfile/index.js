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

    return (

        <ul className="list-group">
            <li className="list-group-item">
                <h3>My Restaurant</h3>
            </li>

            {
                profileData.map((profile, idx) => {
                    return (
                        <BusinessProfileItem edit={edit} setEditProfile={setEditProfile} key={idx}
                                             profile={profile}/>
                    );
                })
            }


        </ul>

    );

}

export default BusinessProfile;