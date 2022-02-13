import React from 'react';
import "./navbar.css";
import { useLocation } from "react-router-dom";

const Navbar = () =>{
  const location = useLocation();
  console.log(location);
    return(
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light my-3">
        <a className="navbar-brand mx-5 " href="#">BadBank</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className={
                  location.pathname === "/createaccount/"
                    ? "nav-link active"
                    : "nav-link"
                } href="#/createaccount/" >Create Account</a>
            </li>
            <li className="nav-item">
              <a className={
                  location.pathname === "/login/"
                    ? "nav-link active"
                    : "nav-link"
                } href="#/login/">Login</a>
            </li>
            <li className="nav-item">
              <a className={
                  location.pathname === "/deposit/"
                    ? "nav-link active"
                    : "nav-link"
                } href="#/deposit/">Deposit</a>
            </li>
            <li className="nav-item">
              <a className={
                  location.pathname === "/withdraw/"
                    ? "nav-link active"
                    : "nav-link"
                } href="#/withdraw/">Withdraw</a>
            </li>
            <li className="nav-item">
              <a className={
                  location.pathname === "/alldata/"
                    ? "nav-link active"
                    : "nav-link"
                } href="#/alldata/">AllData</a>
            </li>          
          </ul>
        </div>
      </nav>
      </>
    );
  }

  export default Navbar;