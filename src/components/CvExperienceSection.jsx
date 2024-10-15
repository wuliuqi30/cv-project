import { useState, useRef } from 'react';
import { List } from '../List';
import { Experience } from './Experience';
import { defaultExperiencesInfo } from './defaultData';

export function CvExperienceSection({ experiences, editSelector, onEdit }) {

    const suppressOutput = true;
    const editMode = editSelector > -1 ? true : false;

    if (!suppressOutput) {
        console.log("Entered CVExperienceSection. Experience Data Object Is:");
        console.table(experiences);
        console.log(`editMode is ${editMode}`)
    }


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
    
    if (!suppressOutput){
        console.log("About to return from CVExperienceSection");
        console.log(`hoverButtonsVisible ${hoverButtonsVisible}`);

    }
    // Composed of Experience modules
    return (
        <div className='experience-section'
            onMouseEnter={makeButtonsAppearHandler}
            onMouseLeave={handleMouseLeave}>
            <List >
                {experiences.map((experience) => {
                    if (!suppressOutput) {
                        console.log(`Mapping experience data: ${experience}`);
                        console.log(experience);
                    }
                    return (<Experience
                        key={experience.id}
                        company={experience.company}
                        startDate={experience.startDate}
                        endDate={experience.endDate}
                        bulletItems={experience.bulletItems}
                    />)
                })}
            </List>
            {(!editMode && hoverButtonsVisible) &&
                <button 
                    className="cv-edit-button"
                    onClick={() => onEdit(1)}
                    onMouseEnter={makeButtonsAppearHandler}

                >
                    Edit
                </button>}
        </div>
        // <div className='experience-section'>
        //     {experiences.map((experience)=>{
        //         <Experience/>
        //     })}
        // </div>
    )

}