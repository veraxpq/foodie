import React, {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import RestaurantProfileItem from "./RestaurantProfileItem";
import {fetchAllRestaurantProfile} from "../../services/myRestaurantProfileService";


const selectAllProfileData = (state) => state.myRestaurantProfile;

const RestaurantProfile = ({setEditProfile, edit}) => {
    const profileData = useSelector(selectAllProfileData);
    const dispatch = useDispatch();
    useEffect(() => fetchAllRestaurantProfile(dispatch), []);
    console.log("res profile data",profileData)

    return (

        <ul className="list-group">
            <li className="list-group-item">
                <h3>My Restaurant</h3>
            </li>

            {
                profileData.data&&profileData.data.map((profile, idx) => {
                    return (
                        <RestaurantProfileItem edit={edit} setEditProfile={setEditProfile} key={idx}
                                             profile={profile}/>
                    );
                })
            }


        </ul>

    );

}

export default RestaurantProfile;