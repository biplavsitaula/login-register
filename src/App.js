import logo from './logo.svg';
import './App.css'
import React, {useState} from 'react';

import { Login } from "./Login";
import { Register } from './Register';

function App() {
  const [currentForm, setCurrentForm] = useState('Login');

  const toggleForm = (forName) => {
    setCurrentForm(forName);
  }

  return (
    <div className="App">
      {
        currentForm === "Login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
    </div>
  );
}

export default App;
