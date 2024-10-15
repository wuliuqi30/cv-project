import React from 'react';
import { useState } from 'react';
import { BasicTextInputRow } from './BasicTextInputRow';
import { SubmitAndCancelButtonRow } from './SubmitAndCancelButtonRow';
import { defaultGeneralInfo } from './defaultData';

export function GeneralInfoForm({ editMode, onDataSubmit, onDataCancel }) {
    const suppressOutput = true;

    const [formInfo, setFormInput] = useState(defaultGeneralInfo);
    const [formTempInfo, setFormTempInput] = useState(defaultGeneralInfo);

    const handleGeneralInfoChange = (e) => {
        
        const { name, value, id, placeholder } = e.target;
        if (!suppressOutput) {
            console.log("Changing Form Temp Info");
            console.log(e.target);
            console.log(`name ${name}  and value: ${value} and id ${id} and placeholder ${placeholder}`);
            
        }
        
        setFormTempInput((prev) => ({
            ...prev, [name]: value,
        }));
    };


    const handleFormSubmit = (e) => {
        e.preventDefault();
        // On submission, use the temp info to update the current state and also to send to the CV using the callback function 
        setFormInput(formTempInfo);
        onDataSubmit(formTempInfo);
        console.log("Form Submitted");
    }

    const handleCancel = (e) => {
        e.preventDefault();
        // On cancellation, you haven't yet updated the forminfo, so you reset the temp info to what the form info is, then call the callback function, which will set edit mode to false, when then disables the form
        setFormTempInput(formInfo);
        console.log("Cancelled Submission");
        onDataCancel();
    }


    // console.log("calling generalInfoForm with this generalInfoDataObject:");
    // console.table(defaultGeneralInfo);
    // console.log("the current form data is: ");
    // console.table(formInfo);
    // console.log("the current temp form data is: ");
    // console.table(formTempInfo);
    return (

        <form onSubmit={handleFormSubmit}>
            <BasicTextInputRow
                labelText={"First Name"}
                placeholderText={"Type First Name Here"}
                handleInputTextChange={handleGeneralInfoChange}
                inputText={!editMode ? "" : formTempInfo.firstName}
                htmlForIdentifier={"firstName"}
                disabled={!editMode}
                required />
            <BasicTextInputRow
                labelText={"Last Name"}
                placeholderText={"Type Last Name Here"}
                handleInputTextChange={handleGeneralInfoChange}
                inputText={!editMode ? "" : formTempInfo.lastName}
                htmlForIdentifier={"lastName"}
                disabled={!editMode}
                required />
            {editMode &&
                <SubmitAndCancelButtonRow
                    submitCallback={handleFormSubmit}
                    cancelCallback={handleCancel} />}
        </form>





    )


}