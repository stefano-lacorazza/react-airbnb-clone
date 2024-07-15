import React, { useState } from 'react';


type TripBookingProps = {
    title: string;
    guests: number;
    date: string;
    price: number;

};

const TripBooking: React.FC<TripBookingProps> = ({title, guests, date, price }) => {
  const [isVisible, setIsVisible] = useState(true);
  const handleClick = () => {
    setIsVisible(false);
  };
  if (!isVisible) {
    return null; // Or render something else when the booking is not visible
  }
  return (
    <li data-test-id='booking' className='booking'>
        <h3 data-test-id='booking-title' className='booking__title'>{title}</h3>
        <span data-test-id='booking-guests' className='booking__guests'>{guests} guests</span>
        <span data-test-id='booking-date' className='booking__date'>{date}</span>
        <span data-test-id='booking-total' className='booking-total'>${price}</span>
        <button data-test-id='booking-cancel' className='booking__cancel' title='Cancel booking' onClick={handleClick}>
            <span className='visually-hidden'>Cancel booking</span>
            x
        </button>
    </li>
  );
};

export default TripBooking;