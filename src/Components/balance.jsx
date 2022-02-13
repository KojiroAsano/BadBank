import React from 'react';
import { Alert } from 'react-bootstrap';
import { UserContext } from '../context/context';
import Card from '../UI/card'
const Balance = () => {


    const ctx = React.useContext(UserContext);

    return(
        <h1>home<br/>
            {JSON.stringify(ctx)}
        </h1>
    );

}

export default Balance;