import React, {useEffect} from "react";
import RestaurantDetailComponent from "./RestaurantDetailComponent"
import {fetchAllDetail} from "../../services/restaurantDetailService";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

const selectRestaurant = (state) => state.restaurantDetail

const RestaurantDetailPage = () => {
  const params = useParams();
  const id = params.restaurantId;
  const restaurant = useSelector(selectRestaurant);
  const dispatch = useDispatch();
  useEffect(() =>fetchAllDetail(dispatch, id), []); //需要一个传入的 restaurant id

  return (
      <>
        <RestaurantDetailComponent restaurant={restaurant}/>
      </>
  )
}

export default RestaurantDetailPage;