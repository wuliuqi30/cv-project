
import { useState } from 'react';
import { SubmitAndCancelButtonRow } from './SubmitAndCancelButtonRow';
import { defaultEducationInfo, defaultExperiencesInfo } from './defaultData';
import { BasicTextInputRow } from './BasicTextInputRow';
import { editSelectorNames } from '../constants';
import { AddDuty } from './AddDuty';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

export function EducationForm({ editSelector, onDataSubmit, onDataCancel }) {
    const suppressOutput = true;

    // formInfo here is an array of many possible different experiences. The one displayed will go into formTempInfo, which is not an array, but a single object.
    const editMode = editSelector.sectionName === editSelectorNames.educationInfo ? true : false;



    const [formInfo, setFormInput] = useState(defaultEducationInfo);

    const defaultCopyForTempInfo = structuredClone(defaultEducationInfo);

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
        let formCopy = structuredClone(formTempInfo);
        formCopy[editSelector.index] = { ...formCopy[editSelector.index], [name]: value };
        setFormTempInput(prevState => 
            prevState.map((item,index) => index === editSelector.index? {...item, [name]:value}:item)
        );
    };



    const handleStartDateInfoChange = (date) => {
        let formCopy = structuredClone(formTempInfo);
        formCopy[editSelector.index] = { ...formCopy[editSelector.index], startDate: date };
        setFormTempInput(formCopy);
    }

    const handleEndDateInfoChange = (date) => {
        let formCopy = structuredClone(formTempInfo);
        formCopy[editSelector.index] = { ...formCopy[editSelector.index], endDate: date };
        setFormTempInput(formCopy);
    }



    const handleFormSubmit = (e) => {
        e.preventDefault();
        // On submission, use the temp info to update the current state AT the given index and also to send the entire array to the CV using the callback function

        // Delete any possible empty bullet items.
        // let tempInfoClone = structuredClone(formTempInfo);
        // tempInfoClone = tempInfoClone.map((item, index) => {
        //     if (index === editSelector.index) {
        //         return { ...item, bulletItems: item.bulletItems.filter(item => item !== "")}
        //     } else {
        //         return item;
        //     }
        // }
        // )
        // setFormTempInput(tempInfoClone);

        setFormInput(formTempInfo);
        

        onDataSubmit(formTempInfo);
        if (!suppressOutput) {
            console.log("Form Submitted");
            console.log("New Education Info iwas just updated with updatedState =  ");
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



    const handleOnKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent the default form submission
            console.log("Prevented Submission from clicking enter on the input field")
        }
    }




    return (

        <form onSubmit={handleFormSubmit} className='edit-form'>
            <h2>Edit Education</h2>
            {/* <input onChange={handleTempInfoChange} value={formTempInfo.company}/> */}

            <BasicTextInputRow
                labelText={"School Name"}
                placeholderText={"?"}
                handleInputTextChange={handleTempInfoChange}
                inputText={!editMode ? "" : formTempInfo[editSelector.index].school}
                htmlForIdentifier={"school"}
                disabled={!editMode}
                required />
            <BasicTextInputRow
                labelText={"Degree"}
                placeholderText={"?"}
                handleInputTextChange={handleTempInfoChange}
                inputText={!editMode ? "" : formTempInfo[editSelector.index].degree}
                htmlForIdentifier={"degree"}
                disabled={!editMode}
                required />
            <BasicTextInputRow
                labelText={"Major"}
                placeholderText={"?"}
                handleInputTextChange={handleTempInfoChange}
                inputText={!editMode ? "" : formTempInfo[editSelector.index].major}
                htmlForIdentifier={"major"}
                disabled={!editMode}
                required />
            
            <BasicTextInputRow
                labelText={"GPA"}
                placeholderText={"?"}
                handleInputTextChange={handleTempInfoChange}
                inputText={!editMode ? "" : formTempInfo[editSelector.index].gpa}
                htmlForIdentifier={"gpa"}
                disabled={!editMode}
                required />
            <BasicTextInputRow
                labelText={"Location"}
                placeholderText={"?"}
                handleInputTextChange={handleTempInfoChange}
                inputText={!editMode ? "" : formTempInfo[editSelector.index].location}
                htmlForIdentifier={"location"}
                disabled={!editMode}
                required />

            <div className='basic-form-input-row'>
                <div className='date-block'>
                    <label htmlFor='dateStart'>
                        From:
                    </label>
                    <DatePicker
                        selected={!editMode ? new Date() : formTempInfo[editSelector.index].startDate}
                        onChange={handleStartDateInfoChange}

                        startDate={!editMode ? new Date() : formTempInfo[editSelector.index].startDate}
                        endDate={!editMode ? new Date() : formTempInfo[editSelector.index].startDate}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                        disabled={!editMode}
                    />
                </div>

                <div className='date-block'>
                    <label htmlFor='dateEnd'>
                        To:
                    </label>
                    <DatePicker
                        selected={!editMode ? new Date() : formTempInfo[editSelector.index].endDate}
                        onChange={handleEndDateInfoChange}

                        startDate={!editMode ? new Date() : formTempInfo[editSelector.index].endDate}
                        endDate={!editMode ? new Date() : formTempInfo[editSelector.index].endDate}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                        disabled={!editMode}
                    />
                </div>

            </div>
        

            {editMode &&
                <SubmitAndCancelButtonRow
                    submitCallback={handleFormSubmit}
                    cancelCallback={handleCancel} />}
        </form>





    )


}