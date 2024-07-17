import React, { useState } from 'react';
import Header from '../components/features/Header';
import Footer from '../components/features/Footer';
import SearchBar from '../components/features/SearchBar';
import { Trip as classTrip } from '../types/trip';
import { returnTripList } from '../utils/utils';
import { TripLayout } from '../components/layout/TripLayout';
import { TripProvider } from '../utils/tripContext';
import { useTrips } from '../utils/tripContext';
// Import other components and assets here

const MainPage: React.FC = () => {
  const { trips } = useTrips();
  const [filteredTrips, setFilteredTrips] = useState<classTrip[]>(trips);
  console.log('Trips:', trips);
  return (
    
    <div>
      <Header logged={true}></Header>
      <SearchBar trips={trips} setFilteredTrips={setFilteredTrips}></SearchBar>
      <section className='trips'>
        <h2 className='visually-hidden'>Trips List</h2>
        <ul className='trip-list'>
          <TripLayout trips={filteredTrips}></TripLayout>
        </ul>
      </section>
      <Footer centerText='By Stefano Lacorazza'></Footer>
    </div>
    
  );
};

export default MainPage;