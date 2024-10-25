
import { useState } from 'react';

import { defaultSkillsInfo } from '../../data/defaultData';
import { editSelectorNames } from '../../constants/constants';

import { SubmitAndCancelButtonRow } from './SubmitAndCancelButtonRow';


import 'react-datepicker/dist/react-datepicker.css';

export function SkillsForm({ editSelector, onDataSubmit, onDataCancel }) {
    const suppressOutput = false;

    // formInfo here is an array of many possible different experiences. The one displayed will go into formTempInfo, which is not an array, but a single object.
    const editMode = editSelector.sectionName === editSelectorNames.skillsInfo ? true : false;


    const [formInfo, setFormInput] = useState(defaultSkillsInfo);

    const defaultCopyForTempInfo = structuredClone(defaultSkillsInfo);

    const [formTempInfo, setFormTempInput] = useState(defaultCopyForTempInfo);




    const handleSkillChange = (e) => {
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
        formCopy[id] = {...formCopy[id] , [name]: value} ;
        setFormTempInput(formCopy);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        setFormInput(formTempInfo);

        onDataSubmit(formTempInfo);
        if (!suppressOutput) {
            console.log("Form Submitted");
            console.log("New Skills Info was just updated with updatedState =  ");
            console.table(formTempInfo);
        }
    }

    const handleCancel = (e) => {
        e.preventDefault();
        // On cancellation, you haven't yet updated the forminfo, so you reset the temp info to what the form info is, then call the callback function, which will set edit mode to false, when then disables the form
        setFormTempInput(formInfo);
        console.log("Cancelled Skills Form Submission");
        onDataCancel();
    }

    const handleOnKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent the default form submission
            console.log("Prevented Submission from clicking enter on the input field")
        }
    }

    // const addSkillClickHandler = () => {

    //     setFormTempInput((prevState) => {
    //         const updatedBulletItems = [...prevState,'']
    //         return updatedBulletItems;
    //     })


    // }

    // const deleteBulletCallback = (e) => {

    //     const { id } = e.target;

    //     setFormTempInput((prevState) => {
    //         const copyBulletItems = [...prevState];
    //         copyBulletItems.splice(id, 1);
    //         // console.log("butllet items:");
    //         // console.log(copyBulletItems);
    //         return copyBulletItems;
    //     })
    // }

    return (

        <form onSubmit={handleFormSubmit} className='edit-form'>
            <h2>Edit Skills Info</h2>


            {editMode && <fieldset className='skills-fieldset'>
                <legend></legend>
                 
                    <p className='skill-list-column-header'>Skill:</p>
                    <p className='skill-list-column-header'>Type:</p>
                    <p className='skill-list-column-header'>Years Experience</p>
                
                {
                    formTempInfo.map((item, index) =>

                        <>
                            <textarea

                                id={index}
                                className='skill-textarea-bullets'
                                type="text"

                                name={`skillName`}

                                required
                                disabled={!editMode}
                                onChange={handleSkillChange}
                                onKeyDown={handleOnKeyDown}
                                value={item.skillName}
                            />
                            <select
                                id={index}
                                value={item.skillType}
                                onKeyDown={handleOnKeyDown}
                                onChange={handleSkillChange}
                                disabled={!editMode}                
                                required
                                name="skillType"
                                className='skill-dropdown'
                            >
                                <option value="">--Select an Skill Type--</option>
                                <option value="computer">Computer</option>
                                <option value="language">Language</option>
                            </select>
                            <input
                            id={index}
                            className='skill-years-input'
                                type="text"
                                name="skillYearsExp"
                                disabled={!editMode}
                                value={item.yearsExp}
                                onChange={handleSkillChange}
                                onKeyDown={handleOnKeyDown}
                                required
                            />
                            {/* <button id={index} type='button' className='bullet-delete' onClick={deleteBulletCallback}>Delete</button> */}
                        </>
                    )}
                {/* <button type='button' onClick={addSkillClickHandler}>Add Skill</button> */}
            </fieldset>}


            {editMode &&
                <SubmitAndCancelButtonRow
                    submitCallback={handleFormSubmit}
                    cancelCallback={handleCancel} />}
        </form>





    )


}