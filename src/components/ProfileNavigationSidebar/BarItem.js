import {Link} from "react-router-dom";


const BarItem = ({bar, active}) => {
    return(

    <Link to={bar.router}
       className={`list-group-item list-group-item-action ${active === bar.text ? 'active' : ''} d-inline-flex`}>
        <i className={bar.icon}></i>
        <span className="d-none d-xl-block d-xxl-block ms-1">{bar.text}</span>
    </Link>


    );
}

export default BarItem;