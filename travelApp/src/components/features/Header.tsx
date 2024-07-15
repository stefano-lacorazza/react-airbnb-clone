import React from 'react';
import briefcaseImage from '../../assets/images/briefcase.svg';
import userImage from '../../assets/images/user.svg';

type HeaderProps = {
  logged: boolean;
};

const Header: React.FC<HeaderProps> = ({logged}) => {
  let navButtons: JSX.Element | null = null;

  if (logged){
    navButtons = <>
      <nav data-test-id='header-nav' className='header__nav'>
        <ul className='nav-header__list'>
          <li className='nav-header__item' title='Bookings'>
            <a data-test-id='header-bookings-link' href='/bookings' className='nav-header__inner'>
              <span className='visually-hidden'>Bookings</span>
              <img src={briefcaseImage} alt='bookings'></img>
            </a>
          </li>
          <li className='nav-header__item' title='Profile'>
            <div data-test-id='header-profile-nav' className='nav-header__inner profile-nav'>
              <span className='visually-hidden'>Profile</span>
              <img src={userImage} alt='profile'></img>
              <ul data-test-id='header-profile-nav-list' className='profile-nav__list'>
                <li data-test-id='header-profile-nav-username' className='profile-nav__item'>John Doe</li>
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
        <a data-test-id="header-logo" href="/" className="header__logo">
          Travel App
        </a>
        {navButtons}
        </div>
    </header>
  );
};

export default Header;