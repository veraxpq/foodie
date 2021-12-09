import React, {useEffect, useState} from "react";
import './profile.css'
import {useDispatch} from "react-redux";
import {updateCurrentPersonalProfile} from "../../services/personalProfileService";

const EditPersonalUserProfileComponent = ({profile, setEditProfile}) => {
    const [localProfile, setLocalProfile] = useState({});
    useEffect(() => {
        setLocalProfile(profile);
    }, []);
    const dispatch = useDispatch();
    const updateProfileClickHandler = () => {

        updateCurrentPersonalProfile(dispatch, localProfile);

    }

    return (
        <div className="container">
            <div className="row mb-3">
                <h2 className="wd-name-font text-right">Edit Profile</h2>
            </div>
            <div className="row">
                <div className="col-6">
                    <i onClick={() => setEditProfile(false)}
                       className="fas fa-times wd-white ms-3 mb-2 "></i>
                </div>

                <div className="col-6">
                    <button onClick={(event) => updateProfileClickHandler(event.target.value)}
                            className="btn fa-pull-right rounded-pill me-3 btn-primary">Save
                    </button>
                </div>
            </div>


            <form className="row g-3">
                <div className="col-md-12">
                    <label htmlFor="inputFirstName4" className="form-label">User Name</label>
                    <input type="text" onChange={(event) => {
                        setLocalProfile({...localProfile, username: event.target.value})
                    }}
                           className="form-control" id="inputFirstName4"
                           defaultValue={profile.username}/>
                </div>
                {/*<div className="col-md-6">*/}
                {/*    <label htmlFor="inputLastName4" className="form-label">Last Name</label>*/}
                {/*    <input type="text" onChange={(event) => {*/}
                {/*        setLocalProfile({...localProfile, lastName: event.target.value})*/}
                {/*    }}*/}
                {/*           className="form-control" id="inputLastName4"*/}
                {/*           defaultValue={profile.lastName}/>*/}
                {/*</div>*/}

                {/*<div className="col-12">*/}
                {/*    <label htmlFor="inputUserName" className="form-label">User Name</label>*/}
                {/*    <input type="text" className="form-control" id="inputUserName"*/}
                {/*           placeholder="eg. foodie" title="This is a name that will be shown*/}
                {/*           whenever you leave a review. Remember to not use your full name or email."/>*/}
                {/*</div>*/}

                <div className="col-12">
                    <label htmlFor="emailAddress" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="emailAddress"
                           onChange={(event) => {
                               setLocalProfile({...localProfile, email: event.target.value})
                           }}
                           placeholder="example@gmail.com" defaultValue={profile.email}/>
                </div>

                {/*<div className="col-md-6">*/}
                {/*    <label htmlFor="inputPhone" className="form-label">Phone</label>*/}
                {/*    <input type="tel" className="form-control" id="inputPhone"*/}
                {/*           placeholder="888-888-8888" pattern="[0-9]{3} [0-9]{3} [0-9]{4}"*/}
                {/*           maxlength="12"  title="Ten digits code" required/>*/}
                {/*</div>*/}
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Zip Code</label>
                    <input type="text" className="form-control" id="inputAddress"
                           onChange={(event) => {
                               setLocalProfile({...localProfile, zipCode: event.target.value})
                           }}
                           placeholder="12345" defaultValue={profile.zipCode}/>
                </div>
                {/*<div className="col-12">*/}
                {/*    <label htmlFor="inputAddress2" className="form-label">Address 2</label>*/}
                {/*    <input type="text" className="form-control" id="inputAddress2"*/}
                {/*           placeholder="Apartment, studio, or floor"/>*/}
                {/*</div>*/}
                {/*<div className="col-md-6">*/}
                {/*    <label htmlFor="inputCity" className="form-label">City</label>*/}
                {/*    <input type="text" className="form-control" id="inputCity"/>*/}
                {/*</div>*/}
                {/*<div className="col-md-4">*/}
                {/*    <label htmlFor="inputState" className="form-label">State</label>*/}
                {/*    <input type="text" id="inputState" className="form-control" />*/}
                {/*</div>*/}
                {/*<div className="col-md-2">*/}
                {/*    <label htmlFor="inputZip" className="form-label">Zip Code</label>*/}
                {/*    <input type="text" className="form-control" id="inputZip"/>*/}
                {/*</div>*/}
                {/*<div className="col-12">*/}
                    <h6>Birth Date</h6>
                    <input type="date"
                           onChange={(event) => {
                               setLocalProfile({...localProfile, dayOfBirth: event.target.value})
                           }}
                           defaultValue={profile.dayOfBirth}/>
                {/*</div>*/}

            </form>


        </div>
    );

}

export default EditPersonalUserProfileComponent;