import React, {useState} from "react";
import {Link} from "react-router-dom";
import {postNewRestaurant} from "../../services/myRestaurantProfileService";
import {useDispatch} from "react-redux";

const NewRestaurant = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [contact, setContact] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const CreateRestaurant = () => {
    const restaurant = {
      name,
      address,
      city,
      province,
      zipCode,
      contact,
      description,
      category
    }
    postNewRestaurant(dispatch, restaurant);
  }

  return (
      <div className={"container"}>
        <div className={"row f-register-form-container"}>
          <div className={"col-sm-1 col-lg-3"}></div>
          <div className={"col-sm-10 col-lg-6 "}>
            <form className={"f-register-form-border"}>
              <fieldset>
                <legend className={"f-login-form"}>Post new Restaurant</legend>
                <div className="form-group row ">
                  <hr className="f-hr"/>

                  <label htmlFor="restaurantName" className="col-sm-4 col-form-label">Restaurant Name</label>
                  <div className="col-sm-8">
                    <input type="text" readOnly="" className="form-control-plaintext f-form-border" id="restaurantName"
                           value={name} onChange={e => setName(e.target.value)}/>
                  </div>
                  <label htmlFor="restaurantAddress" className="col-sm-4 col-form-label">Address</label>
                  <div className="col-sm-8">
                    <input type="text" readOnly="" className="form-control-plaintext f-form-border" id="restaurantAddress"
                           value={address} onChange={e => setAddress(e.target.value)}/>
                  </div>
                  <label htmlFor="restaurantCity" className="col-sm-4 col-form-label">City</label>
                  <div className="col-sm-8">
                    <input type="text" readOnly="" className="form-control-plaintext f-form-border" id="restaurantCity"
                           value={city} onChange={e => setCity(e.target.value)}/>
                  </div>
                  <label htmlFor="restaurantProvince" className="col-sm-4 col-form-label">Province</label>
                  <div className="col-sm-8">
                    <input type="text" readOnly="" className="form-control-plaintext f-form-border" id="restaurantProvince"
                           value={province} onChange={e => setProvince(e.target.value)}/>
                  </div>
                  <label htmlFor="restaurantZip" className="col-sm-4 col-form-label">Zip Code</label>
                  <div className="col-sm-8">
                    <input type="text" readOnly="" className="form-control-plaintext f-form-border" id="restaurantZip"
                           value={zipCode} onChange={e => setZipCode(e.target.value)}/>
                  </div>
                  <label htmlFor="restaurantContact" className="col-sm-4 col-form-label">Contact</label>
                  <div className="col-sm-8">
                    <input type="text" readOnly="" className="form-control-plaintext f-form-border" id="restaurantContact"
                           value={contact} onChange={e => setContact(e.target.value)}/>
                  </div>
                  <label htmlFor="description" className="col-sm-4 col-form-label">Description</label>
                  <div className="col-sm-8">
                    <input type="text" readOnly="" className="form-control-plaintext f-form-border" id="description"
                           value={description} onChange={e => setDescription(e.target.value)}/>
                  </div>
                  <label htmlFor="restaurantCategory" className="col-sm-4 col-form-label">Category</label>
                  <div className="col-sm-8">
                    <select  className={"mt-2"} id="restaurantCategory">
                      <option value="Chinese">Chinese</option>
                      <option value="American">American</option>
                      <option selected value="Italian">Italian</option>
                      <option value="Korean">Korean</option>
                    </select>
                  </div>
                </div>
                <button onClick={CreateRestaurant} type="submit" className="btn btn-outline-dark f-register-submit btn-primary">Post</button>
              </fieldset>
            </form>
          </div>
          <div className={"col-sm-1 col-lg-3"}></div>

        </div>
      </div>
  );
}
export default NewRestaurant;