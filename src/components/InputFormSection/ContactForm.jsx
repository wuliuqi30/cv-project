import { editSelectorNames } from '../../constants/constants';
import { CloseButton } from './CloseButton';
import { BasicTextInputRow } from './BasicTextInputRow';
import 'react-datepicker/dist/react-datepicker.css';

export function ContactForm({ 
    editSelector,  
    handleFormClose,
    contactFormInfo,
    contactFormChangeHandler}) {
    const suppressOutput = true;

    // formInfo here is an array of many possible different experiences. The one displayed will go into formTempInfo, which is not an array, but a single object.
    const editMode = editSelector.sectionName === editSelectorNames.contactInfo ? true : false;


    const handleContactFormChange = (e) => {
        const { name, value } = e.target;
        if (!suppressOutput) {
            console.log("-----------------Editing Contact Info Section--------------------------------");
        }
        contactFormChangeHandler( {...contactFormInfo, [name]: value} );
    };

    return (

        <form onSubmit={handleFormClose} className='edit-form'>
            <h2>Edit Contact Info</h2>
            
            {editMode && 
                <>
            <BasicTextInputRow
                labelText={"Address First Line"}
                placeholderText={"?"}
                handleInputTextChange={handleContactFormChange}
                inputText={!editMode ? "" : contactFormInfo.addressFirstLine}
                htmlForIdentifier={"addressFirstLine"}
                disabled={!editMode}
                required />
            <BasicTextInputRow
                labelText={"Address Second Line"}
                placeholderText={"?"}
                handleInputTextChange={handleContactFormChange}
                inputText={!editMode ? "" : contactFormInfo.addressSecondLine}
                htmlForIdentifier={"addressSecondLine"}
                disabled={!editMode}
                required />
            <BasicTextInputRow
                labelText={"Phone Number"}
                placeholderText={"?"}
                handleInputTextChange={handleContactFormChange}
                inputText={!editMode ? "" : contactFormInfo.phoneNumber}
                htmlForIdentifier={"phoneNumber"}
                disabled={!editMode}
                required />
            <BasicTextInputRow
                labelText={"Email"}
                placeholderText={"?"}
                handleInputTextChange={handleContactFormChange}
                inputText={!editMode ? "" : contactFormInfo.email}
                htmlForIdentifier={"email"}
                disabled={!editMode}
                required />
                <CloseButton
                closeCallBack={handleFormClose}
                />
            </>
            
                }
        </form>





    )


}