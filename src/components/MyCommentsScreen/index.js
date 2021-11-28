import React, {useState} from "react";

import ProfileNavigationSidebar from "../PersonalProfileNavigationSidebar";
import MyCommentsList from "../CommentsPage";

const MyCommentsScreen = () => {

    return(
        <div className="row mt-2">
            <div className="col-1 col-lg-2 col-md-2 col-sm-2 col-xxl-2 col-xl-2 col-xs-1">
                <ProfileNavigationSidebar active="My Comments"/>
            </div>

            <div className="col-11 col-lg-10 col-md-10 col-sm-10 col-xxl-10 col-xl-10 col-xs-11"
                 style={{"position": "relative"}}>
                <MyCommentsList/>



            </div>

        </div>
    );
};

export default MyCommentsScreen;