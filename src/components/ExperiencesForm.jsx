
import { useState } from 'react';
import { SubmitAndCancelButtonRow } from './SubmitAndCancelButtonRow';
import { defaultExperiencesInfo } from './defaultData';
import { BasicTextInputRow } from './BasicTextInputRow';
import { editSelectorNames } from '../constants';
import { AddDuty } from './AddDuty';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

export function ExperiencesForm({ editSelector, onDataSubmit, onDataCancel }) {
    const suppressOutput = false;

    // formInfo here is an array of many possible different experiences. The one displayed will go into formTempInfo, which is not an array, but a single object.
    const editMode = editSelector.sectionName === editSelectorNames.experienceInfo ? true : false;


    // Make a deep copy of the default: 




    const [formInfo, setFormInput] = useState(defaultExperiencesInfo);

    const defaultCopyForTempInfo = structuredClone(defaultExperiencesInfo);

    const [formTempInfo, setFormTempInput] = useState(defaultCopyForTempInfo);

    const [bulletItemsTemp, setBulletItemsTemp] = useState(defaultExperiencesInfo[0].bulletItems);

    // if (!suppressOutput) {
    //     console.log(defaultExperiencesInfo)
    //     console.log("dates from input:")
    //     console.log(formTempInfo[editSelector.index]);
    //     console.log(formTempInfo[editSelector.index]);
    // }

    // const [startDate, setStartDate] = useState(formTempInfo[editSelector.index].startDate);
    // const [endDate, setEndDate] = useState(formTempInfo[editSelector.index].endDate);

    //   if (!suppressOutput) {

    //         console.log("dates from state:")
    //         console.log(startDate);
    //         console.log(endDate);
    //     }

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
        setFormTempInput(formCopy);
    };

    const handleBulletChange = (e) => {
        if (!suppressOutput) {
            console.log("in handlebulletchange, Event e is:")
            console.log(e);
        }
        const { name, value, id } = e.target;
        if (!suppressOutput) {
            console.log("-----------------Changing Form Temp Info--------------------------------");
            console.log(e.target);
            console.log(`name ${name}  and value: ${value} and id ${id}`);
        }
        let formCopy = structuredClone(formTempInfo);
        formCopy[editSelector.index].bulletItems[id] = value;
        setFormTempInput(formCopy);
    }

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



    const handleOnKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent the default form submission
            console.log("Prevented Submission from clicking enter on the input field")
        }
    }

    const addDutyClickHandler = () => {
        // add another element to the array of bullet items temporarily.


        // let formCopy = structuredClone(formTempInfo);
        // formCopy[editSelector.index].bulletItems = [...formCopy[editSelector.index].bulletItems, ''];
        // setFormTempInput(formCopy);
        setFormTempInput((prevState) => {
            const updatedBulletItems = [...prevState[editSelector.index].bulletItems,
                '' // new empty bullet
            ]
            return prevState.map((item, index) =>
                index === editSelector.index ? { ...item, bulletItems: updatedBulletItems } : item)
        })


    }

    const deleteBulletCallback = (e) =>{

        const { id } = e.target;

        setFormTempInput((prevState) => {
            const copyBulletItems = [...prevState[editSelector.index].bulletItems];
            copyBulletItems.splice(id,1);
            // console.log("butllet items:");
            // console.log(copyBulletItems);
            return prevState.map((item, index) =>
                index === editSelector.index ? { ...item, bulletItems: copyBulletItems } : item)
        })
    }


    if (!suppressOutput) {
        // console.log("calling ExperienceForm withKU this defaultExperienceInfo:");
        // console.table(defaultExperiencesInfo);
        console.log(`editSelector is ${editSelector.index} and editMode is ${editMode}`)
        console.log(editSelector.index);

        console.log("the current form data is: ");
        console.table(formInfo);
        console.log("the current form info bullets are: ");
        console.log(formInfo[1].bulletItems);

        console.log("the current temp form data is: ");
        console.table(formTempInfo);
        console.log("the current temp form info bullets are: ");
        console.log(formTempInfo[1].bulletItems);

        console.log(`formTempInfo[editSelector].company is ${!editMode ? "" : formTempInfo[editSelector.index].company}`)
    }
    return (

        <form onSubmit={handleFormSubmit} className='edit-experience-form'>
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
            {editMode && <fieldset className='bullets-fieldset'>
                <legend>Duties:</legend>
                {
                    formTempInfo[editSelector.index].bulletItems.map((item, index) =>
                        // <p key={index}>Hi</p>
                        <div className='bullets-with-delete' key={index}>
                            <textarea
                                
                                id={index}
                                className='form-input-text-size custom-textarea-bullets'
                                type="text"

                                name={`bullet${index}`}

                                required
                                disabled={!editMode}
                                onChange={handleBulletChange}
                                onKeyDown={handleOnKeyDown}
                                value={item}
                            />
                            <button  id={index} type='button'className='bullet-delete' onClick={deleteBulletCallback}>Delete</button>
                        </div>
                    )}
                <button type='button' onClick={addDutyClickHandler}>Add Duty</button>
            </fieldset>}

            {editMode &&
                <SubmitAndCancelButtonRow
                    submitCallback={handleFormSubmit}
                    cancelCallback={handleCancel} />}
        </form>





    )


}