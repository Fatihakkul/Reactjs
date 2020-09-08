import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import data from './data.json'
import {AnimalItem} from './components'


function App() {
  
 
   
  const mockData = [
    "kedi","köpek","timsa"
  ]
  
  const animalsCategory = mockData.map(item=>{
    return(
      <div className="categoryItem">
        <div>
          <h3>{item}</h3>
        </div>
        <hr 
          style={{
            
          }}
        />
        
      </div>
    )
  })

  const animalList =data.map(item=>{
   
    return(
      <div className="listCont">
          <h1 className="title" >{item.title}</h1>
          <hr className="line"/>  
          <text className="name">{item.name}</text>
          <button className="button-Item" ><text style={{color : 'white'}}>Git</text></button>
      </div>
    )
  })

  return (
    <>
    <div className="navbar">
      <text style={{color : "white"}}>Home</text>
      <div className="arama-cont">
        <input
          style={{height : 35 , marginRight : 10}}
          placeholder ="Arama"
        />
        <button className="button-Item"><text style={{color : 'white'}}>Arama</text></button>
      </div>
    </div>
  
    <div className="container-cont">
      <div className="category">
        <ul>
          {animalsCategory}
        </ul>
      </div>
      <div className="ul" >{animalList}</div>
    </div>
    <div className="MIT">
      <text>Tüm hakları saklıdır</text>
    </div>
  </>
  );
}

export default App;
