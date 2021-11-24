// import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
// import {Provider} from "react-redux";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Register from "./components/RegisterPage";
import Login from "./components/LoginPage";
import PersonalUserProfile from "./components/PersonalUserProfilePage";
import BusinessUserProfile from "./components/BusinessUserProfilePage";
import ProfileScreen from "./components/ProfileScreen";
import SavedRestaurantsScreen from "./components/SavedRestaurantsScreen";
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
            </Routes>
            <Routes>
                <Route path={"/login"} element={<Login/>}/>
            </Routes>

            <Routes>
                <Route path={"/personal_profile"} element={<ProfileScreen/>}/>
            </Routes>

            <Routes>
                <Route path={"/saved_restaurants"} element={<SavedRestaurantsScreen/>}/>
            </Routes>

            <Routes>
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
