import React from 'react';
import Header from '../components/features/Header';
import Footer from '../components/features/Footer';
import TripBooking from '../components/features/TripBooking';

import { Trip } from '../types/trip';
import { useTrips } from '../utils/tripContext';

const BookingsPage: React.FC = () => {
  
  
  const { trips, bookings } = useTrips();
  console.log('Trips booking:', trips);
  console.log('Bookings:', bookings);
  const bookingsVisuals: JSX.Element[] = bookings
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .map((booking) => {
      
      const trip: Trip = trips.find((trip) => trip.id === booking.tripId)!;

      return (
        <TripBooking
          key={booking.tripId} 
          id={booking.id}
          title={trip.title}
          guests={booking.guests}
          date={booking.date.substring(0, 10)}
          price={trip.price}
        />
      );
    });

  return (
    <>
      <Header logged={true}></Header>
      <main className='bookings-page'>
        <h1 className='visually-hidden'>Travel App</h1>
        <ul className='bookings__list'>{bookingsVisuals}</ul>
      </main>
      <Footer centerText='By Stefano Lacorazza'></Footer>
    </>
  );
};

export default BookingsPage;