
import { useState } from 'react';

import { defaultContactInfo } from '../../data/defaultData';
import { editSelectorNames } from '../../constants/constants';

import { SubmitAndCancelButtonRow } from './SubmitAndCancelButtonRow';
import { BasicTextInputRow } from './BasicTextInputRow';


import 'react-datepicker/dist/react-datepicker.css';

export function ContactForm({ editSelector, onDataSubmit, onDataCancel }) {
    const suppressOutput = false;

    // formInfo here is an array of many possible different experiences. The one displayed will go into formTempInfo, which is not an array, but a single object.
    const editMode = editSelector.sectionName === editSelectorNames.contactInfo ? true : false;


    const [formInfo, setFormInput] = useState(defaultContactInfo);

    const defaultCopyForTempInfo = structuredClone(defaultContactInfo);

    const [formTempInfo, setFormTempInput] = useState(defaultCopyForTempInfo);



    const handleTempInfoChange = (e) => {
        if (!suppressOutput) {
            console.log("Event is:")
            console.log(e);
        }
        const { name, value } = e.target;
        if (!suppressOutput) {
            console.log("-----------------Changing Form Temp Info--------------------------------");
            console.log(e.target);
            console.log(`name ${name}  and value: ${value}`);
        }
        
        setFormTempInput( {...formTempInfo, [name]: value} );
    };


    const handleFormSubmit = (e) => {
        e.preventDefault();

        setFormInput(formTempInfo);

        onDataSubmit(formTempInfo);
        if (!suppressOutput) {
            console.log("Form Submitted");
            console.log("New Contact Info iwas just updated with updatedState =  ");
            console.table(formTempInfo);
        }
    }

    const handleCancel = (e) => {
        e.preventDefault();
        // On cancellation, you haven't yet updated the forminfo, so you reset the temp info to what the form info is, then call the callback function, which will set edit mode to false, when then disables the form
        setFormTempInput(formInfo);
        console.log("Cancelled Submission");
        onDataCancel();
    }

    return (

        <form onSubmit={handleFormSubmit} className='edit-form'>
            <h2>Edit Contact Info</h2>
            {/* <input onChange={handleTempInfoChange} value={formTempInfo.company}/> */}

            <BasicTextInputRow
                labelText={"Address First Line"}
                placeholderText={"?"}
                handleInputTextChange={handleTempInfoChange}
                inputText={!editMode ? "" : formTempInfo.addressFirstLine}
                htmlForIdentifier={"addressFirstLine"}
                disabled={!editMode}
                required />
            <BasicTextInputRow
                labelText={"Address Second Line"}
                placeholderText={"?"}
                handleInputTextChange={handleTempInfoChange}
                inputText={!editMode ? "" : formTempInfo.addressSecondLine}
                htmlForIdentifier={"addressSecondLine"}
                disabled={!editMode}
                required />
            <BasicTextInputRow
                labelText={"Phone Number"}
                placeholderText={"?"}
                handleInputTextChange={handleTempInfoChange}
                inputText={!editMode ? "" : formTempInfo.phoneNumber}
                htmlForIdentifier={"phoneNumber"}
                disabled={!editMode}
                required />
            <BasicTextInputRow
                labelText={"Email"}
                placeholderText={"?"}
                handleInputTextChange={handleTempInfoChange}
                inputText={!editMode ? "" : formTempInfo.email}
                htmlForIdentifier={"email"}
                disabled={!editMode}
                required />
            {editMode &&
                <SubmitAndCancelButtonRow
                    submitCallback={handleFormSubmit}
                    cancelCallback={handleCancel} />}
        </form>





    )


}