import React,{useState,useEffect} from 'react'
const Projects = () => {
    const [project,setProject] =useState(null)
    const apiKey='Q5dchArrZUcjvr7XcHSNf2_RpuQt-HTYneNVL1SXuYw'
    const url =`api.census.gov/data/2019/acs/acs1?get=NAME,group(B01001)&for=us:1&key=${apiKey}`
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