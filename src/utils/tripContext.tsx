import React, { createContext, useContext, useState, useEffect } from 'react';
import { Trip } from '../types/trip';
import { Booking } from '../types/booking';
import { returnTripList, returnBookingsList } from '../utils/utils';

interface TripContextType {
  trips: Trip[];
  bookings: Booking[];
  isLoading: boolean; // Add isLoading to the context type
  fetchTrips: () => void;
  fetchBookings: () => void;
}

const TripContext = createContext<TripContextType | undefined>(undefined);

export const TripProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state

  const fetchTrips = async () => {
    const fetchedTrips = await returnTripList();
    setTrips(fetchedTrips);
    checkLoading();
  };

  const fetchBookings = async () => {
    const fetchedBookings = await returnBookingsList();
    setBookings(fetchedBookings);
    checkLoading();
  };

  // Check if both trips and bookings have been fetched
  const checkLoading = () => {
    if (trips.length > 0 && bookings.length > 0) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTrips();
    fetchBookings();
  }, []);
  
  useEffect(() => {
    // This effect runs whenever there's a change in trips or bookings
    setIsLoading(trips.length === 0 );
  }, [trips, bookings]); // Add trips and bookings as dependencies

  return (
    <TripContext.Provider value={{ trips, bookings, isLoading, fetchTrips, fetchBookings }}>
      {isLoading ? <div data-test-id="loader">Loading...</div> : children} 
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