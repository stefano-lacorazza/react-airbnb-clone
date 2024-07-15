import React, { useState } from 'react';
import Select from '../common/Select';
import { Trip } from '../../types/trip';

type SearchBarProps = {
  trips: Trip[];
  setFilteredTrips: (filteredTrips: Trip[]) => void; 
};

const SearchBar: React.FC<SearchBarProps> = ({ trips, setFilteredTrips }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  const filterTrips = () => {
    let filtered = trips;

    if (searchTerm) {
      filtered = filtered.filter(trip =>
        trip.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedDuration) {
      filtered = filtered.filter(trip => {
        const durationRange = selectedDuration.split('_x_');
        const tripDuration = parseInt(String(trip.duration), 10);
        if (durationRange.length === 2) {
          return tripDuration >= parseInt(durationRange[0], 10) && tripDuration <= parseInt(durationRange[1], 10);
        }
        return tripDuration >= parseInt(durationRange[0], 10);
      });
    }

    if (selectedLevel) {
      filtered = filtered.filter(trip => trip.level === selectedLevel);
    }

    setFilteredTrips(filtered);
  };

  // Call filterTrips whenever any of the filters change
  React.useEffect(() => {
    filterTrips();
  }, [searchTerm, selectedDuration, selectedLevel, trips]);

  
  return (
    <>
      <h1 className='visually-hidden'>Travel App</h1>
      <section className='trips-filter'>
        <h2 className='visually-hidden'>Trips filter</h2>
        <form className='trips-filter__form' autoComplete='off' onSubmit={(e) => {
          e.preventDefault();
          filterTrips();
        }}>
          <label className='trips-filter__search input'>
            <span className='visually-hidden'>Search by name</span>
            <input
              data-test-id='filter-search'
              type='search'
              name='search'
              placeholder='Search by title'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </label>
          <Select
            options={[{label: 'duration', value: ''},{label: '5 days', value: '0_x_5'},{label: '< 10 days', value: '5_x_10'},{label: '≥ 10 days', value: '10'}]}
            datatestid='filter-duration'
            text='Search by duration'
            name='duration'
            OnChange={e => setSelectedDuration(e.target.value)} // Corrected to lowercase 'onChange'
          />
          <Select
            options={[{label: 'level', value: ''},{label: 'easy', value: 'easy'},{label: 'moderate', value: 'moderate'},{label: 'difficult', value: 'difficult'}]}
            datatestid='filter-level'
            text='Search by level'
            name='level'
            OnChange={e => setSelectedLevel(e.target.value)} // Corrected to lowercase 'onChange'
          />
        </form>
      </section>
    </>
  );
};

export default SearchBar;