import React from "react";
import bars from "./bars.json";
import BarItem from "./BarItem";
import {Link} from "react-router-dom";



const BusinessProfileNavigationSidebar = (
    {
        active = 'Account Details'
    }) =>{

    return (
        <>
            <div className="list-group">
                <Link to="/"
                      className="list-group-item">
                    <i className="fas fa-utensils"></i>
                </Link>

                
                {
                    bars.map(bar => {
                        return (<BarItem bar={bar} active={active}/>);
                    })
                }

            </div>

        </>
    );
}
export default BusinessProfileNavigationSidebar;

