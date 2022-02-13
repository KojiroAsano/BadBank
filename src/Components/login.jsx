import React from "react";
import { Alert , Container } from "react-bootstrap";
import { UserContext } from "../context/context";
import Card from "../UI/card";
import { CurrentUserContext } from "../context/currentuser";

const Login = () => {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);
  const current = React.useContext(CurrentUserContext);

  function validate(field, label) {
    if (!field) {
      setStatus(label + " cannot be blank ");
      setTimeout(() => setStatus(""), 5000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, "name")) return;
    if (!validate(password, "password")) return;
    //ctx.users.push({name,email,password,balance:100});
    for (let user of ctx.users) {
      console.log(user);
      if (user.name == name && user.password == password) {
        setShow(false);
        console.log("login status", current);
        current.user = user;
        current.loggedIn = true;
        console.log("login status", current);
        return;
      }
    }
    setStatus("Cannot Find User  " + name + ". Try another  account");
    setTimeout(() => setStatus(""), 5000);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <>
      <Card
        bgcolor=""
        txtcolor="black"
        header="Login"
        body={
          show ? (
            <Container>
              <div className="my-3">
              Name
              <br />
              <input
                type="input"
                className="form-control"
                id="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
              </div>
              <br />
              <div className="my-3">
              Password
              <br />
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
              <br />
              </div>
              <button
                type="submit"
                className="btn btn-light"
                onClick={handleCreate}
              >
                Login
              </button>
            </Container>
          ) : (
            <Container>
              <h5>Successfully logged ini</h5>
              <h1> Welcom Back {name}</h1>
            </Container>
          )
        }
      />
      <></>
      {status ? (
    <Container style={{margin: "0 auto", width: "30%"}}>
        <Alert variant="danger" >
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

export default Login;
