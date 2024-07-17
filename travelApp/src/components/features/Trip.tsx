import React from 'react';
import { useNavigate } from 'react-router-dom';

type TripProps = {
    title: string;
    image: string;
    price: number;
    duration: number;
    level: string;
    id: string;
  };


const Trip: React.FC<TripProps> = ({title, image, price, duration, level, id}) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
      navigate(`/trip/${id}`);
    };
  return (
    <li className='trip-card' data-test-id ='trip-card'>
        <img data-test-id='trip-card-image'src={image} alt='trip photo'/>
        <div className='trip-card__content'>
            <div className='trip-info'>
                <h3 data-test-id='trip-card-title' className='trip-info__title'>{title}</h3>
                <div className='trip-info__content'>
                    <span data-test-id='trip-card-duration' className='trip-info__duration'>
                        <strong>{duration}</strong> ' days '
                    </span>
                    <span data-test-id='trip-card-level' className='trip-info__level'>
                    {level} 
                    </span>
                </div>
            </div>
            <div className='trip-price'>
                <span>Price</span>
                <strong data-test-id='trip-card-price-value' className='trip-price__value'>{price}</strong>
            </div>
        </div>
        <a data-test-id='trip-card-link' className='button' onClick={handleNavigate}>
            Discover a trip
        </a>
    </li>
  );
};

export default Trip;