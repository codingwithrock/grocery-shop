import React from 'react';
import './Card.css';

const Card = (props) => {

    // Destructuring The Props
    const {name, id, price} = props.items;


    const addShoppingItem =  ()=>
    {
        
        // Checking in our local Stor


        // localStorage.setItem(`${name}`,price)
    } 
    
    

    return (
        <div className='Shopping-Card'>
            <h1>{name}</h1>
            <h2>{price} Tk</h2> 
            <button onClick={()=> addShoppingItem(name,price)} style={{marginBottom:'1.5rem'}}>Add Item</button>
        </div>
    );
};

export {Card};