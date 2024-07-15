import React, { useState } from 'react';
import Button from '../common/Button';
import {Modal} from './modal'

type TripDisplayProps = {
    image: string;
    title: string;
    duration: number;
    level: string;
    description: string;
    price: number;

};

const TripDisplay: React.FC<TripDisplayProps> = ({image, title, duration, level,description,price }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
      };
  
    return (
   <div className='trip'>
        <img data-test-id='trip-details-image' src={image} className='trip__img' alt='trip photo'></img>
        <div className='trip__content'>
            <div className='trip-info'>
                <h3 data-test-id='trip-details-title' className='trip-info__title'>{title}</h3>
                <div className='trip-info__content'>
                    <span data-test-id='trip-details-duration' className='trip-info__duration'>
                        <strong>{duration}</strong> days
                    </span>
                    <span data-test-id='trip-details-level' className='trip-info__level'>
                        {level}
                    </span>
                </div>
            </div>
            <div data-test-id='trip-details-description'className='trip__description'>
                {description}
            </div>
            <div className='trip-price'>
                <span>
                    Price
                </span>
                <strong data-test-id='trip-details-price-value' className='trip-price__value'>${price}</strong>
            </div>
            <Button onClick={toggleModal} className='trip__button button' datatestid='trip-details-button' text='
            Book a trip
          '></Button>
        </div>
        {isModalOpen && <Modal title={title} duration={duration} level={level} price ={price} OnClose={toggleModal}/>}
   </div>


  );
};

export default TripDisplay;