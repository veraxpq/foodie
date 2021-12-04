import React, {useState} from "react";

import BusinessProfileNavigationSidebar from "../BusinessProfileNavigationSidebar";
import EditRestaurantProfile from "../EditRestaurantProfilePage";
import RestaurantProfile from "../RestaurantProfile";

const RestaurantProfileScreen = () => {
    const [edit, setEditProfile]=useState(false);

    return(
        <div className="row mt-2">
            <div className="col-1 col-lg-2 col-md-2 col-sm-2 col-xxl-2 col-xl-2 col-xs-1">
                <BusinessProfileNavigationSidebar active="My Restaurant"/>
            </div>

            <div className="col-11 col-lg-10 col-md-10 col-sm-10 col-xxl-10 col-xl-10 col-xs-11"
                 style={{"position": "relative"}}>

                {/*<PersonalProfile/>*/}
                {/*<EditPersonalUserProfile/>*/}
                {!edit ? <RestaurantProfile edit={edit} setEditProfile={setEditProfile}/> : <EditRestaurantProfile edit={edit} setEditProfile={setEditProfile}/>}



            </div>

        </div>
    );
};

export default RestaurantProfileScreen;