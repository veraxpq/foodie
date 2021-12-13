import React, {useState}  from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";

const SearchBar=()=>{
    const navigate = useNavigate();
    const params = useParams();
    const [term, setTerm] = useState(params.term|| '');
    const [location, setLocation] = useState(params.location|| '');
    console.log("user inputed search pair at search bar", {term, location})
    function submit(e) {
        localStorage.setItem("location", event.target.value)
        localStorage.setItem("term", event.target.value)

        if(term && location) {
            const encodedTerm = encodeURI(localStorage.getItem("term"));
            const encodedLocation = encodeURI(localStorage.getItem("location"));
            console.log("user searched pair", {encodedTerm, encodedLocation})
            navigate(`/search?term=${encodedTerm}&cityName=${encodedLocation}`);
            // navigate(`/search/term=${encodedTerm}&cityName=${encodedLocation}`);
        }
        if (!term && location){
            const encodedLocation = encodeURI(location);
            navigate(`/search?term=food&cityName=${encodedLocation}`)
            // navigate(`/search/term=food&cityName=${encodedLocation}`)
        }
        if (!term && !location){
            navigate(`/home`)
        }
    }
    return(
        <form className="d-flex">
            <input className="form-control me-sm-2"
                   type="text"
                   placeholder="What do you want to eat?"
                   value={localStorage.getItem("term")}
                   onChange={(event) => setTerm(event.target.value)}></input>
            <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Where"
                value={localStorage.getItem("location")}
                onChange={(event)=>setLocation(event.target.value)}></input>
            <button className="f-home-search-btn"
                    onClick={submit}>Search</button>
        </form>
    )
}
export default SearchBar;
