import React from 'react';
import { Alert, Container } from 'react-bootstrap';
import Card from '../UI/card'
import { CurrentUserContext } from "../context/currentuser"

const Deposit = () => {

    const current = React.useContext(CurrentUserContext );
    const [withdraw, setWithdraw]         = React.useState(0);
    const [status, setStatus]     = React.useState('');
    const [balance, setBalance]     = React.useState(current.user.balance);
    const [iswithdraw, setIsWithdraw] = React.useState(false);

    function validate(field, label){
        if (!field) {
          setStatus("Enter " + label);
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        if( balance < field ) {
            setStatus(" cannot withdraw $" + field + "." );
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        console.log(parseInt(field));
        if(!parseInt(field)){
            setStatus("Please enter number");
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        return true;
    }


    const handleWithdraw = () => {
        console.log(withdraw);
        if (!validate(withdraw,     'withdraw')){     return;
        }else{
            setBalance(balance - parseInt(withdraw));
        current.user.balance -= parseInt(withdraw);
        setIsWithdraw(true);
        setTimeout(() => setIsWithdraw(false),3000);
        }
        
        
     
    }

    return(
        <>
      <Card
        bgcolor=""
        txtcolor="black"
        header="Withdraw"
        
        body={current.loggedIn ? (  
                <Container>
                <h1>Balance</h1><br/>
                <h1 style={{textAlign: "right"}} className="mb-3">$ {balance}</h1>
                <input type="input" style= {{textAlign: "right"}} className="form-control" id="deposit" placeholder="Enter money" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)} /><br/>
                <div className="text-right">
                <button type="submit" className="btn btn-light" onClick={handleWithdraw}>Withdraw</button>
                
                </div>
                </Container>
              ):(
                <Container>
                
                <h1 className="text-center py-5"><a href="#/createaccount/">Create Account</a> or <a  href="#/login/">Login</a></h1>
                </Container>
              )}
      />

{iswithdraw ? (
    <Container style={{margin: "0 auto", width: "30%"}}>
        <Alert variant="success" >
      <Alert.Heading>successfully withdraw </Alert.Heading>
      <p>withdraw {withdraw}</p>
    </Alert>
    </Container>
    
  ) : (
    <></>
  )}


{status ? (
    <Container style={{margin: "0 auto", width: "30%"}}>
        <Alert variant="danger">
      <Alert.Heading>Error </Alert.Heading>
      <p>{status}</p>
    </Alert>
    </Container>
    
  ) : (
    <></>
  )}

      </>





    );
}

export default Deposit;