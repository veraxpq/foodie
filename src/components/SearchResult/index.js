import React, {useState} from "react";
import SearchResultComponent from "./SearchResultComponent";
import TopBar from "../TopBar";
import Category from "../Category";
import SearchBar from "../SearchBar";
import {useNavigate, useParams} from "react-router-dom";
// import useReactRouter from 'use-react-router';

const SearchResult = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [term, setTerm] = useState(params.term || '');
    const [location, setLocation] = useState(params.location || '');
    function submit(e) {
        if(term && location) {
            navigate(`/search/${term}/${location}`);
        }
        console.log(term, location);
    }
    return(
        <div>
            <div>
                <TopBar/>
            </div>
            <form className="d-flex">
                <input className="form-control me-sm-2"
                       type="text"
                       placeholder="What do you want to eat?"
                       value={term}
                       onChange={(event) => setTerm(event.target.value)}></input>
                <input
                    className="form-control me-sm-2"
                    type="text"
                    placeholder="Where"
                    value={location}
                    onChange={(event)=>setLocation(event.target.value)}></input>
                <button className="f-home-search-btn"
                        type="submit"
                        onClick={submit}>Search</button>
            </form>
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