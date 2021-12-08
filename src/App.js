// import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
// import {Provider} from "react-redux";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Register from "./components/RegisterPage/Customer/index";
import Login from "./components/LoginPage";

import PersonalProfileScreen from "./components/PersonalProfileScreen";
import SavedRestaurantsScreen from "./components/SavedRestaurantsScreen";
import MyCommentsScreen from "./components/MyCommentsScreen";
import HomePage from "./components/HomePage";
import RegisterPageForBusiness from "./components/RegisterPage/Business/index";
import ForgotPassword from "./components/LoginPage/ForgotPassword";
import BusinessProfileScreen from "./components/BusinessProfileScreen";
import {combineReducers, createStore} from "redux";
import personalProfile from "./reducers/personalProfile";
import {Provider} from "react-redux";
import businessProfile from "./reducers/businessProfile";
import RestaurantProfileScreen from "./components/RestaurantProfileScreen";
import myRestaurantProfile from "./reducers/myRestaurantProfile";

import SearchResult from "./components/SearchResult";
import restaurantsInfo from "./reducers/restaurants";
import myComments from "./reducers/myComments";
import userInfo from "./reducers/logIn";
// import {applyMiddleware, combineReducers, createStore} from "redux";
// import logger from 'redux-logger';
import RestaurantDetailPage from "./components/RestaurantDetailPage";
import PostNewRestaurant from "./components/PostNewRestaurant";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";
// const reducer = combineReducers({})
// const store = createStore(reducer, applyMiddleware(logger));
function App() {
    const reducer = combineReducers({personalProfile, businessProfile,myRestaurantProfile,restaurantsInfo, myComments, userInfo})

    const store = createStore(reducer);
    return (
        <div>
            <Provider store={store}>
                <Routes>
                    <Route path={"/register"} element={<Register/>}/>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/findPassword"} element={<ForgotPassword/>}/>
                    <Route path={"/home"} element={<HomePage/>}/>
                    <Route path={"/registerForBusiness"} element={<RegisterPageForBusiness/>}/>
                    <Route path={"/personal_profile"} element={<PersonalProfileScreen/>}/>
                    <Route path={"/saved_restaurants"} element={<SavedRestaurantsScreen/>}/>
                    <Route path={"/comments"} element={<MyCommentsScreen/>}/>
                    <Route path={"/business_profile"} element={<BusinessProfileScreen/>}/>

                    <Route path={"/privacy_policy"} element={<PrivacyPolicyPage/>}/>

                    <Route path={"/my_restaurant"} element={<RestaurantProfileScreen/>}/>
                    <Route path={"/search/:term/:location"} element={<SearchResult/>}/>
                    <Route path={"/search"} element={<SearchResult/>}/>
                    <Route path={"/restaurant_detail"} element={<RestaurantDetailPage/>}/>
                    <Route path={"/post-new-restaurant"} element={<PostNewRestaurant/>}/>
                </Routes>
            </Provider>
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
