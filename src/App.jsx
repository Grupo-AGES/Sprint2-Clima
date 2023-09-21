import axios from 'axios'
import './App.css'
import { useState } from 'react';

function App() {

  const [inputValue, setInputValue] = useState('');

    const urlApi1=`https://api.geoapify.com/v1/geocode/autocomplete?text=${inputValue}&format=json&apiKey=e72a5844973a4abba1de87bfac36415f`;
  axios.get(urlApi1)
      .then(response => {
        console.log("response", response.data)
      })
      .catch(error => {
        console.error('Erro ao buscar dados da API:', error);
      });
  
  return (
    <>
 
            <input className='city' placeholder='Cidade' name="cidade" value={inputValue} onChange={(e) => {setInputValue(e.target.value)}}></input>
    </>
  )
}

export default App
