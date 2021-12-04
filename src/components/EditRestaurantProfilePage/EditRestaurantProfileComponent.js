import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {updateCurrentRestaurantProfile} from "../../services/myRestaurantProfileService";

const EditRestaurantProfileComponent = ({profile, setEditProfile}) => {
    const [localProfile, setLocalProfile] = useState({});
    useEffect(() => {
        setLocalProfile(profile);
    }, []);
    const dispatch = useDispatch();
    const updateProfileClickHandler = () => {
        updateCurrentRestaurantProfile(dispatch, localProfile);

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

                <div className="col-12">
                    <label htmlFor="inputUserName" className="form-label">Restaurant Name</label>
                    <input type="text"
                           onChange={(event) => {
                               setLocalProfile(
                                   {...localProfile, restaurantName: event.target.value})
                           }}
                           className="form-control" id="inputUserName"
                           placeholder="eg. Water Pig BBQ" defaultValue={profile.restaurantName}/>
                </div>

                <div className="col-12">
                    <label htmlFor="inputUserCategory" className="form-label">Restaurant
                        Category</label>
                    <input type="text"
                           onChange={(event) => {
                               setLocalProfile({...localProfile, tag: event.target.value})
                           }}
                           className="form-control" id="inputUserCategory"
                           placeholder="eg. American Bar & Grill" defaultValue={profile.tag}/>
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


            </form>


        </div>
    );

}

export default EditRestaurantProfileComponent;