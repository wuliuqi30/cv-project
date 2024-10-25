import { ReusableEditableSection} from './ReusableEditableSection';


export function Skill({  
    id,
    skillName,
    yearsExp,
    skillType,
    include,
    editSelectorIndex,
    onEdit
}) {
    const suppressOutput = true;

    
    if (!suppressOutput) {
        console.log("Entered Skill component");
    }

    const handleEditClick = () =>{
        console.log("In Skill.jsx click handler");
        onEdit();
    }

    return (
        <ReusableEditableSection
            sectionClassName="skills"
            editSelectorIndex={editSelectorIndex}
            handleEditClick={handleEditClick}>

            <div className='skills-paragraph'>
                
            </div>
            <p className='contact-bullet'>{phoneNumber}</p>
            <p className='contact-bullet'>{email}</p>

        </ReusableEditableSection>
    )

}