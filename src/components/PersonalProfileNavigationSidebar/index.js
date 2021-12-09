import React from "react";
import bars from "./bars.json";
import BarItem from "./BarItem";
import {Link} from "react-router-dom";



const ProfileNavigationSidebar = (
    {
        active = 'Account Details'
    }) =>{

    return (
        <>
            <div className="list-group">
                <Link to="/home"
                      className="list-group-item">
                    <i className="fas fa-utensils"></i> Home
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
export default ProfileNavigationSidebar;

