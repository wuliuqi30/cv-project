import { useState, useRef } from 'react';
export function ReusableEditableSection({ children, sectionClassName, editMode, handleEditClick }) {


    const [hoverButtonsVisible, setHoverButtonsVisible] = useState(false);
    const timeoutRef = useRef(null);
    const buttonDisappearTimerMs = 500;

    const makeButtonsAppearHandler = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setHoverButtonsVisible(true);
    }

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setHoverButtonsVisible(false);
        }, buttonDisappearTimerMs)


    }

    return (
        <>
            <section
                className={sectionClassName}
                onMouseEnter={makeButtonsAppearHandler}
                onMouseLeave={handleMouseLeave}>
                {children}

            </section>
            {(!editMode && hoverButtonsVisible) &&
                <button
                    className="cv-edit-button"
                    onClick={handleEditClick}
                    onMouseEnter={makeButtonsAppearHandler}
                >
                    Edit
                </button>}
        </>
    )


}