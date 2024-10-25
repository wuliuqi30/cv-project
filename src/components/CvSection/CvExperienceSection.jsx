import { List} from '../utilityFunctions/List';
import { editSelectorNames } from '../../constants/constants';
import { Experience } from './Experience';


export function CvExperienceSection({ experiences, editSelector, onEdit }) {

    const suppressOutput = true;
    const editMode = editSelector.sectionName === editSelectorNames.experienceInfo ? true : false;

    if (!suppressOutput) {
        console.log("Entered CVExperienceSection. Experience Data Object Is:");
        console.table(experiences);
        console.log(`editMode is ${editMode}`)
        console.log("About to return from CVExperienceSection");
        
    }


    // Composed of Experience modules
    return (
        <div className='experience-section'
            >
            <List 
            titleDiv={<div className='cv-section-title'>Experiences</div>}
            listClass={"experience-list"}
            >
                {experiences.map((experience) => {
                    if (!suppressOutput) {
                        console.log(`Mapping experience data: ${experience}`);
                        console.log(experience);
                    }
                    return (<Experience
                        key={experience.id}
                        id={experience.id}
                        company={experience.company}
                        location={experience.location}
                        title={experience.title}
                        startDate={experience.startDate}
                        endDate={experience.endDate}
                        bulletItems={experience.bulletItems}
                        editSelectorIndex={editSelector.index}
                        onExperienceEdit={onEdit}
                    />)
                })}
            </List>
            
        </div>
        // <div className='experience-section'>
        //     {experiences.map((experience)=>{
        //         <Experience/>
        //     })}
        // </div>
    )

}