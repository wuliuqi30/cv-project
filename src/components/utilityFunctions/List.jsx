import React from 'react';

export function List({ titleDiv, listClass, children }) {
    //handleAddItemClick,addItemText temporarily disable
    const suppressOutput = true;
    if (!suppressOutput) {
        console.log("Entered List");
        console.log("Children is:");
        console.table(children);
    }
    //List returns a list of whatever plus a button that can be used to add a new item to the list.
    return (
        <div className="list">
            {titleDiv}
            <ul className={listClass}>
                {React.Children.map(children,(child, index) => {
                    return (
                    <li key={index}>
                        {child}
                    </li>
                    )
                })}
            </ul>
            
        </div>
    )
}