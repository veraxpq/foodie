// import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
// import {Provider} from "react-redux";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Register from "./components/RegisterPage/Customer/index";
import Login from "./components/LoginPage";
import BusinessUserProfile from "./components/BusinessUserProfilePage";
import ProfileScreen from "./components/PersonalProfileScreen";
import SavedRestaurantsScreen from "./components/SavedRestaurantsScreen";
import MyCommentsScreen from "./components/MyCommentsScreen";
//import 'bootswatch/dist/journal/bootstrap.min.css';
import HomePage from "./components/HomePage";
import RegisterPageForBusiness from "./components/RegisterPage/Business/index";
import ForgotPassword from "./components/LoginPage/ForgotPassword";
// import {applyMiddleware, combineReducers, createStore} from "redux";
// import logger from 'redux-logger';

// const reducer = combineReducers({})
// const store = createStore(reducer, applyMiddleware(logger));
function App() {
    return (
        <div>
            {/*<Provider store={store}>*/}
            <Routes>
                <Route path={"/register"} element={<Register/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/findPassword"} element={<ForgotPassword/>}/>
                <Route path={"/home"} element={<HomePage/>}/>
                <Route path={"/registerForBusiness"} element={<RegisterPageForBusiness/>}/>
                <Route path={"/personal_profile"} element={<ProfileScreen/>}/>
                <Route path={"/saved_restaurants"} element={<SavedRestaurantsScreen/>}/>
                <Route path={"/comments"} element={<MyCommentsScreen/>}/>
                <Route path={"/business_profile"} element={<BusinessUserProfile/>}/>
            </Routes>
            {/*</Provider>*/}
        </div>
    );
}

function Home() {
    return (
        <>
            <main>
                <h2>Welcome to the homepage!</h2>
                <p>You can do this, I believe in you.</p>
            </main>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </>
    );
}

export default App;
