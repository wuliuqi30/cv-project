import { editSelectorNames } from '../../constants/constants';
import { List } from '../utilityFunctions/List';


export function CvContactSection({ contactInfo, editSelector }) {

    const suppressOutput = true;
    const editMode = editSelector.sectionName === editSelectorNames.contactInfo ? true : false;

    if (!suppressOutput) {
        console.log("Entered CVContactSection. Contact Data Object Is:");
        console.table(contactInfo);
        console.log(`editMode is ${editMode}`)
    }


    // Composed of Contact modules
    return (
        <div
            className='contact-section'
        >
            <List
                titleDiv={<div className='cv-section-title'>Contact</div>}
                listClass="cv-first-level-list">

                <div className='address'>
                    <p className='contact-bullet'>{contactInfo.addressFirstLine}</p>
                    <p className='contact-bullet'>{contactInfo.addressSecondLine}</p>
                </div>
                <p className='contact-bullet'>{contactInfo.phoneNumber}</p>
                <p className='contact-bullet'>{contactInfo.email}</p>
            </List>
        </div>

    )

}