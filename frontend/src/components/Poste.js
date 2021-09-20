import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Poste(props) {
  const { poste } = props;
  return (
    <div key={poste._id} className="poste">
      <Link to={`/poste/${poste._id}`}>
        <img className="medium" src={poste.image} alt={poste.name} />
      </Link>
      <div className="card-body">
        <Link to={`/poste/${poste._id}`}>
          <h2>{poste.name}</h2>
        </Link>
        <Link to={`/poste/${poste._id}`}>
          <h2>{poste.description}</h2>
        </Link>
        <Rating
          rating={poste.rating}
          numReviews={poste.numReviews}
        ></Rating>
        
       <div>
       {/* <Link to={`/seller/${product.seller._id}`}>
              {product.seller.seller.name}
            </Link> */}
         </div>
      </div>
    </div>
  );
}