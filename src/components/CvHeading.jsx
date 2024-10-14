import { useState,useRef } from 'react';

export function CvHeading({firstName,lastName,editMode, onEdit,}){

    const [hoverButtonsVisible, setHoverButtonsVisible] = useState(false);
    const timeoutRef = useRef(null);
    const buttonDisappearTimerMs = 500;

    const makeButtonsAppearHandler = () => {

        if(timeoutRef.current){
            clearTimeout(timeoutRef.current);
        }
        setHoverButtonsVisible(true);
    }

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(()=>{
            setHoverButtonsVisible(false);
        },buttonDisappearTimerMs)
        
    }

    console.log("Calling cvheading with values: ");
    console.log(firstName,lastName)
    return (
        <>
        <section className="cv-heading" 
        onMouseEnter={makeButtonsAppearHandler}
        onMouseLeave={handleMouseLeave}>
            {firstName + ' ' + lastName}
        </section>
        { (!editMode && hoverButtonsVisible) && 
        <button 
        className="cv-edit-button" 
        onClick={onEdit}
        onMouseEnter={makeButtonsAppearHandler}
        
        >
            Edit
        </button>}
        </>
    )
}