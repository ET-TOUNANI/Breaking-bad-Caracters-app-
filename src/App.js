import React,{useEffect,useState} from 'react';
import './App.scss';
import logo from './img/logo.png';
import Section from './Section';
import Option from './Option';
import axios from 'axios';




function App() {

  const  [data, setdata] = useState([])

  useEffect(()=> {
    axios.get('https://www.breakingbadapi.com/api/characters?name=')
    .then(data => {
      setdata(data.data);
    })
    .catch(err => {
      console.log(err);
    })

  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
      </header>
      <Section setdata={setdata} />
      <Option cara={data} />
    </div>
  );
}

export default App;
