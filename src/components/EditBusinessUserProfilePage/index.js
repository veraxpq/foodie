import EditBusinessUserProfileComponent from "./EditBusinessUserProfileComponent";
import {useSelector} from "react-redux";
import React from "react";


const EditBusinessUserProfile = ({setEditProfile}) => {
    const profileData = useSelector(state => state.businessProfile);
    return (
        <>
            {

            profileData&&profileData.data&&
            <EditBusinessUserProfileComponent setEditProfile={setEditProfile} profile={profileData.data}/>
            }

        </>

    )
}

export default EditBusinessUserProfile;

{/*    profileData.map((profile, idx) =>
            {/*        return (*/}
{/*            <EditBusinessUserProfileComponent setEditProfile={setEditProfile} key={idx} profile={profile}/>*/}
{/*        );*/}
{/*    })*/}
{/*}*/}