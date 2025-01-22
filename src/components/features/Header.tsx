import React from 'react';
import briefcaseImage from '../../assets/images/briefcase.svg';
import userImage from '../../assets/images/user.svg';
import { Link } from 'react-router-dom'; 
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { useNavigate } from 'react-router-dom';

type HeaderProps = {
  logged: boolean;

};


const Header: React.FC<HeaderProps> = ({logged}) => {
  let navButtons: JSX.Element | null = null;
  const name=  useSelector((state: RootState) => state.auth.currentUser?.fullName);
  console.log('Name:', name);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/bookings`);
  };

  if (logged){
    navButtons = <>
      <nav data-test-id='header-nav' className='header__nav'>
        <ul className='nav-header__list'>
          <li className='nav-header__item' title='Bookings'>
            <a data-test-id='header-bookings-link' onClick={handleNavigate} className='nav-header__inner'>
              <span className='visually-hidden'>Bookings</span>
              <img src={briefcaseImage} alt='bookings'></img>
            </a>
          </li>
          <li className='nav-header__item' title='Profile'>
            <div data-test-id='header-profile-nav' className='nav-header__inner profile-nav'>
              <span className='visually-hidden'>Profile</span>
              <img src={userImage} alt='profile'></img>
              <ul data-test-id='header-profile-nav-list' className='profile-nav__list'>
                <li data-test-id='header-profile-nav-username' className='profile-nav__item'>{name}</li>
                <li className='profile-nav__item'>
                  <button data-test-id='header-profile-nav-sign-out' className='profile-nav__sign-out button' onClick={() => { window.location.href = '/sign-in'; }}>
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          </li>
        </ul>

      </nav>
    </>


  }




  return (
    <header className='header'>
        <div className='header__inner'>
        <Link data-test-id="header-logo" to="/" className="header__logo">
        Travel App
        </Link>
        {navButtons}
        </div>
    </header>
  );
};

export default Header;