// TripContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Trip } from '../types/trip';
import { returnTripList } from '../utils/utils';

interface TripContextType {
  trips: Trip[];
  fetchTrips: () => void;
}

const TripContext = createContext<TripContextType | undefined>(undefined);


export const TripProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [trips, setTrips] = useState<Trip[]>([]);

  const fetchTrips = async () => {

      const fetchedTrips = await returnTripList();
      console.log('Fetched trips:', fetchedTrips);
      setTrips(fetchedTrips);

  };

  useEffect(() => {
    fetchTrips();
  }, []); 

  return (
    <TripContext.Provider value={{ trips, fetchTrips }}>
      {children}
    </TripContext.Provider>
  );
};

export const useTrips = () => {
  const context = useContext(TripContext);
  console.log('Context:', context);
  if (context === undefined) {
    throw new Error('useTrips must be used within a TripProvider');
  }
  return context;
};