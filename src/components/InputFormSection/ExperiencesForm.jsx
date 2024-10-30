import { editSelectorNames } from '../../constants/constants';
import { CloseButton } from './CloseButton';
import { BasicTextInputRow } from './BasicTextInputRow';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { format } from "date-fns";

export function ExperiencesForm({
    editSelector,
    changeEditSelector,
    handleFormClose,
    experienceInfo,
    experienceInfoChangeHandler }) {

    const suppressOutput = true;

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
            prevState.map((item, index) => {
                console.log(`Mapping previous state to new state, mapping index = ${index}, type: ${typeof index} editSelector.index  = ${editSelector.index}, type: ${typeof editSelector.index} index === editSelector.index? ${index === editSelector.index} `);
                return index === editSelector.index ? { ...item, [name]: value } : item
            })
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


        experienceInfoChangeHandler(prevState => {
            const updatedState = structuredClone(prevState);
            const selectedExperience = updatedState[editSelector.index];

            // Remove the specified bullet item by filtering
            selectedExperience.bulletItems[numberifiedId] = value;

            return updatedState;
        });


    }

 

    const handleDateChange = (field) => (date) => {
        if (!suppressOutput) {
            console.log("Calling Higher Order Date Change Function")
        }
        experienceInfoChangeHandler(prevState =>
            prevState.map((item, index) => index === editSelector.index ? { ...item, [field]: date } : item)
        );
    };


    const handleOnKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent the default form submission
            console.log("Prevented Submission from clicking enter on the input field")
        }
    }

    const addBulletClickHandler = () => {
        // add another element to the array of bullet items temporarily.


        // let formCopy = structuredClone(formTempInfo);
        // formCopy[editSelector.index].bulletItems = [...formCopy[editSelector.index].bulletItems, ''];
        // setFormTempInput(formCopy);
        experienceInfoChangeHandler((prevState) => {
            const updatedBulletItems = [...prevState[editSelector.index].bulletItems,
                '' // new empty bullet
            ]
            return prevState.map((item, index) =>
                index === editSelector.index ? { ...item, bulletItems: updatedBulletItems } : item)
        })

   
    }

    const deleteBulletCallback = (e) => {

        const { id } = e.target;
        // id is the bullet id.
        const numberifiedId = Number(id);
        experienceInfoChangeHandler(prevState =>
            prevState.map((experience, index) => {
                // console.log(`index is ${index}, editSelector.index is ${editSelector.index}, experience is: `);
                // console.log(experience);
                return index === editSelector.index ?
                    {
                        ...experience, bulletItems: experience.bulletItems.filter((bullet, bulletIndex) => {

                            return bulletIndex !== numberifiedId
                        })
                    } : experience
            })
        );
    }

    const addNewExperienceHandler = (e) => {
        console.log("Adding an Experience:");
        e.preventDefault();

        experienceInfoChangeHandler((prevState) => [...prevState, emptyExperience]);
        console.log("Calling changeEditSelector:");
        changeEditSelector({ sectionName: editSelectorNames.experienceInfo, index: experienceInfo.length });
    }

    const deleteExperienceHandler = (e) => {

        const { id } = e.target;
        console.log(`Deleting Experience, target id is: ${id}`);
        experienceInfoChangeHandler((prevState) => prevState.filter((experience) => experience.id != id));

    }


    const clickExperienceFormHandler = (e) => {
        console.log("Clicking an Experience on the form to open the form.");
        e.preventDefault();

        const { id } = e.target;
        changeEditSelector({ sectionName: editSelectorNames.experienceInfo, index: Number(id) });


    }

    if (!suppressOutput) {
        // console.log("calling ExperienceForm withKU this defaultExperienceInfo:");
        // console.table(defaultExperiencesInfo);
        console.log(`editSelector is ${editSelector.index} and editMode is ${editMode}`)
        console.log(editSelector.index);
        console.log("experienceInfo is: ");
        console.log(experienceInfo);

    }

    return (

        <>
            <div className='edit-form-title'>Click an experience to edit</div>
            <div className='edit-form-list'>

                {experienceInfo.map((experience, index) => {
                    return (
                        <>
                            {(!editMode || (editMode && experience.id != editSelector.index)) &&
                                <div className='edit-form-heading-row-with-delete'>
                                    <button
                                        id={experience.id}
                                        onClick={clickExperienceFormHandler}
                                        className={"experience-form-heading"}
                                        key={experience.id}>{experience.company} started {format(experience.startDate, "MMM/yy")}
                                    </button>
                                    <button id={index} onClick={deleteExperienceHandler} className='delete-item-button'>Delete</button>
                                </div>
                            }
                            {(editMode && experience.id == editSelector.index) &&
                                <form className='edit-form'>
                                     <button
                                        className='edit-form-title stop-editing-button-small'
                                        onClick={handleFormClose}
                                    >Click to stop editing
                                    </button>
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
                                                onChange={handleDateChange("startDate")}

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
                                                onChange={handleDateChange("endDate")}

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
                                        <button type='button' onClick={addBulletClickHandler}>Add Duty</button>
                                    </fieldset>
                                   
                                </form>
                            }
                        </>
                    )
                })}
                <button className='add-experience-button' onClick={addNewExperienceHandler}>Add A New Experience</button>
            </div>
        </>






    )


}