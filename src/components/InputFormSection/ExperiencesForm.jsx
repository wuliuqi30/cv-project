import { editSelectorNames } from '../../constants/constants';
import { CloseButton } from './CloseButton';
import { BasicTextInputRow } from './BasicTextInputRow';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

export function ExperiencesForm({
    editSelector,
    changeEditSelector,
    handleFormClose,
    experienceInfo,
    experienceInfoChangeHandler }) {

    const suppressOutput = false;

    if (!suppressOutput) {
        console.log("Re-rendering Experience Form: ")
    }

    const emptyExperience = {   
        id: experienceInfo.length,
        company: "", 
        title: "",
        location: "",
        startDate: new Date(), 
        endDate: new Date(), 
        bulletItems: [""]       
    };

    const editMode = editSelector.sectionName === editSelectorNames.experienceInfo ? true : false;


    const handleEditClick = (e) => {
        const { name, value } = e.target;
        if (!suppressOutput) {
            console.log("Event is:")
            console.log(e);
            console.log("-------------Changing Experience Info--------------------------------");
            console.log(e.target);
            console.log(`name ${name}  and value: ${value}`);
        }

        experienceInfoChangeHandler(prevState =>
            prevState.map((item, index) => index === editSelector.index ? { ...item, [name]: value } : item)
        );
    };

    const handleBulletChange = (e) => {

        const { name, value, id } = e.target;
        if (!suppressOutput) {
            console.log("----------------------Changing Experience Bullet --------------------------------");
            console.log("in handlebulletchange, Event e is:")
            console.log(e);
            console.log(e.target);
            console.log(`name ${name}  and value: ${value} and id ${id}`);
        }
        const numberifiedId = Number(id);
        experienceInfoChangeHandler(prevState =>
            prevState.map((experience, index) => {
                console.log(`index is ${index}, editSelector.index is ${editSelector.index}, experience is: `);
                console.log(experience);
                return index === editSelector.index ?
                    {...experience, bulletItems: experience.bulletItems.map((bullet, bulletIndex) => { 
                        console.log(`bulletIndex is ${bulletIndex} type is ${typeof bulletIndex} and id is ${id } and of type: ${typeof id} bullet is`);
                        console.log(bullet);
                        if(bulletIndex === numberifiedId){
                            console.log(`bullet ${bullet} of should be set to value= ${value}`);
                        }

                        return bulletIndex === numberifiedId ? value : bullet})} : experience})
        );
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
        let tempInfoClone = structuredClone(formTempInfo);
        tempInfoClone = tempInfoClone.map((item, index) => {
            if (index === editSelector.index) {
                return { ...item, bulletItems: item.bulletItems.filter(item => item !== "") }
            } else {
                return item;
            }
        }
        )
        setFormTempInput(tempInfoClone);

        setFormInput(tempInfoClone);


        onDataSubmit(tempInfoClone);
        if (!suppressOutput) {
            console.log("Form Submitted");
            console.log("New Experience Info iwas just updated with updatedState =  ");
            console.table(tempInfoClone);
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

    const deleteBulletCallback = (e) => {

        const { id } = e.target;

        setFormTempInput((prevState) => {
            const copyBulletItems = [...prevState[editSelector.index].bulletItems];
            copyBulletItems.splice(id, 1);
            // console.log("butllet items:");
            // console.log(copyBulletItems);
            return prevState.map((item, index) =>
                index === editSelector.index ? { ...item, bulletItems: copyBulletItems } : item)
        })
    }

    const addNewExperienceHandler = (e) => {
        console.log("Adding an Experience:");
        e.preventDefault();
        
        experienceInfoChangeHandler((prevState) => [...prevState, emptyExperience]);
        console.log("Calling changeEditSelector:");
        changeEditSelector({sectionName: editSelectorNames.experienceInfo, index: experienceInfo.length});
    }


    if (!suppressOutput) {
        // console.log("calling ExperienceForm withKU this defaultExperienceInfo:");
        // console.table(defaultExperiencesInfo);
        console.log(`editSelector is ${editSelector.index} and editMode is ${editMode}`)
        console.log(editSelector.index);
        console.log("experienceInfo is: ");
        console.table(experienceInfo);

    }

    return (

        <form className='edit-form'>
            <h2>Click an Experience on the CV To Edit</h2>
            <button onClick={addNewExperienceHandler}>Add A New Experience</button>
            {editMode &&
                <>
                    <BasicTextInputRow
                        labelText={"Company Name"}
                        placeholderText={"?"}
                        handleInputTextChange={handleEditClick}
                        inputText={!editMode ? "" : experienceInfo[editSelector.index].company}
                        htmlForIdentifier={"company"}
                        disabled={!editMode}
                         />
                    <BasicTextInputRow
                        labelText={"Job Title"}
                        placeholderText={"?"}
                        handleInputTextChange={handleEditClick}
                        inputText={!editMode ? "" : experienceInfo[editSelector.index].title}
                        htmlForIdentifier={"title"}
                        disabled={!editMode}
                         />
                    <BasicTextInputRow
                        labelText={"Location"}
                        placeholderText={"?"}
                        handleInputTextChange={handleEditClick}
                        inputText={!editMode ? "" : experienceInfo[editSelector.index].location}
                        htmlForIdentifier={"location"}
                        disabled={!editMode}
                         />

                    <div className='basic-form-input-row'>
                        <div className='date-block'>
                            <label htmlFor='dateStart'>
                                From:
                            </label>
                            <DatePicker
                                selected={!editMode ? new Date() : experienceInfo[editSelector.index].startDate}
                                onChange={handleStartDateInfoChange}

                                startDate={!editMode ? new Date() : experienceInfo[editSelector.index].startDate}
                                endDate={!editMode ? new Date() : experienceInfo[editSelector.index].startDate}
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
                                selected={!editMode ? new Date() : experienceInfo[editSelector.index].endDate}
                                onChange={handleEndDateInfoChange}

                                startDate={!editMode ? new Date() : experienceInfo[editSelector.index].endDate}
                                endDate={!editMode ? new Date() : experienceInfo[editSelector.index].endDate}
                                dateFormat="MM/yyyy"
                                showMonthYearPicker
                                disabled={!editMode}
                            />
                        </div>

                    </div>
                    <fieldset className='bullets-fieldset'>
                        <legend>Duties:</legend>
                        {
                            experienceInfo[editSelector.index].bulletItems.map((item, index) =>
                                // <p key={index}>Hi</p>
                                <div className='bullets-with-delete' key={index}>
                                    <textarea

                                        id={index}
                                        className='form-input-text-size custom-textarea-bullets'
                                        type="text"
                                        name={`bullet${index}`}                                        
                                        disabled={!editMode}
                                        onChange={handleBulletChange}
                                        onKeyDown={handleOnKeyDown}
                                        value={item}
                                    />
                                    <button id={index} type='button' className='bullet-delete' onClick={deleteBulletCallback}>Delete</button>
                                </div>
                            )}
                        <button type='button' onClick={addDutyClickHandler}>Add Duty</button>
                    </fieldset>


                    <CloseButton
                        closeCallBack={handleFormClose}
                    />
                </>}
        </form>





    )


}