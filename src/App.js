import React, { useState } from "react";
import { Login } from './components/Login.jsx';
import { Register } from './components/Registr.jsx';




function App() {
    const [currentForm, setCurrentForm] = useState('login');
  
    const toggleForm = (formName) => {
      setCurrentForm(formName);
    }

  return (
    <>
        {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
        
    </>
  );
}

export default App;