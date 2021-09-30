import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import RoutingPath from '../routes/RoutingPath';
import Logo from '../shared/img/Logo.svg';
import { UserContext } from '../shared/global/provider/UserProvider';
import CurrencyConver from '../components/currency/CurrencyConver';


export const HomeView = () => {
  
  const history = useHistory();
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
  const location= useLocation();
  


  return (
    <main className="container">
      <h2>{location?.satate?.param}</h2>
      <div> <img className="logo-singin" src={Logo} alt="Pay me logo" /> </div>
      <div className="home-heading">
        <span> Welcome to <span style={{ color: "blue", fontFamily: "fantasy" }}>Pay me!</span></span>
      </div>
      <div className="home-main">
        <p>This is a simple application to help you manage your private loans. This made as a school assignment.The original idea of "Pay me" inspired by our teamwork in the scrum course.</p>
        <p>Click on the log in button to start</p>
      </div>
      <button className="btn btn-block" onClick={() => (authenticatedUser) ? history.push(RoutingPath.loansView,{param:'Welcome to loans'}) : history.push(RoutingPath.signInView,{param:'Welcome to Login page'})}>LOG IN</button>
      <div className="convert-box">
        <CurrencyConver />
      </div>
    </main>
  );
}

