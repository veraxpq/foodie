import React, {useEffect} from "react";

import "./profile.css"
import {useDispatch, useSelector} from "react-redux";
import BusinessProfileItem from "./BusinessProfileItem";
import {fetchAllBusinessProfile} from "../../services/businessProfileService";


const selectAllProfileData = (state) => state.businessProfile;

const BusinessProfile = ({setEditProfile, edit}) => {
    const profileData = useSelector(selectAllProfileData);
    const dispatch = useDispatch();

    const selectAllUserData = (state) => state.userInfo;
    const userData = useSelector(selectAllUserData);
    const userId = userData.id
    useEffect(() => fetchAllBusinessProfile(dispatch, userId), []);
    console.log("id",userId )
    console.log("business profileData",profileData)

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