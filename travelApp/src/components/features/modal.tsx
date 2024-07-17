import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addBooking, returnTripList } from '../../utils/utils';



type ModalProps = {
    id: string;
    title: string;
    duration: number;
    level: string;
    price: number;
    OnClose: () => void;


};

export const Modal: React.FC<ModalProps> = ({id, title, duration, level, price, OnClose}) => {
  
    const [date, setDate] = useState('');
    const [guests, setGuests] = useState(1);

    const navigate = useNavigate();


    
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleGuestsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuests(Number(e.target.value));
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

        // Validation
        if (!title || !guests || !date) {
            alert("Please fill in all fields.");
            return;
        }
    
        if (isNaN(guests) || guests <= 0) {
            alert("Please enter a valid number of guests.");
            return;
        }
    


        const inputDate = new Date(date);
        const today = new Date();

        today.setHours(0, 0, 0, 0);

        if (inputDate <= today) {
            alert("Please enter a date that is after today.");
            return;
        }



    addBooking(id, guests, date, );
    navigate('/bookings');

  };





    return (
    <div className="modal">
            <div data-test-id="book-trip-popup" className="book-trip-popup" >
            <button
                data-test-id="book-trip-popup-close"
                className="book-trip-popup__close"
                onClick={OnClose}
                
                
            >
                ×
            </button>
            <form className="book-trip-popup__form" onSubmit={handleSubmit}>
                <div className="trip-info">
                <h3 data-test-id="book-trip-popup-title" className="trip-info__title">
                    {title}
                </h3>
                <div className="trip-info__content">
                    <span
                    data-test-id="book-trip-popup-duration"
                    className="trip-info__duration"
                    >
                    <strong>{duration}</strong> days
                    </span>
                    <span
                    data-test-id="book-trip-popup-level"
                    className="trip-info__level"
                    >
                    {level}
                    </span>
                </div>
                </div>
                <label className="input">
                <span className="input__heading">Date</span>
                <input
                    data-test-id="book-trip-popup-date"
                    name="date"
                    type="date"
                    required
                    value={date}
                    onChange={handleDateChange}
                />
                </label>
                <label className="input">
                <span className="input__heading">Number of guests</span>
                <input
                    data-test-id="book-trip-popup-guests"
                    name="guests"
                    type="number"
                    min="1"
                    max="10"
                    value={guests}
                    onChange={handleGuestsChange}
                    required
                />
                </label>
                <span className="book-trip-popup__total">
                Total:
                <output
                    data-test-id="book-trip-popup-total-value"
                    className="book-trip-popup__total-value"
                >
                    ${price*guests}
                </output>
                </span>
                <button
                data-test-id="book-trip-popup-submit"
                className="button"
                type="submit"
                >
                Book a trip
                </button>
            </form>
            </div>
    </div>


  );
};

