import React from "react";
import {RatingView} from "react-simple-star-rating";
import {useDispatch} from "react-redux";
import {deleteMyRestaurant} from "../../services/myRestaurantProfileService";

const RestaurantProfileItem = ({profile, setEditProfile}) => {
    const dispatch = useDispatch();
    const deleteRestaurantClickHandler = () => {
        deleteMyRestaurant(dispatch, profile);
    }

    return (
        <>


            {/*<li className="list-group-item"><span><i className="fas fa-store-alt me-1"></i>Restaurant Info</span></li>*/}


            <li className="list-group-item">

                <div className="row">

                    <div className="col-2">
                        <img src={profile.restaurantPicture} width="108"
                             className="img-fluid rounded float-start"/>

                    </div>
                    <div className="col-6">
                        <h5>{profile.restaurantName}</h5>
                        <RatingView ratingValue={profile.rating}/>
                        <div>
                            <i className="fas fa-tags fa-xs"></i>
                            <span className="wd-icon-text-font ms-1">{profile.tag}</span>

                        </div>
                        <div>
                            <i className="fas fa-map-marker-alt fa-xs "></i>
                            <span className="wd-icon-text-font ms-1">{profile.address}</span>
                            {/*</span>*/}
                            {/*    <i className="far fa-calendar-alt fa-xs ms-3"></i>*/}
                            {/*    <span className="wd-icon-text-font ms-1"> {"Joined "*/}
                            {/*                                               + profile.dateJoined}</span>*/}
                        </div>

                    </div>
                    <div className="col-3">
                        <button onClick={() => setEditProfile(true)}
                                className="rounded-pill mt-2 me-3 btn-primary">Edit
                            profile
                        </button>


                    </div>
                    <div className="col-1">
                        <i onClick={() => deleteRestaurantClickHandler(profile)} className="fas fa-trash-alt fa-pull-right"></i>

                        {/*<button onClick={() => setEditProfile(true)}*/}
                        {/*        className="fa-pull-right rounded-pill mt-2 me-3 btn-primary">Delete*/}
                        {/*    Restaurant*/}
                        {/*</button>*/}

                    </div>
                </div>
            </li>
        </>

    )

}

export default RestaurantProfileItem;