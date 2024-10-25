import { Contact } from './Contact';
import { editSelectorNames } from '../../constants/constants';


export function CvContactSection({ contactInfo, editSelector, onEdit }) {

    const suppressOutput = true;
    const editMode = editSelector.sectionName === editSelectorNames.contactInfo ? true : false;

    if (!suppressOutput) {
        console.log("Entered CVContactSection. Contact Data Object Is:");
        console.table(contactInfo);
        console.log(`editMode is ${editMode}`)
    }


    // Composed of Contact modules
    return (
        <div className='contact-section'>
            <div className='cv-section-title'>Contact</div>
            <Contact
                addressFirstLine={contactInfo.addressFirstLine}
                addressSecondLine={contactInfo.addressSecondLine}
                phoneNumber={contactInfo.phoneNumber}
                email={contactInfo.email}               

                editSelectorIndex={editSelector.index}
                onEdit={onEdit}
            />
        </div>

    )

}