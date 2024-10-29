import { editSelectorNames } from '../../constants/constants';
import { List } from '../utilityFunctions/List';

export function CvSkillsSection({ skills, editSelector }) {

    const suppressOutput = false;
    const editMode = editSelector.sectionName === editSelectorNames.skillsInfo ? true : false;

    if (!suppressOutput) {
        console.log("Entered CVSkillsSection. Contact Data Object Is:");
        console.table(skills);
        console.log(`editMode is ${editMode}`);
        console.log(`editSelector is`);
        console.log(editSelector);
    }


    return (
        <div className='skills-section'>
            <List
                titleDiv={<div className='cv-section-title'>Skills</div>} 
                listClass={"cv-first-level-list"}>
        

                
                    <div className='skills-subsection'>
                        <b >Computer Skills: </b>{skills.
                            filter(skill => skill.skillType == 'computer').
                            map((skill, index) => {
                                return (<span key={index}>{skill.skillName}{', '}</span>)
                            })}
                    </div>
                    <div className='skills-subsection'>
                        <b className='skills-title'>Languages: </b>{skills.
                            filter(skill => skill.skillType == 'language').
                            map((skill, index) => {
                                return (<span key={index}>{skill.skillName}{', '} </span>)
                            })}
                    </div>
            
                
            </List>
        </div>

    )

}