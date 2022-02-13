import React from 'react';
import { Alert, Container } from 'react-bootstrap';
import { UserContext } from '../context/context';
import Card from '../UI/card'


const CreateAccount = () => {
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [name, setName]         = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);  
  
    function validate(field, label){
        if (!field) {
          setStatus('Error: ' + label + 'canot be blank');
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        return true;
    }
  
    function handleCreate(){
      console.log(name,email,password);
      if (!validate(name,     'name'))     return;
      if (!validate(email,    'email'))    return;
      if (!validate(password, 'password')) return;
      ctx.users.push({name,email,password,balance:0});
      setShow(false);
    }    
  
    function clearForm(){
      setName('');
      setEmail('');
      setPassword('');
      setShow(true);
    }
  
    return (
      <>
      <Card
        bgcolor=""
        txtcolor="black"
        header="Create Account"
        
        body={show ? (  
                <Container>
                <div className="my-3">
                Name<br/>
                <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
                
                </div>
                <div className="my-3">
                Email address<br/>
                <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                
                </div>
                <div className="my-3">

                Password<br/>
                <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                
                </div>
                <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
                </Container>
              ):(
                <Container>
                <h1 className="text-center">Success</h1>
                <button type="submit" className="btn btn-light mt-5" onClick={clearForm}>Add another account</button>
                </Container>
              )}
      />
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
    )
};

export default CreateAccount;