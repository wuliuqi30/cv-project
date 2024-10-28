import { editSelectorNames } from '../../constants/constants';
import { CloseButton } from './CloseButton';
import 'react-datepicker/dist/react-datepicker.css';

export function SkillsForm({ editSelector, handleFormClose, skillsInfo, skillsInfoChangeHandler }) {

    const suppressOutput = true;

    // formInfo here is an array of many possible different experiences. The one displayed will go into formTempInfo, which is not an array, but a single object.
    const editMode = editSelector.sectionName === editSelectorNames.skillsInfo ? true : false;

    const emptySkill = { id: null, skillName: '', yearsExp: 0, skillType: '' };

    const handleSkillChange = (e) => {

        const { name, value, id } = e.target;

        if (!suppressOutput) {
            console.log("-----------------Changing Form Temp Info--------------------------------");
            console.log("in handlebulletchange, Event e is:")
            console.log(e);
            console.log(e.target);
            console.log(`name ${name}  and value: ${value} and id ${id}`);
        }



        skillsInfoChangeHandler((prevState) => {
            return prevState.map((skill, index) => {
                return id == index ? { ...skill, [name]: value } : skill;
            });
        });
    }

    const handleOnKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent the default form submission
            console.log("Prevented Submission from clicking enter on the input field")
        }
    }

    const handleAddSkill = () => {
        console.log("Adding a skill:");
        skillsInfoChangeHandler((prevState) => [...prevState, emptySkill]);
    }

    const handleDeleteSkill = (e) =>{
        e.preventDefault();
        const {  id } = e.target;

        console.log("Deleting a skill:");
        skillsInfoChangeHandler((prevState) => {
            return prevState.filter((skill, index) => {
                return id != index;
            });
        });
    }

    return (

        <form className='edit-form'>
            <h2>Click on CV To Edit Skills</h2>

            {editMode &&
                <>
                    <fieldset className='skills-fieldset'>
                        <p className='skill-list-column-header'>Skill:</p>
                        <p className='skill-list-column-header'>Type:</p>
                        <p className='skill-list-column-header'>Years Experience</p>
                        <p className='skill-list-column-header'></p>
                        {
                            skillsInfo.map((item, index) =>

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
                                        name="yearsExp"
                                        disabled={!editMode}
                                        value={item.yearsExp}
                                        onChange={handleSkillChange}
                                        onKeyDown={handleOnKeyDown}
                                        required
                                    />
                                    <button className='skill-delete-button'
                                        onClick={handleDeleteSkill}
                                    >Delete</button>

                                </>

                            )}

                    </fieldset>
                    <CloseButton
                        closeCallBack={handleFormClose}
                    />
                    <button
                        onClick={handleAddSkill}
                    >Click to Add Skill</button>

                </>}
        </form>





    )


}