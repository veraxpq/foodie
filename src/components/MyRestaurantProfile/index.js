import React, {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import RestaurantProfileItem from "./RestaurantProfileItem";
import {fetchAllRestaurantProfile} from "../../services/myRestaurantProfileService";


const selectAllProfileData = (state) => state.myRestaurantProfile;

const RestaurantProfile = ({setEditProfile, edit}) => {
    const profileData = useSelector(selectAllProfileData);
    // const selectAllUserData = (state) => state.userInfo;
    // const userData = useSelector(selectAllUserData);
    const userId = localStorage.getItem("userId");
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");
    useEffect(() => fetchAllRestaurantProfile(dispatch, userId,token), []);
    console.log("res user id",userId)

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