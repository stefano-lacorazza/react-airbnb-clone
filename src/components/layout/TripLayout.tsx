import React from 'react';
import { Trip as TripClass } from '../../types/trip';
import Trip from '../features/Trip';

type TripLayoutProps = {
    trips: TripClass[];
};

export const TripLayout: React.FC<TripLayoutProps> = ({ trips }) => {
  return (
    <>
      {trips.map((trip) => (
        <Trip
            key={'id_'+trip.id}
            title={trip.title}
            level={trip.level}
            duration={trip.duration}
            price={trip.price}
            image={trip.image}
            id={trip.id}
        />
      ))}
    </>
  );
};
