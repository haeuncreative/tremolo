import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import ResetScroll from './context/ResetScroll';
import { useHistory } from 'react-router-dom';

import LoginFormPage from './components/SESSIONS/LoginFormPage';
import SignupFormPage from './components/SESSIONS/SignupFormPage';
import CartPage from './components/CART/CartPage';
import CheckoutPage from './components/CART/CartPage/CheckoutPage';

import ListingFormPage from './components/LISTINGS/ListingFormPage';
import CategoryListingGrid from './components/LISTINGS/ListingGrid/CategoryListingGrid';
import ListingGrid from './components/LISTINGS/ListingGrid';
import ListingIndex from './components/LISTINGS/ListingIndex'
import ListingTile from './components/LISTINGS/ListingTile/ListingTile';
import ListingComponent from './components/LISTINGS/ListingComponent';

import SplashScreen from './components/SPLASH/SplashScreen';
import SplashScreen2 from './components/SPLASH/SplashScreen2';

import ReviewFormTest from './components/REVIEWS/ModelReviewForm';
import StarRating from './components/REVIEWS/Stars/StarRating';

import Navigation from "./components/MAINNAV/Navigation";
import SecondaryNavigation from './components/MAINNAV/SecondaryNavigation';

import './App.css'
import CategoryListingIndex from './components/LISTINGS/CategoryListingIndex';
import GeneralListingIndex from './components/LISTINGS/GeneralListingIndex';
import FeedIndex from './components/LISTINGS/FeedIndex';
import Footer from './components/MAINNAV/Footer';
import WatchlistIndex from './components/LISTINGS/WatchlistIndex';

import UsersIndex from './components/USERS/UsersIndex';

function App() {
  const history = useHistory()


  return (
    <>
        <div id="nav-container">
            <Navigation 
              className="nav"
              id="main-nav"
              />
          <SecondaryNavigation 
            className="nav"
            id="sec-nav"
            />
        <ResetScroll history={history} />
        </div>
          <Switch>
            <Route exact path="/">
              <div id="home-feed-grid">
                
                <SplashScreen />                
                <h1 className="grid-title">Your Daily Picks</h1>
                <br />
                <ListingGrid />
                <h1 className="grid-title">Don't String Me Along! Guitars On Sale:</h1>
                <br />
                <CategoryListingGrid categoryId={1} />
                  <SplashScreen2 />                
                <h1 className="grid-title">You Know I'm All About that Bass:</h1>
                <br />
                <CategoryListingGrid categoryId={2} />
              </div>
            </Route>
            <Route path="/login" component={LoginFormPage} />
            <Route path="/signup" component={SignupFormPage} />

            <Route path="/cart" component={CartPage} />
            <Route path="/checkout" component={CheckoutPage} />

            <Route exact path="/listings" component={GeneralListingIndex} />
            <Route exact path="/my_feed" component={FeedIndex} />

            <Route exact path="/categories/:categoryId" component={CategoryListingIndex} />
            <Route exact path="/listings/:listingId" component={ListingComponent} />
            <Route path="/new_listing" component={ListingFormPage} />
            <Route path="/listings/:listing_id/edit/" component={ListingFormPage} />
            <Route path="/watchlist" component={WatchlistIndex} />
            <Route path="/users" component={UsersIndex} />

          </Switch>
        <Footer />
    </>
  );
}

export default App;