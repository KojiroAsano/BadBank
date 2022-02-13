import React from "react";
import { Alert, Container } from "react-bootstrap";
import Card from "../UI/card";
import { CurrentUserContext } from "../context/currentuser";


const Deposit = () => {
  const current = React.useContext(CurrentUserContext);
  const [deposit, setDeposit] = React.useState(0);
  const [status, setStatus] = React.useState("");
  const [balance, setBalance] = React.useState(current.user.balance);
  const [isdepoist, setIsDeposit] = React.useState(false);

  function validate(field, label) {
    if (!field) {
      setStatus("Enter " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (field <= 0) {
      setStatus(label + " cannot be negative");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    console.log(parseInt(field));
    if (!parseInt(field)) {
      setStatus("Please enter number");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  const handleDeposit = () => {
    console.log(deposit);
    if (!validate(deposit, "deposit")) {
      return;
    } else {
      setBalance(balance + parseInt(deposit));
      current.user.balance += parseInt(deposit);
      setIsDeposit(true);
      setTimeout(() => setIsDeposit(false), 3000);
    }
  };

  return (
    <>
      <Card
        bgcolor=""
        txtcolor="black"
        header="Deposit"
        body={
          current.loggedIn ? (
            <Container>
              <h1>Balance</h1>
              <br />
              <h1 style={{ textAlign: "right" }} className="mb-3">
                $ {balance}
              </h1>
              <input
                type="input"
                style={{ textAlign: "right" }}
                className="form-control"
                id="deposit"
                placeholder="Enter money"
                value={deposit}
                onChange={(e) => setDeposit(e.currentTarget.value)}
              />
              <br />

              <button
                type="submit"
                className="btn btn-light "
                onClick={handleDeposit}
              >
                Deposit
              </button>
            </Container>
          ) : (
            <Container>
              <h1 className="text-center py-5">
                <a href="#/createaccount/">Create Account</a> or{" "}
                <a href="#/login/">Login</a>
              </h1>
            </Container>
          )
        }
      />

      {isdepoist ? (
        <Container style={{margin: "0 auto", width: "30%"}}>
          <Alert variant="success" >
            <Alert.Heading>successfully deposit </Alert.Heading>
            <p>Deposit {deposit}</p>
          </Alert>
        </Container>
      ) : (
        <></>
      )}

      {status ? (
        <Container style={{ margin: "0 auto", width: "30%" }}>
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
};

export default Deposit;
