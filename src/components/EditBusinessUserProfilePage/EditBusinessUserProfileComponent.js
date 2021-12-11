import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateCurrentBusinessProfile} from "../../services/businessProfileService";


const EditBusinessUserProfileComponent =({profile, setEditProfile})=>{
    const [localProfile, setLocalProfile] = useState({});
    useEffect(() => {
        setLocalProfile(profile);
    }, []);
    const dispatch = useDispatch();

    const selectAllUserData = (state) => state.userInfo;
    const userData = useSelector(selectAllUserData);
    const userToken = userData.token

    const updateProfileClickHandler = () => {
        updateCurrentBusinessProfile(dispatch, localProfile,userToken);

    }


    return (

        <div className="container">
            <div className="row mb-3">
                <h2 className="wd-name-font text-right">Edit Profile</h2>
            </div>
            <div className="row">
                <div className="col-6">

                        <i onClick={()=>setEditProfile(false)} className="fas fa-times wd-white ms-3 mb-2 "></i>


                </div>

                <div className="col-6">
                    <button onClick={(event) => updateProfileClickHandler(event.target.value)}
                            className="btn fa-pull-right rounded-pill me-3 btn-primary">Save</button>
                </div>
            </div>


            <form className="row g-3">
                <div className="col-md-12">
                    <label htmlFor="inputFirstName4" className="form-label">User Name</label>
                    <input type="text"
                           onChange={(event) => {
                               setLocalProfile({...localProfile, username: event.target.value})
                           }}
                           className="form-control" id="inputFirstName4"
                           defaultValue={profile.username}
                    />
                </div>
                {/*<div className="col-md-6">*/}
                {/*    <label htmlFor="inputLastName4" className="form-label">Last Name</label>*/}
                {/*    <input type="text"*/}
                {/*           onChange={(event) => {*/}
                {/*               setLocalProfile({...localProfile, lastName: event.target.value})*/}
                {/*           }}*/}
                {/*           className="form-control" id="inputLastName4" defaultValue={profile.lastName}/>*/}
                {/*</div>*/}

                {/*<div className="col-12">*/}
                {/*    <label htmlFor="inputUserName" className="form-label">Restaurant Name</label>*/}
                {/*    <input type="text"*/}
                {/*           onChange={(event) => {*/}
                {/*               setLocalProfile({...localProfile, restaurantName: event.target.value})*/}
                {/*           }}*/}
                {/*           className="form-control" id="inputUserName"*/}
                {/*           placeholder="eg. Water Pig BBQ" defaultValue={profile.restaurantName}/>*/}
                {/*</div>*/}

                {/*<div className="col-12">*/}
                {/*    <label htmlFor="inputUserCategory" className="form-label">Restaurant Category</label>*/}
                {/*    <input type="text"*/}
                {/*           onChange={(event) => {*/}
                {/*               setLocalProfile({...localProfile, tag: event.target.value})*/}
                {/*           }}*/}
                {/*           className="form-control" id="inputUserCategory"*/}
                {/*           placeholder="eg. American Bar & Grill" defaultValue={profile.tag}/>*/}
                {/*</div>*/}

                <div className="col-12">
                    <label htmlFor="emailAddress" className="form-label">Email Address</label>
                    <input type="email"
                           onChange={(event) => {
                               setLocalProfile({...localProfile, email: event.target.value})
                           }}
                           className="form-control" id="emailAddress"
                           placeholder="example@gmail.com" defaultValue={profile.email}/>
                </div>

                <div className="col-md-12">
                    <label htmlFor="inputPhone" className="form-label">Phone Number</label>
                    <input type="tel"
                           onChange={(event) => {
                               setLocalProfile({...localProfile, tel: event.target.value})
                           }}
                           className="form-control" id="inputPhone"
                           placeholder="888-888-8888" pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                           maxlength="12"  title="Ten digits code" required
                           defaultValue={profile.tel}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text"
                           onChange={(event) => {
                               setLocalProfile({...localProfile, address: event.target.value})
                           }}
                           className="form-control" id="inputAddress"
                           placeholder="1234 Main St, Boston, MA" defaultValue={profile.address}/>
                </div>

                {/*<div className="col-md-6">*/}
                {/*    <label htmlFor="inputCity" className="form-label">Restaurant City</label>*/}
                {/*    <input type="text" className="form-control" id="inputCity"/>*/}
                {/*</div>*/}
                {/*<div className="col-md-4">*/}
                {/*    <label htmlFor="inputState" className="form-label">Restaurant State</label>*/}
                {/*    <input type="text" id="inputState" className="form-control" />*/}
                {/*</div>*/}
                {/*<div className="col-md-2">*/}
                {/*    <label htmlFor="inputZip" className="form-label">Restaurant Zip Code</label>*/}
                {/*    <input type="text" className="form-control" id="inputZip"/>*/}
                {/*</div>*/}

            </form>






        </div>
    );


}

export default EditBusinessUserProfileComponent;