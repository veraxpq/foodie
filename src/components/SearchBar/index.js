import React, {useState}  from 'react';

const SearchBar=(props)=>{
    const [term, setTerm] = useState(props.term || '');
    const [location, setLocation] = useState(props.location || '');
    function submit(e) {
        if(typeof props.search === 'function') {
            props.search(term, location);
        }
        console.log(term, location);
    }
    return(
        // <form onSubmit={submit}>
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
