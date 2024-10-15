import { useState, useRef } from 'react';
import { List } from '../List';

export function Experience({ company,
    startDate,
    endDate,
    bulletItems
}) {
    const suppressOutput = true;

    if (!suppressOutput){
    console.log("Entered Experience component");
    console.log(`rendering experience component: ${company} ${startDate} ${endDate} ${bulletItems}`)
    }
    // Contains info about: 
    // company, dates worked (mm/yyyy - mm/yyyy)
    // bullet points of specific tasks completed (which is an array)
    return (
        <div className="experience">
            <p>{company + ', ' + startDate + '-' + endDate}</p>
            <List>
                {
                bulletItems.map(
                    (item, index) =><p key={index}>{item}</p>   
                )}
            </List>
        </div>
    )

}