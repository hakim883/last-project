import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { detailsUser } from "../actions/userActions";
import {user} from '../data'

export const Contact = (props) => {
    // const sellerId = props.match.params.id;
  const userDetails = useSelector((state) => state.userDetails);
  const {  user } = userDetails;

  

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(detailsUser(sellerId));
//     dispatch(listProducts({ seller: sellerId }));
//   }, [dispatch, sellerId]);
  return (

      <div className="container-border">
          <h1>Contact Us</h1>
            <p>We would love to respond to your queries and help you succed.Fell free to get in touch with us.</p>
          <form className="row">
              <label>name</label>
aem
              <label>Email</label>
             comercial@aem.com

              <label>Phone</label>
              71231548
              <label>adress</label>
             tunis


              
              <a href={`mailto:${"polatkgt38@gmail.com"}`}>Contactez-nous</a>


          </form>
      </div>
   
  );
};