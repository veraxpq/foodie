import React, {useState}  from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";

const SearchBar=()=>{
    const navigate = useNavigate();
    const params = useParams();
    const [term, setTerm] = useState(params.term|| '');
    const [location, setLocation] = useState(params.location|| '');
    console.log("user inputed search pair at search bar", {term, location})
    function submit(e) {
        // localStorage.setItem('term', term);
        // localStorage.setItem('location', location);

        setTerm(localStorage.getItem('term'));
        setLocation(localStorage.getItem('location'));
        console.log("in submit", {term, location})
        if(term && location) {
            const encodedTerm = encodeURI(term);
            const encodedLocation = encodeURI(location);
            // console.log("user searched pair", {encodedTerm, encodedLocation})
            // navigate(`/search?term=${encodedTerm}&cityName=${encodedLocation}`);
            // navigate(`/search/term=${encodedTerm}&cityName=${encodedLocation}`);
        }
        if (!term && location){
            const encodedLocation = encodeURI(location);
            const encodedTerm = "food";
            // navigate(`/search?term=food&cityName=${encodedLocation}`)
            // navigate(`/search/term=food&cityName=${encodedLocation}`)
        }
        // if (!term && !location){
        //     navigate(`/home`)
        // }
        // e.preventDefault();
    }
    return(
        <form className="d-flex">
            <input className="form-control me-sm-2"
                   type="text"
                   placeholder="What do you want to eat?"
                   value={term}
                   onChange={(event) => {setTerm(event.target.value);
                       localStorage.setItem('term', event.target.value);}}></input>
            <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Where"
                value={location}
                onChange={(event)=>{setLocation(event.target.value);
                    localStorage.setItem('location', event.target.value);}}></input>
            <Link to={`/search?term=${term}&cityName=${location}`} className="f-home-search-btn">Search</Link>
        </form>
    )
}
export default SearchBar;
