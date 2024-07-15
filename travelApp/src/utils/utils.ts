import { Trip } from '../types/trip';
import { Booking } from '../types/booking';
import tripData from '../assets/data/trips.json';
import bookingData from '../assets/data/bookings.json';

const bookings: Booking[] = bookingData;
const trips: Trip[] = tripData;

const returnTripList = (): Trip[] => {

    return trips;
  };


const returnBookingsList = (): Booking[]=> {

    return bookings;
  };

const addBooking = (booking: Booking) => {
    bookings.push(booking);
  }



export { returnTripList, returnBookingsList, addBooking}