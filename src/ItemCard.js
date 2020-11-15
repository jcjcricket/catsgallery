import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestItems } from './actions';

const ItemCard = () => {
  const dispatch = useDispatch();

  const url = useSelector((state) => state[0].url);

  useEffect(() => {
    dispatch(requestItems());
  }, [dispatch]);

  return (
    <div className='container'>
      <h1>Random Cat</h1>
      <div className='card'>
        <img className='card-img-top' src={url} alt='card' />
        <div className='card-body'>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
