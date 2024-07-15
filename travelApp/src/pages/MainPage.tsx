import React, { useState } from 'react';
import Header from '../components/features/Header';
import Footer from '../components/features/Footer';
import SearchBar from '../components/features/SearchBar';
import { Trip as classTrip } from '../types/trip';
import { returnTripList } from '../utils/utils';
import { TripLayout } from '../components/layout/TripLayout';
// Import other components and assets here

const MainPage: React.FC = () => {
  const [filteredTrips, setFilteredTrips] = useState<classTrip[]>(returnTripList());

  return (
    <div>
      <Header logged={true}></Header>
      <SearchBar trips={returnTripList()} setFilteredTrips={setFilteredTrips}></SearchBar>
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