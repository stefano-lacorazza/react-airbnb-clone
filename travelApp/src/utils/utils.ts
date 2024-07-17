import { Trip } from '../types/trip';
import { Booking } from '../types/booking';
import { useSelector } from 'react-redux'; // Import the useSelector function
import store from '../app/store';
import bookingData from '../assets/data/bookings.json';
import { RootState } from '../app/store';

const bookings: Booking[] = bookingData;

const returnTripList = async (): Promise<Trip[]> => {
  const state = store.getState();
  const token = state.auth.token;
  console.log('token', token);
  const response = await fetch('https://travel-app-api.up.railway.app/api/v1/trips', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  });
  console.log('response', response);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const trips: Trip[] = await response.json();
  return trips;
};

const returnBookingsList = (): Booking[]=> {

    return bookings;
  };

const addBooking = (booking: Booking) => {
    bookings.push(booking);
  }



export { returnTripList, returnBookingsList, addBooking}