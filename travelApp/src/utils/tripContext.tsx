// Updated TripContext.tsx to include bookings list
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Trip } from '../types/trip';
import { Booking } from '../types/booking'; // Assuming the Booking type is defined similarly to Trip
import { returnTripList } from '../utils/utils';
import { returnBookingsList } from '../utils/utils'; // Assuming returnBookingsList is defined in utils

interface TripContextType {
  trips: Trip[];
  bookings: Booking[];
  fetchTrips: () => void;
  fetchBookings: () => void;
}

const TripContext = createContext<TripContextType | undefined>(undefined);

export const TripProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);

  const fetchTrips = async () => {
    const fetchedTrips = await returnTripList();
    setTrips(fetchedTrips);
  };

  const fetchBookings = async () => {
    const fetchedBookings = await returnBookingsList();
    setBookings(fetchedBookings);
  };

  useEffect(() => {
    fetchTrips();
    fetchBookings();
  }, []);

  return (
    <TripContext.Provider value={{ trips, bookings, fetchTrips, fetchBookings }}>
      {children}
    </TripContext.Provider>
  );
};

export const useTrips = () => {
  const context = useContext(TripContext);

  if (context === undefined) {
    throw new Error('useTrips must be used within a TripProvider');
  }
  return context;
};