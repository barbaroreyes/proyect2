import React,{useState,useEffect} from 'react'
const Projects = () => {
    const [project,setProject] =useState(null)
    
    const url =`https://deckofcardsapi.com/api/deck/new/draw/?count=2`
    const getProject = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setProject(data)
        console.log(data)
    }
  useEffect(()=>{getProject()},[])  
    return (
        <div>
          <header>
              <div>Site Name</div>
              <div>Nav</div>
            </header>

        </div>
    )
}
export default Projects