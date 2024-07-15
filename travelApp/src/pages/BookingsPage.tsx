import React from 'react';
import Header from '../components/features/Header';
import Footer from '../components/features/Footer';
import TripBooking from '../components/features/TripBooking';
import { returnTripList } from '../utils/utils';
import { returnBookingsList } from '../utils/utils';
import {Trip} from '../types/trip';

const BookingsPage: React.FC = () => {
  const bookings = returnBookingsList();
  const bookingsVisuals: JSX.Element[] = bookings.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).map((booking) => {
    const trip:Trip = returnTripList().find((trip) => trip.id === booking.tripId)!;
    return (
      <TripBooking
        
        title={trip.title}
        guests={booking.guests}
        date={booking.date.substring(0, 10)}
        price={trip.price }
      />
    );
  })


  return (
  <>
    <Header logged={true} ></Header>
    <main className='bookings-page'>
      <h1 className='visually-hidden'>Travel App</h1>
      <ul className='bookings__list'>
      {bookingsVisuals}

      </ul>

    </main>



    <Footer centerText='By Stefano Lacorazza'></Footer>

  </>
  );
};

export default BookingsPage;