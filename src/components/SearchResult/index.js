import React, {useState} from "react";
import SearchResultComponent from "./SearchResultComponent";
import TopBar from "../TopBar";
import Category from "../Category";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import SearchBar from "../SearchBar";
import {getRestaurantByLocation, getRestaurantByTermAndLocation} from "../../services/searchRestaurantsServices";
const SearchResult = () => {
    const params = useParams();
    const [searchedTerm, setSearchedTerm] = useState(params.term || '');
    const [location, setLocation] = useState(params.location || '');
    console.log(searchedTerm, location);
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
            <div className="row mt-2 ms-2">
                <div className="d-none col-1 col-lg-2 col-md-2 d-sm-block col-xxl-2 col-xl-2 d-xs-block ms-5 mt-5">
                    <Category/>
                </div>
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