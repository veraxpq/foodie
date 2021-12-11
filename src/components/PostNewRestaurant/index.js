import React from "react";
//import TopBar from "../TopBar";
import NewRestaurant from "./NewRestaurant";
import BusinessProfileNavigationSidebar from "../BusinessProfileNavigationSidebar";


const PostNewRestaurant = () => {
  return (
      <>
        <div className="row mt-2">
          <div className="col-1 col-lg-2 col-md-2 col-sm-2 col-xxl-2 col-xl-2 col-xs-1">
            <BusinessProfileNavigationSidebar active="Post New Restaurant"/>
          </div>
          <NewRestaurant/>
        </div>

      </>
  )
}

export default PostNewRestaurant;