import React, {useState}  from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";

const SearchBar=()=>{
    const params = useParams();
    const navigate = useNavigate();
    const [term, setTerm] = useState(params.term || '');
    const [location, setLocation] = useState(params.location || '');
    function submit(e) {
        navigate(`/${location}/${term}`);
        if(typeof params.search === 'function') {
            params.search(term, location);
        }
        console.log(term, location);
    }
    return(
        <div>
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
        </div>
    )
}
export default SearchBar;