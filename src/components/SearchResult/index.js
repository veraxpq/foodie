import React from "react";
import SearchResultComponent from "./SearchResultComponent";
import TopBar from "../TopBar";
import Category from "../Category";
import SearchBar from "../SearchBar";

const SearchResult = () => {
    return(
        <div>
            <div>
                <TopBar/>
            </div>
            <div className="row f-home-search-bar">
                <SearchBar/>
            </div>
            <div className="row mt-2 ms-2">
                <div className="col-1 col-lg-2 col-md-2 col-sm-2 col-xxl-2 col-xl-2 col-xs-1">
                    <Category/>
                </div>
                <div className="col-10 col-lg-9 col-md-9 col-sm-9 col-xxl-9 col-xl-9 col-xs-10">
                    <div className="ms-5 pb-2 pt-2">
                        <h2>Search result for you</h2>
                    </div>
                    <div className="ms-3">
                        <SearchResultComponent/>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default SearchResult;