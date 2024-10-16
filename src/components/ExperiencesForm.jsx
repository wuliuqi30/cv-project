
import { useState } from 'react';
import { SubmitAndCancelButtonRow } from './SubmitAndCancelButtonRow';
import { defaultExperiencesInfo } from './defaultData';
import { BasicTextInputRow } from './BasicTextInputRow';
import { editSelectorNames } from '../constants';

export function ExperiencesForm({ editSelector, onDataSubmit, onDataCancel }) {
    const suppressOutput = true;

    // formInfo here is an array of many possible different experiences. The one displayed will go into formTempInfo, which is not an array, but a single object.
    const editMode = editSelector.sectionName === editSelectorNames.experienceInfo ? true : false;
    


    const [formInfo, setFormInput] = useState(defaultExperiencesInfo);
    const [formTempInfo, setFormTempInput] = useState(defaultExperiencesInfo);


    const [startDate, setStartDate] = useState(new Date("2014/02/08"));
    const [endDate, setEndDate] = useState(null);

    const handleTempInfoChange = (e) => {

        const { name, value } = e.target;
        if (!suppressOutput) {
            console.log("Changing Form Temp Info");
            console.log(e.target);
            console.log(`name ${name}  and value: ${value}`);
        }
        let formCopy = [...formTempInfo];
        formCopy[editSelector.index] = {...formCopy[editSelector.index], [name]:value};
        setFormTempInput(formCopy);
    };


    const handleFormSubmit = (e) => {
        e.preventDefault();
        // On submission, use the temp info to update the current state AT the given index and also to send the entire array to the CV using the callback function

        setFormInput(formTempInfo);
        onDataSubmit(formTempInfo);
        if (!suppressOutput) {
            console.log("Form Submitted");
            console.log("New Experience Info iwas just updated with updatedState =  ");
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

    if (!suppressOutput) {
        console.log("calling ExperienceForm with this defaultExperienceInfo:");
        console.table(defaultExperiencesInfo);
        console.log(`editSelector is ${editSelector.index} and editMode is ${editMode}`)
        console.log(editSelector.index);
       
        console.log("the current form data is: ");
        console.table(formInfo);
        console.log("the current temp form data is: ");
        console.table(formTempInfo);
        console.log(`formTempInfo[editSelector].company is ${!editMode ? "" : formTempInfo[editSelector.index].company}`)
    }
    return (

        <form onSubmit={handleFormSubmit}>
            <h2>Edit Experience</h2>
            {/* <input onChange={handleTempInfoChange} value={formTempInfo.company}/> */}

            <BasicTextInputRow
                labelText={"Company Name"}
                placeholderText={"?"}
                handleInputTextChange={handleTempInfoChange}
                inputText={!editMode ? "" : formTempInfo[editSelector.index].company}
                htmlForIdentifier={"company"}
                disabled={!editMode}
                required />
            <BasicTextInputRow
                labelText={"Job Title"}
                placeholderText={"?"}
                handleInputTextChange={handleTempInfoChange}
                inputText={!editMode ? "" : formTempInfo[editSelector.index].title}
                htmlForIdentifier={"title"}
                disabled={!editMode}
                required />
            {editMode &&
                <SubmitAndCancelButtonRow
                    submitCallback={handleFormSubmit}
                    cancelCallback={handleCancel} />}
        </form>





    )


}