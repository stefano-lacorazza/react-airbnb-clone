import React from 'react';
import Header from '../components/features/Header';
import Footer from '../components/features/Footer';
import TripDisplay from '../components/features/TripDisplay';
import { Trip } from '../types/trip';
import { returnTripList } from '../utils/utils';
import { useParams } from 'react-router-dom';
// Import other components and assets here



const TripPage: React.FC = () => {
  const { tripId } = useParams();
  let trips:Trip[] = []
  const trip:  Trip | undefined = trips.find((trip) => trip.id === tripId);
  if (!trip) {

    return (
      <div>
        <Header logged={true} ></Header>
  
        <main className='trip-page'>
        <h1 className='visually-hidden'>Travel App</h1>
  
        <h1>Trip not found</h1>
  
        </main>
        
  
  
        <Footer centerText='By Stefano Lacorazza'></Footer>
      
  
      </div>
    );
  }
  else{

   

  return (
    <div>
      <Header logged={true} ></Header>

      <main className='trip-page'>
      <h1 className='visually-hidden'>Travel App</h1>

      <TripDisplay image={trip.image} title={trip.title} price={trip.price} duration={trip.duration} level={trip.level} description={trip.description}></TripDisplay>

      </main>
      


      <Footer centerText='By Stefano Lacorazza'></Footer>
    

    </div>
  );
}
};

export default TripPage;