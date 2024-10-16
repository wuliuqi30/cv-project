import { useState, useRef } from 'react';
export function ReusableEditableSection({ children, sectionClassName, editSelectorIndex, handleEditClick }) {

    const suppressOutput = true;

    const [hoverButtonsVisible, setHoverButtonsVisible] = useState(false);
    const timeoutRef = useRef(null);
    const buttonDisappearTimerMs = 500;

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        if (!suppressOutput) {
        console.log(`Mouse Entered! editSelectorIndex is ${editSelectorIndex}`)
        }
        // Only make buttons appear if nothing is being edited.
        if(editSelectorIndex < 0){
            if (!suppressOutput) {
                console.log("Setting hover buttons to true");
            }
            setHoverButtonsVisible(true);
        }
        
    }

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setHoverButtonsVisible(false);
        }, buttonDisappearTimerMs)
        if (!suppressOutput) {
            console.log("Mouse Left!")
        }

    }

    const editButtonClickedHandler = () => {
        setHoverButtonsVisible(false);
        handleEditClick();
    }


    if (!suppressOutput) {

        console.log(`in an object with class ${sectionClassName} editSelectorIndex is ${editSelectorIndex} and hoverButtonsVisible is ${hoverButtonsVisible}`)
        console.log("child[0] of this ResusableEditSection is", children[0].props)
    }
    return (
        <>
            <section
                className={sectionClassName}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                {children}

            </section>
            {hoverButtonsVisible &&
                <button
                    className="cv-edit-button"
                    onClick={editButtonClickedHandler}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Edit
                </button>}
        </>
    )


}