import { editSelectorNames } from '../../constants/constants';
import { ReusableEditableSection } from './ReusableEditableSection';

export function CvSkillsSection({ skills, editSelector, onEdit }) {

    const suppressOutput = true;
    const editMode = editSelector.sectionName === editSelectorNames.skillsInfo ? true : false;

    if (!suppressOutput) {
        console.log("Entered CVSkillsSection. Contact Data Object Is:");
        console.table(skills);
        console.log(`editMode is ${editMode}`);
        console.log(`editSelector is`);
        console.log(editSelector);
    }

    const handleEditClick = () =>{
        console.log("In CvSkillsSection.jsx click handler");
        onEdit();
    }
   
    return (
        <div className='skills-section'>
            <div className='cv-section-title'>Skills</div>
            <ReusableEditableSection
                sectionClassName="skills"
                editSelectorIndex={editSelector.index}
                handleEditClick={handleEditClick}>
                    <div className='skills-subsection'>
                     <b >Computer Skills: </b>{skills.
                     filter(skill=> skill.skillType == 'computer').
                     map((skill,index)=> {
                        return (<span key={index}>{skill.skillName}{', '}</span>)
                     })}
                     </div>
                     <div className='skills-subsection'>
                     <b className='skills-title'>Languages: </b>{skills.
                     filter(skill=> skill.skillType == 'language').
                     map((skill,index)=> {
                        return (<span key={index}>{skill.skillName}{', '} </span>)
                     })}
                      </div>
            </ReusableEditableSection>
        </div>

    )

}