
import { List } from '../List';
import { ReusableEditableSection } from './ReusableEditableSection';
import {format} from "date-fns";

export function Experience({ id, company,location,title,
    startDate,
    endDate,
    bulletItems,
    editSelectorIndex,
    onExperienceEdit
}) {
    const suppressOutput = true;

    // const editMode = editSelectorIndex === id ? true : false;

    if (!suppressOutput) {
        console.log("Entered Experience component");
        console.log(`id is ${id} editSelecor is ${editSelectorIndex}`)
        console.log(`rendering experience component: ${company} ${startDate} ${endDate} ${bulletItems}`)
    }
    // Contains info about: 
    // company, dates worked (mm/yyyy - mm/yyyy)
    // bullet points of specific tasks completed (which is an array)

    const handleEditClick = () =>{
        console.log("In Experience.jsx click handler");
        console.log(`id is ${id}`)
        onExperienceEdit(id);
    }

    return (
        <ReusableEditableSection
            sectionClassName="experience"
            editSelectorIndex={editSelectorIndex}
            handleEditClick={handleEditClick}>
            
            <List listClass='experience-list' titleDiv={<p 
            className = 'experience-info-heading'>
                {format(startDate,"MMM yyyy") + ' - ' + format(endDate,"MMM yyyy") + ' | ' + title + ' - ' + company + ', ' + location}</p>}>
                {
                    bulletItems.map(
                        (item, index) => <p className="experience-bullet" key={index}>{item}</p>
                    )}
            </List>
        </ReusableEditableSection>
    )

}