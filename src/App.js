import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';



function App() {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rows, setRows] = useState([]);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Add New</h1>
      </header>
      <Form 
        setUsername = { setUsername } username = { username }
        setEmail = { setEmail } email = { email }
        setPhone = { setPhone } phone = { phone }
        setPassword = { setPassword } password = { password }
        setRows = { setRows } rows = { rows }
      />
      <br></br>
      <br></br>
      <List />
    </div>
  );
}

export default App;
