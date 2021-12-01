import React from "react";
import SearchResultComponent from "./SearchResultComponent";
import TopBar from "../TopBar";
import Category from "../Category";

const SearchResult = () => {
    return(
        <div>
            <div>
                <TopBar/>
            </div>
            <div className="row f-home-search-bar">
                <div className={"col-10"}>
                    <input className="f-home-search me-sm-2" type="text" placeholder="What do you want to eat?"/>
                </div>
                <div className={"col-2"}>
                    <button className="f-home-search-btn" type="submit">Search</button>
                </div>
            </div>
            <div>
                <div>
                    <Category/>
                </div>
                <div className="col-9">
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