import React, {useEffect} from "react";
import restaurantDetailComponent from "./restaurantDetailComponent"
import {fetchAllDetail} from "../../services/restaurantDetailService";
import {useDispatch, useSelector} from "react-redux";

const selectRestaurant = (state) => state.restaurantDetail

const RestaurantDetailPage = () => {
  const restaurant = useSelector(selectRestaurant);
  const dispatch = useDispatch();
  useEffect(() =>fetchAllDetail(dispatch, restaurant.id), []); //需要一个传入的 restaurant id

  return (
      <>
        <restaurantDetailComponent restaurant={restaurant}/>
      </>
  )
}

export default RestaurantDetailPage;