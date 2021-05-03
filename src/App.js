import React ,{useState,useEffect} from 'react'
import './App.css';
import Decks from './components/decks'

function App() {
const [takeOne ,setTakeOne]= useState([])
useEffect(()=>{
  const url = 'https://api.punkapi.com/v2/beers?page=2&per_page=80'
  fetch(url)
  .then(resp => resp.json())
  .then(resp => setTakeOne(resp))
},[])

return (<div className="App">
       {takeOne.map((item,i)=>
      <Decks key={i} 
      {...item}/>)}
   </div>)


}

 
 


export default App;
