import React from 'react'
import ProfileButton from "./ProfileButton"
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import './Navigation.css'
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormPageModal';
import logo from '../../assets/TremoloLogo.png'
import logoColor from '../../assets/TremoloLogo_Color.png'
import SearchButton from './SearchButton';
import NotifBell from '../../assets/bell-line-icon.svg';
import FeedGrid from '../../assets/gallery-tiles-view-outline-icon.svg';
import CartIcon from '../../assets/shopping-cart-icon.svg';
import WatchList from '../../assets/view-icon.svg'

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <li>
        <ProfileButton user={sessionUser} />
      </li>
    );
  } else {
    sessionLinks = (
      <>
        <li>
          <LoginFormModal />
        </li>
        <li>
          <SignupFormModal />
          {/* <NavLink to="/signup">Sign Up</NavLink> */}
        </li>
      </>
    );
  }

  return (
    <ul>
      <li>
        <NavLink to="/">
          <img id="tremolo_logo" 
            src={logo}
            onMouseOver={e => (e.currentTarget.src = logoColor)} 
            onMouseOut={e => (e.currentTarget.src = logo)} 
            />
        </NavLink>
      </li>
      <li class="search-container">
        <input type="text" class="search-bar" placeholder="Look for used and new gear here..." />
        <SearchButton class="search-bar" id="search-button" />
      </li>
      <li>
        <button>
          Create a New Listing
        </button>
      </li>
      <li>
        <img class="nav-icon"
          id="watchlist" 
          src={WatchList}
          // onMouseOver={e => (e.currentTarget.src = logoColor)} 
          // onMouseOut={e => (e.currentTarget.src = logo)} 
          />
      </li>
      <li>
        <img class="nav-icon"
          id="feed-grid" 
          src={FeedGrid}
          // onMouseOver={e => (e.currentTarget.src = logoColor)} 
          // onMouseOut={e => (e.currentTarget.src = logo)} 
          />
      </li>
      <li>
        <img class="nav-icon"
          id="cart-icon" 
          src={CartIcon}
          // onMouseOver={e => (e.currentTarget.src = logoColor)} 
          // onMouseOut={e => (e.currentTarget.src = logo)} 
          />
      </li>
      <li>
        <img class="nav-icon"
          id="notif-bell" 
          src={NotifBell}
          // onMouseOver={e => (e.currentTarget.src = logoColor)} 
          // onMouseOut={e => (e.currentTarget.src = logo)} 
          />
      </li>
      <li>
        {/* <WatchList class="nav-icon" /> */}
      </li>
      {sessionLinks}
    </ul>
  );
}

export default Navigation;