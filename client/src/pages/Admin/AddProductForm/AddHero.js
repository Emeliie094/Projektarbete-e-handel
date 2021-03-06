import {useState} from 'react';

const AddHero = ({})=> {

const [heading,setHeading]=useState("");
const [info,setInfo]=useState("");

   
const handleSubmit = (event)=>{
    event.preventDefault();

const hero = {
    heading,
    info,
    imgUrl,
    linkUrl
} 

};

 return (
 <div>
    <form onSubmit={handleSubmit}>
        <label>Heading:</label>
        <input 
        type="text"
        value={heading}
        onChange={(e)=> setHeading(e.target.value)}/>
        <label>Info: </label>
        <input 
        type="text-area"
        value={info}
        onChange={(e) => {setInfo}}/>
        <label>Image:</label>
        <input 
        type="text"/>
        <label>Link to related product/ritual/items</label>
        <li>Read more</li>

        <button>Add hero to start page</button>
    </form>
    
    <section>
        <h1>{heading}</h1>
        <p>{info}</p>
        <img href= {imgUrl}></img>
        
    </section>
    </div>


 );
};

export default AddHero;