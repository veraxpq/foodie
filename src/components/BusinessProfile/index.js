import React, {useEffect} from "react";

import "./profile.css"
import {useDispatch, useSelector} from "react-redux";
import BusinessProfileItem from "./BusinessProfileItem";
import {fetchAllBusinessProfile} from "../../services/businessProfileService";

const USER_INFO_API = "https://foodie-mysql-database.herokuapp.com/foodie/userInfo";
const BusinessProfile = ({setEditProfile, edit}) => {
    let userId = localStorage.getItem("userId");
    console.log("Get userId from localStorage in business profile", userId)
    const dispatch = useDispatch();

    const selectBusinessProfile = (state) => state.businessProfile;
    const profileData = useSelector(selectBusinessProfile);
    console.log("business profileData before effect",profileData)

    const userToken = localStorage.getItem("token");
    useEffect(() => fetchAllBusinessProfile(dispatch, userId,userToken), [dispatch]);
    console.log("business profileData after effect",profileData)

//     return (
//
//         // profileData&&profileData.data&&
//
//         <ul className="list-group">
//             <li className="list-group-item">
//                 <h3>Account Details</h3>
//             </li>
//
//             {
//                 profileData&&profileData.data&&profileData.map((profile, idx) => {
//                     return (
//                         <BusinessProfileItem edit={edit} setEditProfile={setEditProfile} key={idx}
//                                              profile={profile}/>
//                     );
//                 })
//             }
//
//
//         </ul>
//
//     );
//
// }




return(
    <div>

        {

            profileData&&profileData.data&&
            <BusinessProfileItem edit={edit} setEditProfile={setEditProfile} profile={profileData.data}/>

        }

    </div>

);
}





export default BusinessProfile;