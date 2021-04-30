import React,{useState,useEffect} from 'react'
const Projects = () => {
    const [project,setProject] =useState(null)
    const url ='https://spreadsheets.google.com/feeds/list/1Ni_GyfAJSOjG4CN5CK3YO-ruB7rCRCh-aCDulo3q_UE/1/public/full?alt=json'
    const getProject = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setProject(data)
        console.log(data.feed.entry)
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