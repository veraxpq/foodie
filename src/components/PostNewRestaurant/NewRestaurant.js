import React, {useState} from "react";
import {Link} from "react-router-dom";
import {postNewRestaurant} from "../../services/myRestaurantProfileService";
import {useDispatch} from "react-redux";

const NewRestaurant = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [display_phone, setDisplay_phone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const CreateRestaurant = () => {
    const restaurant = {
      "name": name,
      "phone": phone,
      "display_phone" :display_phone,
      "location":{
        "address1": address,
        "city": city,
        "state": state,
        "zip_code": zipCode,
        "display_address": `${address}, ${city}, ${state} ${zipCode}`
      },
      "messaging":{
        "use_case_text": description,
      },
      "categories":[
        {"title": category}
      ]
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
                  <label htmlFor="restaurantContact" className="col-sm-4 col-form-label">Phone</label>
                  <div className="col-sm-8">
                    <input type="text" readOnly="" className="form-control-plaintext f-form-border" id="restaurantContact"
                           value={phone} onChange={e => setPhone(e.target.value)}/>
                  </div>
                  <label htmlFor="restaurantPhone" className="col-sm-4 col-form-label">Display_phone</label>
                  <div className="col-sm-8">
                    <input type="text" readOnly="" className="form-control-plaintext f-form-border" id="restaurantPhone"
                           value={display_phone} onChange={e => setDisplay_phone(e.target.value)}/>
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
                           value={state} onChange={e => setState(e.target.value)}/>
                  </div>
                  <label htmlFor="restaurantZip" className="col-sm-4 col-form-label">Zip Code</label>
                  <div className="col-sm-8">
                    <input type="text" readOnly="" className="form-control-plaintext f-form-border" id="restaurantZip"
                           value={zipCode} onChange={e => setZipCode(e.target.value)}/>
                  </div>
                  <label htmlFor="description" className="col-sm-4 col-form-label">Description</label>
                  <div className="col-sm-8">
                    <input type="text" readOnly="" className="form-control-plaintext f-form-border" id="description"
                           value={description} onChange={e => setDescription(e.target.value)}/>
                  </div>
                  <label htmlFor="restaurantCategory" className="col-sm-4 col-form-label">Category</label>
                  <div className="col-sm-8">
                    <input type="text" readOnly="" className="form-control-plaintext f-form-border" id="restaurantCategory"
                           value={category} onChange={e => setCategory(e.target.value)}/>
                  </div>
                </div>
                <br/>
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