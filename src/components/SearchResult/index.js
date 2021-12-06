import React, {useState} from "react";
import SearchResultComponent from "./SearchResultComponent";
import TopBar from "../TopBar";
import Category from "../Category";
import {useNavigate, useParams} from "react-router-dom";
// import useReactRouter from 'use-react-router';

const SearchResult = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [term, setTerm] = useState(params.term || '');
    const [location, setLocation] = useState(params.location || 'seattle');
    const [restaurants, setRestaurants] = useState([]);
    function submit(e) {
        if(term && location) {
            navigate(`/search/${term}/${location}`);
        }
        console.log(term, location);
    }
    // useEffect()
    return(
        <div>
            <div>
                <TopBar/>
            </div>
            <div className={"f-home-banner"}>
                <div className="f-home-search-bar">
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