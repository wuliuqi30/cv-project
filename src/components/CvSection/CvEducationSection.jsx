import { List} from '../utilityFunctions/List';
import { editSelectorNames } from '../../constants/constants';
import { Education } from './Education';



export function CvEducationSection({ educations, editSelector, onEdit }) {

    const suppressOutput = true;
    const editMode = editSelector.sectionName === editSelectorNames.educationInfo ? true : false;

    if (!suppressOutput) {
        console.log("Entered CVEducationSection. Education Data Object Is:");
        console.table(educations);
        console.log(`editMode is ${editMode}`)
       
        
    }


    // Composed of Education modules
    return (
        <div className='education-section'
            >
            <List 
            titleDiv={<div className='cv-section-title'>Education</div>}
            listClass={"education-list"}
            >
                {educations.map((education) => {
                    if (!suppressOutput) {
                        console.log(`Mapping experience data: ${education}`);
                        console.log(education);
                    }
                    return (<Education
                        key={education.id}
                        id={education.id}
                        school={education.school}
                        location={education.location}
                        major={education.major}
                        gpa={education.gpa}
                        degree={education.degree}
                        startDate={education.startDate}
                        endDate={education.endDate}
                        
                        editSelectorIndex={editSelector.index}
                        onEducationEdit={onEdit}
                    />)
                })}
            </List>
            
        </div>
       
    )

}