import { Trip } from '../types/trip';
import { Booking } from '../types/booking';
import store from '../app/store';
import bookingData from '../assets/data/bookings.json';

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
  console.log('response trips', response);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const trips: Trip[] = await response.json();
  return trips;
};

const returnBookingsList = async (): Promise<Booking[]> => {
  const state = store.getState();
  const token = state.auth.token;
  console.log('token', token);
  const response = await fetch('https://travel-app-api.up.railway.app/api/v1/bookings', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  });
  console.log('response bookings', response);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const bookings: Booking[] = await response.json();
  console.log('bookings', bookings);
  return bookings;
};


const addBooking = async (tripId:string, guests:number, date:string) => {

  const bookingDetails = {
    tripId: tripId,
    guests: guests,
    date: date
  };
  console.log('bookingDetails', bookingDetails);
  const state = store.getState();
  const token = state.auth.token;
  console.log('token', token);
  try {
    const response = await fetch('https://travel-app-api.up.railway.app/api/v1/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(bookingDetails),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    console.log('Booking added successfully:', data);
  } catch (error) {
    console.error('Error adding booking:', error);
  }
}

const cancelBooking = async (bookingId: string) => {
  const state = store.getState();
  const token = state.auth.token;
  console.log('Cancelling booking with ID:', bookingId);
  try {
    const response = await fetch(`https://travel-app-api.up.railway.app/api/v1/bookings/${bookingId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log('Booking cancelled successfully');
  } catch (error) {
    console.error('Error cancelling booking:', error);
  }
}

export { returnTripList, returnBookingsList, addBooking, cancelBooking}