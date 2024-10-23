
import { List } from '../List';
import { ReusableEditableSection } from './ReusableEditableSection';
import {format} from "date-fns";

export function Education({ 
    id, 
    school,
    location,
    major,
    gpa,
    degree,
    startDate,
    endDate,
    editSelectorIndex,
    onEducationEdit
}) {
    const suppressOutput = true;

    // const editMode = editSelectorIndex === id ? true : false;

    if (!suppressOutput) {
        console.log("Entered Education component");
        console.log(`id is ${id} editSelector is ${editSelectorIndex}`)
        console.log(`rendering education component: school: ${school} startdate: ${startDate} 
            enddate: ${endDate} major: ${major} etc`)
    }
    // Contains info about: 
    // company, dates worked (mm/yyyy - mm/yyyy)
    // bullet points of specific tasks completed (which is an array)

    const handleEditClick = () =>{
        console.log("In Education.jsx click handler");
        console.log(`id is ${id}`)
        onEducationEdit(id);
    }

    return (
        <ReusableEditableSection
            sectionClassName="education"
            editSelectorIndex={editSelectorIndex}
            handleEditClick={handleEditClick}>

            <p  className = 'education-info-heading'>
                {format(endDate,"MMM yyyy") + ' | ' + degree + ', ' + major + '- GPA:' + gpa + '- ' + school + ' - ' + location}
            </p>
            
        </ReusableEditableSection>
    )

}