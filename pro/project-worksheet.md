# Project Overview

## Project Links

- [add your github repo link](https://github.com/barbaroreyes/proyect2)
- [add your deployment link](https://barbaro-project2.netlify.app/)

## Project Description
This Small Store will take you to know part of the beer culture.


## API


```
{data: {https://api.punkapi.com/v2/beers?page=2&per_page=80} }
{
"id": 1,
"name": "Buzz",
"tagline": "A Real Bitter Experience.",
"first_brewed": "09/2007",
"description": "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
"image_url": "https://images.punkapi.com/v2/keg.png",
"abv": 4.5,
"ibu": 60,
"target_fg": 1010,
"target_og": 1044,
"ebc": 20,
"srm": 10,
"ph": 4.4,
"attenuation_level": 75,
"volume": {
"value": 20,
"unit": "litres"
}

```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [add link to your wireframes](https://imgur.com/T8TD2E6)
- [add link to your react architecture](https://imgur.com/eRcdPI3)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Find and use external api 
- Render data on page 
- Allow user to interact with the page

#### PostMVP EXAMPLE

- Add localStorage or firebase for storage

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | render all app | 
| Header | This will render the header include the nav ,main ,and footer|
| main | this will  render all childrens views
| Footer | This will render the a submit form | 


| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Additional Libraries
  
React-Boostrap

## Code Snippet


```
const addName= e =>{
    e.preventDefault();
    if(!name.trim()){
        setError('Error')
        return
      }
    const newId ={id: uniqid(),titleName:name}
    setNameList(
    [...nameList,newId])
    setName('')
    setError(null)
    }
```
