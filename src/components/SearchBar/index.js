import React, {useState}  from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";

const SearchBar=()=>{
    const navigate = useNavigate();
    const params = useParams();
    const [term, setTerm] = useState(params.term|| '');
    const [location, setLocation] = useState(params.location|| '');
    console.log("user inputed search pair at search bar", {term, location})
    function submit(e) {
        if(term && location) {
            const encodedTerm = encodeURI(term);
            const encodedLocation = encodeURI(location);
            window.location.href = `/search?term=${term}&cityName=${location}`;
        }
        if (!term && location){
            const encodedLocation = encodeURI(location);
            const encodedTerm = "food";
            window.location.href = `/search?term=food&cityName=${location}`
        }
        if (!term && !location){
            window.location.href = `/home`;
        }
        e.preventDefault();
    }
    return(
        <form onSubmit={submit} className="d-flex">
            <input className="form-control me-sm-2"
                   type="text"
                   placeholder="What do you want to eat?"
                   value={term}
                   onChange={(event) => {setTerm(event.target.value);}}></input>
            <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Where"
                value={location}
                onChange={(event)=>{setLocation(event.target.value);}}></input>
            <button onClick={submit} className="f-home-search-btn">Search</button>
        </form>
    )
}
export default SearchBar;
