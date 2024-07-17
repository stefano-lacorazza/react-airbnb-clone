import React, { useState, useEffect } from 'react';
import { cancelBooking } from '../../utils/utils';
import { useTrips } from '../../utils/tripContext';

type TripBookingProps = {
  id: string;
    title: string;
    guests: number;
    date: string;
    price: number;

};

const TripBooking: React.FC<TripBookingProps> = ({id, title, guests, date, price }) => {

  const [bookingCancelled, setBookingCancelled] = useState(false);
  const { fetchBookings } = useTrips();

  useEffect(() => {
    if (bookingCancelled) {
        fetchBookings();
        setBookingCancelled(false);
    }
}, [bookingCancelled, fetchBookings]);


const handleClick = () => {
  cancelBooking(id)
    .then(() => {
      setBookingCancelled(true); // Set bookingCancelled to true to refetch bookings
      console.log('Booking cancelled successfully');
    })
    .catch((error) => {
      console.error('Failed to cancel booking:', error);
    });
};

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