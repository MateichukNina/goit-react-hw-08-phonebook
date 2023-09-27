import { useState } from "react";
import { useDispatch } from "react-redux";
import {register} from 'Redux/Auth/authOperations'


export default function RegisterView() {
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

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" name="name" value={name}/>
        </label>
        <label>
          <input type="text" name="email" value={email}/>
        </label>
        <label>
          <input type="text" name="password" value={password}/>
        </label>
      </form>
    </div>
  )
}

