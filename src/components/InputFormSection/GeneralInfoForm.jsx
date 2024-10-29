import { editSelectorNames } from '../../constants/constants';
import { BasicTextInputRow } from './BasicTextInputRow';
import { CloseButton } from './CloseButton';

export function GeneralInfoForm({
    editSelector,
    changeEditSelector,
    handleFormClose,
    generalInfo,
    generalInfoChangeHandler }) {

    const suppressOutput = true;

    if (!suppressOutput) {
        console.log("--- Running General Info From -----")
    }
    // Are we in edit mode for this section?
    const editMode = editSelector.sectionName === editSelectorNames.generalInfo ? true : false;
    if (!suppressOutput) {
        console.log("- editMode -----", editMode)
    }

    const handleGeneralInfoChange = (e) => {

        const { name, value } = e.target;
        if (!suppressOutput) {
            console.log("--------Editing General Info---------");
        }
        generalInfoChangeHandler({ ...generalInfo, [name]: value });
    };


    if (!suppressOutput) {
        console.log('generalInfo is: ');
        console.log(generalInfo);

    }

    const clickGeneralInfoFormHandler = (e) => {
        console.log("Clicking General Info Form open the form.");
        e.preventDefault();


        changeEditSelector((prevState) => {
            return { ...prevState, sectionName: editSelectorNames.generalInfo }
        });


    }

    return (

        <>

            <button 
                onClick={clickGeneralInfoFormHandler}
                className={"edit-form-title"}>
                Click to edit General Information
                </button>
            {editMode &&
                <form >
                    <BasicTextInputRow
                        labelText={"First Name"}
                        placeholderText={"Type First Name Here"}
                        handleInputTextChange={handleGeneralInfoChange}
                        inputText={!editMode ? "" : generalInfo.firstName}
                        htmlForIdentifier={"firstName"}
                        disabled={!editMode}
                        required />
                    <BasicTextInputRow
                        labelText={"Last Name"}
                        placeholderText={"Type Last Name Here"}
                        handleInputTextChange={handleGeneralInfoChange}
                        inputText={!editMode ? "" : generalInfo.lastName}
                        htmlForIdentifier={"lastName"}
                        disabled={!editMode}
                        required />

                    <CloseButton
                        closeCallBack={handleFormClose}
                    />
                </form>}

        </>




    )


}