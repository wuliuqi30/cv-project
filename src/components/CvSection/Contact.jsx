import { ReusableEditableSection} from './ReusableEditableSection';


export function Contact({  
    addressFirstLine,
    addressSecondLine,
    phoneNumber,
    email,
    editSelectorIndex,
    onEdit
}) {
    const suppressOutput = true;

    
    if (!suppressOutput) {
        console.log("Entered Contact component");
        console.log(`addressFirstLine is ${addressFirstLine} addressSecondLine is ${addressSecondLine} phoneNumber us ${phoneNumber} and email is ${email} editSelector is ${editSelectorIndex}`)
       
    }

    const handleEditClick = () =>{
        console.log("In Contact.jsx click handler");
        onEdit();
    }

    return (
        <ReusableEditableSection
            sectionClassName="contact"
            editSelectorIndex={editSelectorIndex}
            handleEditClick={handleEditClick}>

            <div className='address'>
                <p className='contact-bullet'>{addressFirstLine}</p>
                <p className='contact-bullet'>{addressSecondLine}</p>
            </div>
            <p className='contact-bullet'>{phoneNumber}</p>
            <p className='contact-bullet'>{email}</p>

        </ReusableEditableSection>
    )

}