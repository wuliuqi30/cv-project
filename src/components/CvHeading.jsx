import { ReusableEditableSection } from './ReusableEditableSection';

export function CvHeading({ firstName, lastName, editMode, onEdit, }) {

    const suppressDebugOutput = true;


    if (!suppressDebugOutput) {
        console.log(firstName, lastName)
    }

    return (
        <>
            <ReusableEditableSection 
            sectionClassName="cv-heading"
            editMode={editMode}
            handleEditClick={onEdit}>

                {firstName + ' ' + lastName}

            </ReusableEditableSection>


        </>
    )
}