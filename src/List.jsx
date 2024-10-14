import React from 'react';
import { EditableSection } from './editableSection';
import { useState } from 'react';


export function List({initialChildren}){

    const [items,setItems] = useState([...initialChildren]);

    // When you click the add item button, it changes the state by taking all existing items and then appending a new one
    const handleAddItemClick = ()=>{
        setItems([...items, <EditableSection key={`${items.length+1}`}/>])
    }

 

    //List returns a list of whatever plus a button that can be used to add a new item to the list.
    return(
        <li>
            <h1>Hello Heres my List Title</h1>
            <ul>{items.map((child,index)=>(
                <li key={index}>{child}</li>
            ))}
            </ul>
            <button className="add-li-button" onClick={handleAddItemClick}>
                Add Item
            </button>
        </li>
    )
}