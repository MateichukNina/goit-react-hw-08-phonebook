 import { useState } from "react";
 import React from 'react';
 import { useDispatch } from "react-redux";
 import {register} from 'Redux/Auth/authOperations'

 export  function FormRegistration() {
   const dispatch = useDispatch;
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleSubmit = evt =>{
     evt.preventDefault();
     dispatch(register({name, email, password}))
    setName('');
     setEmail('');
     setPassword('');
   }

   const handleNameChange = evt => {
     setName(evt.target.value);
   }

   const handleEmailChange = evt => {
     setEmail(evt.target.value);
   }

  const handlePasswordChange = evt => {
     setPassword(evt.target.value);
   }

  return (
     <div>
       <h2>Registration</h2>
       <form onSubmit={handleSubmit}>
         <label>
           <input type="text" name="name" value={name} onChange={handleNameChange}/>
         </label>
        <label>
           <input type="email" name="email" value={email} onChange={handleEmailChange}/>
         </label>
         <label>
           <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
         </label>
         <button type="submit">Submit</button>
       </form>
     </div>
  )
 }