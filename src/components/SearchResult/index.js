import React, {useState} from "react";
import SearchResultComponent from "./SearchResultComponent";
import TopBar from "../TopBar";
import Category from "../Category";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import SearchBar from "../SearchBar";
import {getRestaurantByLocation, getRestaurantByTermAndLocation} from "../../services/searchRestaurantsServices";
const SearchResult = () => {
    const queryString = window.location.search;
    console.log("search reult url",queryString);
    const urlParams = new URLSearchParams(queryString);
    const term = urlParams.get('term');
    const location = urlParams.get('cityName');
    console.log("search result index getting term and location", term, location);
    return(
        <div>
            <div>
                <TopBar/>
            </div>
            <div className={"f-home-banner"}>
                <div className="f-home-search-bar">
                    <SearchBar/>
                </div>
            </div>
            <div className="row mt-2 ms-4">
                <div className="col-10 col-lg-9 col-md-9 col-sm-9 col-xxl-9 col-xl-9 col-xs-10">
                    <div className="ms-5 pb-2 pt-2">
                        <h2>Search {location}</h2>
                    </div>
                    <div className="ms-3 me-3">
                        <SearchResultComponent/>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default SearchResult;