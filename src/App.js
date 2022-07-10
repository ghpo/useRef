import './App.css';
import { useEffect, useRef, useState } from 'react';
import useRandomJoke from './useRandomJoke';

function App() {

const firstNameRef = useRef(null);
const lastNameRef = useRef(null);


const [firstName, setFirstName] = useState("Gustavo");
const [lastName, setLastName] = useState("Oliveira");

const joke = useRandomJoke(firstName,lastName);


const generateJoke = e =>{
  e.preventDefault();
  setFirstName(firstNameRef.current.value);
  setLastName(lastNameRef.current.value);

}

  return (
    <div className="App">
      <center>
        <h1>Joke Generator</h1>

        <h2>{joke}</h2>

        <form>


          <input 
          placeholder='First Name'
         ref={firstNameRef}
          />
          <input 
          placeholder='Last Name'
         ref={lastNameRef}
          />
          
          


          
          <button onClick={generateJoke}>Generate Joke</button>

        </form>

      </center>


    </div>
  );
}

export default App;
