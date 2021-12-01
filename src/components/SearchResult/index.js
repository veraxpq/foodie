import React from "react";
import SearchResultComponent from "./SearchResultComponent";

const SearchResult = () => {
    return(
        <div className="col-9">
            <div className="ms-5 pb-2 pt-2">
                <h2>Search result for you</h2>
            </div>
            <div className="ms-3">
                <SearchResultComponent/>
            </div>
        </div>
    )
}

export default SearchResult;