import React from 'react'

const Deck = (props) => {
  
  return (
    <div className ='deck'>
   <div>
     <h1>Name  :{props.name}</h1>
    <h3>First_brewed :{props.first_brewed}</h3>
     </div>
      
 </div>
  )
}

export default Deck
