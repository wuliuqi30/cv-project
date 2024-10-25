import { useState, useRef } from 'react';

export function ReusableEditableSection({ children, sectionClassName, editSelectorIndex, handleEditClick }) {

    const suppressOutput = true;
    if (!suppressOutput) {
        console.log(`Entered Reusable Editable Section, sectionClassName is ${sectionClassName}, editSelectorIndex: ${editSelectorIndex} and handleEditClick is ${handleEditClick}  `);
    }
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
        if (editSelectorIndex < 0) {
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


    return (
        <div className='editable-section' 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            <section
                className={sectionClassName}
                >
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
        </div>
    )


}