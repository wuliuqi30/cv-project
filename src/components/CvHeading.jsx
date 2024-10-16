import { ReusableEditableSection } from './ReusableEditableSection';

export function CvHeading({ firstName, lastName, editSelector, onEdit, }) {

    const suppressDebugOutput = true;

    if (!suppressDebugOutput) {
        console.log(firstName, lastName)
    }

    return (
        <>
            <ReusableEditableSection
                sectionClassName="cv-heading"
                editSelectorIndex={editSelector.index}
                handleEditClick={onEdit}>

                {firstName + ' ' + lastName}

            </ReusableEditableSection>


        </>
    )
}