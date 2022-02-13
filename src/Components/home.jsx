import React from 'react';
import { Alert, Container } from 'react-bootstrap';
import { UserContext } from '../context/context';
import Card from '../UI/card'
import Bankimg from '../image/bank.png'

import { CurrentUserContext } from '../context/currentuser';

const Home = () => {
    const ctx = React.useContext(UserContext);
    const user = React.useContext(CurrentUserContext);
    console.log(ctx);
    console.log('user', user);

    return (
        <Card
          bgcolor=""
          txtcolor="black"
          header="BadBank Landing Page"
         
          body={(
          <Container >
            <h1 className="my-2 text-center">Welcomoe to the bank</h1>
            <img src={Bankimg} style={{marginLeft: "auto", marginRight: "auto"}} className="img-fluid" alt="Responsive image"/>
          </Container>)}
        />    
      ); 
}

export default Home;