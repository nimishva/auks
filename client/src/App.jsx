
import './app.css';
import './signup.css';
import { useState } from 'react';

import { useNavigate, Navigate, redirect } from 'react-router-dom';
// import { notify } from '../utils';

// import { useEffect } from 'react';

function App() {       
       
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [whatsAppNumber, setWhatsAppNumber] = useState('');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signingup, setSigningup] = useState(false);

  //   console.log(auth);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

  let error = false;

  setSigningup(true);

  if (
    name === '' ||
    email === '' ||
    password === '' ||
    confirmPassword === ''
  ) {
    // notify('Please fill all the fields', 'error');
    error = true;
  } else if (password !== confirmPassword) {
    // notify('Password Doesnt match', 'error');
    error = true;
  }

  if (error) {
    return setSigningup(false);
  }

  // const response = await auth.signup(name, email, password, confirmPassword);

    if (response.success) {
      navigate('/signup');
      setSigningup(false);
      // return notify('Successfully Registered', 'success');
    } else {
      // notify(`Error!!${response.message}`, 'error');
    }
    setSigningup(false);
  };

  // if (auth.user) {
  //   return <Navigate to='/' replace />




  return (


    <form className="signupForm" onSubmit={handleSubmit}>
      <span className="signupSignupHeader">Signup</span>

      <div className="field">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          autoComplete="on"
        />
      </div>

      <div className="field">
        <input
          type="email"
          placeholder="Email"
          value={email}
          autoComplete="on"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div className="field">
        <input
         
          placeholder="phone number"
          value={phoneNumber}
          autoComplete="on"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
      </div>



      <div className="field">
        <input
         
          placeholder="whatsapp number"
          value={whatsAppNumber}
          autoComplete="on"
          onChange={(e) => {
            setWhatsAppNumber(e.target.value);
          }}
        />
      </div>

      <div className="field">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>

      <div className="field">
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
      </div>

      <div className="field">
        <button disabled={signingup}>
          {signingup ? 'Signingup...' : 'Signin'}
        </button>
      </div>
    </form>


  )


















}
export default App
