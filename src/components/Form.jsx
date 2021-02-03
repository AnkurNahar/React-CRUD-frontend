import React, { useState } from 'react';
import './Form.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Alert from '@material-ui/lab/Alert';
import API from '../api';

const Form = ( props ) => {

  const [wrongInputError, setWrongInputError] = useState(null);
  const [submissionSuccess, setSubmissionSuccess] = useState(null);

  const usernameHandler = (e) => {
    props.setUsername(e.target.value);
  }; 

  const emailHandler = (e) => {
    props.setEmail(e.target.value);
  }; 

  const phoneHandler = (e) => {
    props.setPhone(e.target.value);
  }; 

  const passwordHandler = (e) => {
    props.setPassword(e.target.value);
  }; 

  const submitHandler = async(e) => {
    //e.prventDefault();  //to stop page from reloading on submit
    //hit create api
    if (props.username === '' || props.email === '' ||  props.phone === '' || props.password === '') {
      
      setWrongInputError(true);

    } else {

      const response = await API.post( 'create', { userName: props.username, phone: props.phone, email: props.email, password: props.password });

      if(response && response.status === 200) {

        setSubmissionSuccess(true);
        
        //empty out form
        props.setUsername('');
        props.setPhone('');
        props.setEmail('');
        props.setPassword('');
        setWrongInputError(null);
        setSubmissionSuccess(null);

        //hit get api
        const resp = await API.get('submission-list');
        if(resp && resp.status === 200) {
          console.log(resp.data.userlist);
          //props.setRows(resp.data.userlist);
        }
         

      } else {

        setSubmissionSuccess(false);

      }    

    }
    
  };

  return (
    <div>
    <Container>
   <Card className='Card-content'>
      <CardContent>
      <form noValidate autoComplete="off">
          {wrongInputError && (
            <Alert severity="error">Please enter correct values for all the fields</Alert>
          )}
          {submissionSuccess && (
            <Alert severity="success">your warranty has been submitted correctly</Alert>
          )}
          {!submissionSuccess && (
            <Alert severity="error">Something went wrong, try again</Alert>
          )}
         <TextField id="standard-basic" fullWidth label="Username" onChange={usernameHandler} />
         <TextField id="standard-basic" fullWidth label="Email" type="email" onChange={emailHandler} />
         <TextField id="standard-basic" fullWidth label="Phone" onChange={phoneHandler} />
         <TextField id="standard-basic" fullWidth label="Password" type="password" onChange={passwordHandler} />
         <p></p>
         <Button variant="contained" onClick={submitHandler}>Submit</Button>
          
        
      </form>
      </CardContent>
    </Card>



  </Container>
  </div>
  );
}

export default Form;