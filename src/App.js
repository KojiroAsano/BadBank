import "./App.css";
import React from "react";
import { Route, HashRouter, Routes ,BrowserRouter } from "react-router-dom";
import CreateAccount from "./Components/createaccount";
import Home from "./Components/home";
import Login from "./Components/login";
import Deposit from "./Components/deposit";
import Withdraw from "./Components/withdraw";
import AllData from "./Components/alldata";
import Navbar from "./UI/navbar";
import { UserContext } from "./context/context";
import { CurrentUserContext } from "./context/currentuser"
import Footer from "./UI/footer";

function App() {
  return (
    <>
    <HashRouter>
        <UserContext.Provider
          value={{
            users: [
              {
                name: "abel",
                email: "abel@mit.edu",
                password: "secret",
                balance: 100,
              },
              {
                name: "Kojiro",
                email: "Kojiro@mail.co.jp",
                password: "12345",
                balance: 0,
              },
            ],
          }}
        >
        <CurrentUserContext.Provider
          value ={
            {loggedIn : false,
              user : {
              name: "",
              email: "",
              password: "",
              balance: 0,
            }}
            
          }>
          
          
          <Navbar />
          <Routes>
            <Route path="/" exact element= {<Home />} />
            <Route path="/createaccount/" element={<CreateAccount />} />
            <Route path="/login/" element={<Login />} />
            <Route path="/deposit/"  element={<Deposit/>} />
            <Route path="/withdraw/"  element={<Withdraw/>} />
            <Route path="/alldata/"  element={<AllData/>} />
          </Routes>
          </CurrentUserContext.Provider>
        </UserContext.Provider>
        
      </HashRouter>
    </>
  );
}

export default App;
/*

    
      

*/