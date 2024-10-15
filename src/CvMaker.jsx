import './CvMaker.css'
import { GeneralInfoForm } from './components/GeneralInfoForm';
import { useState } from 'react';
import { CvHeading } from './components/CvHeading';
import { defaultGeneralInfo, defaultExperiencesInfo } from './components/defaultData';
import { CvExperienceSection } from './components/CvExperienceSection';
import { ExperiencesForm } from './components/ExperiencesForm';

function CvMaker() {


  // this console.log runs every time the component renders
  console.log("during render:");

  // For a editable section, there's an edit button.
  // When you click edit, each piece of text that was just being displayed as h1 or p etc. turns into an input of the same size and formatting
  // The edit button also turns into a submit button. Then when you click submit, the submit button becomes an edit button, the inputs become
  // actual text.
  // Each editable section should have a state, which is "editing" or "notEditing". If editing, it returns an input. If "notEditing" it returns text


  // States:
  
  // ----------------------------- General Info -----------------------------------
  // General Info Edit Mode
  const [generalInfoEditMode, setGeneralInfoEditMode] = useState(false);
    // Handle Submit Form Data
  const handleGeneralInfoInputDataSubmit = (newData) => {
    setGeneralInformationCvObject(newData);
    setGeneralInfoEditMode(false);
  }
    // Handle Cancel Form Data
  const handleGeneralInfoDataCancel = () => {
    setGeneralInfoEditMode(false);
  }

  // General Info In CV:
  const [generalInfoCvDataObject, setGeneralInformationCvObject] = useState(defaultGeneralInfo);
  
    // General Info in CV Edit Button Callback:
  const handleGeneralInfoRelatedDataEditClick = () => {
      // Essentially this sets edit mode true in the edit form. 
    console.log("general info object is:")
    console.table(generalInfoCvDataObject)
    setGeneralInfoEditMode(true);

  }


  // ----------------------------- Experiences -----------------------------------


  // General Info Edit Mode
  // can be -1 which means nothing selected, or 0, 1, 2 etc. as the experience item index
  const [experiencesEditIndexSelector, setExperiencesEditModeIndexSelector] = useState(-1);

    // Handle Submit Form Data
  const handleExperiencesInputDataSubmit = (newData) => {
    setExperiencesCvObject(newData);
    setExperiencesEditModeIndexSelector(-1);
  }
    // Handle Cancel Form Data
  const handleExperiencesDataCancel = () => {
    setExperiencesEditModeIndexSelector(-1);
  }



  // Experience In CV:
  const [experiencesCvDataObject, setExperiencesCvObject] = useState(defaultExperiencesInfo);
  
    // Experience in CV Edit Button Callback:
  const handleExperiencesRelatedDataEditClick = (arg) => {
      // Essentially this sets edit mode true in the edit form. 
    console.log("Experiences are:")
    console.table(experiencesCvDataObject)
    setExperiencesEditModeIndexSelector(arg);

  }




  return (
    <>
      <section className="edit-cv-section">
        <div className="general-info-form-card">
          <GeneralInfoForm
            editMode={generalInfoEditMode}
            onDataSubmit={handleGeneralInfoInputDataSubmit}
            onDataCancel={handleGeneralInfoDataCancel} />
          <ExperiencesForm 
           editSelector={experiencesEditIndexSelector}
           onDataSubmit={handleExperiencesInputDataSubmit}
           onDataCancel={handleExperiencesDataCancel}
           
          />
        </div>
      </section>
      <section className="cv">


        <CvHeading
          firstName={generalInfoCvDataObject.firstName}
          lastName={generalInfoCvDataObject.lastName}
          editMode={generalInfoEditMode}
          onEdit={handleGeneralInfoRelatedDataEditClick}
        />
        <CvExperienceSection
        experiences={experiencesCvDataObject}
        editMode={experiencesEditIndexSelector}
        onEdit={handleExperiencesRelatedDataEditClick}
        />




      </section>
    </>
  );
}



export default CvMaker
