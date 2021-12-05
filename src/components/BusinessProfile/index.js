import React, {useEffect} from "react";

import "./profile.css"
import {useDispatch, useSelector} from "react-redux";
import BusinessProfileItem from "./BusinessProfileItem";
import {fetchAllBusinessProfile} from "../../services/businessProfileService";


const selectAllProfileData = (state) => state.businessProfile;

const BusinessProfile = ({setEditProfile, edit}) => {
    const profile = useSelector(selectAllProfileData);
    const dispatch = useDispatch();
    useEffect(() => fetchAllBusinessProfile(dispatch), []);

    return (

        <ul className="list-group">
            <li className="list-group-item">
                <h3>Account Details</h3>
            </li>

            {
                profile.map((profile, idx) => {
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