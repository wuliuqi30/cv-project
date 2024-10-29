
import { editSelectorNames } from '../../constants/constants';
import { CloseButton } from './CloseButton';
import { BasicTextInputRow } from './BasicTextInputRow';
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

export function EducationForm({
    editSelector,
    changeEditSelector,
    handleFormClose,
    educationFormInfo,
    educationFormChangeHandler
}) {

    const suppressOutput = true;
    if (!suppressOutput) {
        console.log("Re-rendering Education Form: ")

    }
    // formInfo here is an array of many possible different experiences. The one displayed will go into formTempInfo, which is not an array, but a single object.
    const editMode = editSelector.sectionName === editSelectorNames.educationInfo ? true : false;

    if (!suppressOutput) {
        console.log("editMode: ", editMode)

    }


    const handleEducationNonDateInfoChange = (e) => {



        const { name, value } = e.target;

        if (!suppressOutput) {

            console.log("-----------------Changing Education Form Info--------------------------------");
            console.log("Event is:");
            console.log(e);
            console.log("e.target:");
            console.log(e.target);
            console.log(`name ${name}  and value: ${value}`);
        }

        educationFormChangeHandler(prevState =>
            prevState.map((item, index) => index === editSelector.index ? { ...item, [name]: value } : item)
        );

    };

    const handleDateChange = (field) => (date) => {
        if (!suppressOutput) {
            console.log("Calling Higher Order Date Change Function")
        }
        educationFormChangeHandler(prevState =>
            prevState.map((item, index) => index === editSelector.index ? { ...item, [field]: date } : item)
        );
    };

    const clickEducationFormHandler = (e) => {
        console.log("Opening Education Form.");
        e.preventDefault();

        const { id } = e.target;
        changeEditSelector({ sectionName: editSelectorNames.educationInfo, index: Number(id) });

    }

    const deleteExperienceHandler = (e) => {
        const { id } = e.target;
        console.log(`Deleting Education, target id is: ${id}`);
        educationFormChangeHandler((prevState) => prevState.filter((education) => education.id != id));

    }

    return (
        <>
            <div className='edit-form-title'>Click an Education on the CV To Edit</div>
            <div className='edit-form-list'>
                {educationFormInfo.map((education, index) => {
                    return (
                        <>
                            {education.id != editSelector.index &&
                                <div key = {index} className='edit-form-heading-row-with-delete'>
                                    <button
                                        id={education.id}
                                        onClick={clickEducationFormHandler}
                                        className={"education-form-heading"}
                                        key={education.id}>{education.school} started {format(education.startDate, "MMM/yy")}
                                    </button>
                                    <button id={index} onClick={deleteExperienceHandler} className='delete-item-button'>Delete</button>
                                </div>
                            }
                            {education.id == editSelector.index &&

                                <form key = {index}  className='edit-form'>
                                    <BasicTextInputRow
                                        labelText={"School Name"}
                                        placeholderText={"?"}
                                        handleInputTextChange={handleEducationNonDateInfoChange}
                                        inputText={!editMode ? "" : educationFormInfo[editSelector.index].school}
                                        htmlForIdentifier={"school"}
                                        disabled={!editMode}
                                        required />
                                    <BasicTextInputRow
                                        labelText={"Degree"}
                                        placeholderText={"?"}
                                        handleInputTextChange={handleEducationNonDateInfoChange}
                                        inputText={!editMode ? "" : educationFormInfo[editSelector.index].degree}
                                        htmlForIdentifier={"degree"}
                                        disabled={!editMode}
                                        required />
                                    <BasicTextInputRow
                                        labelText={"Major"}
                                        placeholderText={"?"}
                                        handleInputTextChange={handleEducationNonDateInfoChange}
                                        inputText={!editMode ? "" : educationFormInfo[editSelector.index].major}
                                        htmlForIdentifier={"major"}
                                        disabled={!editMode}
                                        required />
                                    <BasicTextInputRow
                                        labelText={"GPA"}
                                        placeholderText={"?"}
                                        handleInputTextChange={handleEducationNonDateInfoChange}
                                        inputText={!editMode ? "" : educationFormInfo[editSelector.index].gpa}
                                        htmlForIdentifier={"gpa"}
                                        disabled={!editMode}
                                        required />
                                    <BasicTextInputRow
                                        labelText={"Location"}
                                        placeholderText={"?"}
                                        handleInputTextChange={handleEducationNonDateInfoChange}
                                        inputText={!editMode ? "" : educationFormInfo[editSelector.index].location}
                                        htmlForIdentifier={"location"}
                                        disabled={!editMode}
                                        required />

                                    <div className='basic-form-input-row'>
                                        <div className='date-block'>
                                            <label htmlFor='dateStart'>
                                                From:
                                            </label>
                                            <DatePicker
                                                selected={!editMode ? new Date() : educationFormInfo[editSelector.index].startDate}
                                                onChange={handleDateChange("startDate")}

                                                startDate={!editMode ? new Date() : educationFormInfo[editSelector.index].startDate}
                                                endDate={!editMode ? new Date() : educationFormInfo[editSelector.index].startDate}
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
                                                selected={!editMode ? new Date() : educationFormInfo[editSelector.index].endDate}
                                                onChange={handleDateChange("endDate")}

                                                startDate={!editMode ? new Date() : educationFormInfo[editSelector.index].endDate}
                                                endDate={!editMode ? new Date() : educationFormInfo[editSelector.index].endDate}
                                                dateFormat="MM/yyyy"
                                                showMonthYearPicker
                                                disabled={!editMode}
                                            />
                                        </div>

                                    </div>
                                    <CloseButton
                                        closeCallBack={handleFormClose}
                                    />

                                </form>
                            }

                        </>
                    )


                })}

            </div>
        </>




    )


}