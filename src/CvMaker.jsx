import './CvMaker.css'
import { GeneralInfoForm } from './components/GeneralInfoForm';
import { useState } from 'react';
import { CvHeading } from './components/CvHeading';
import { defaultGeneralInfo, defaultExperiencesInfo } from './components/defaultData';
import { CvExperienceSection } from './components/CvExperienceSection';
import { ExperiencesForm } from './components/ExperiencesForm';
import { editSelectorNames } from './constants';


function CvMaker() {


  // this console.log runs every time the component renders
  // console.log("during render:");

  // For a editable section, there's an edit button.
  // When you click edit, each piece of text that was just being displayed as h1 or p etc. turns into an input of the same size and formatting
  // The edit button also turns into a submit button. Then when you click submit, the submit button becomes an edit button, the inputs become
  // actual text.
  // Each editable section should have a state, which is "editing" or "notEditing". If editing, it returns an input. If "notEditing" it returns text


  // States:
  // A single editSelector object controls which thing is being edited. 
  // editselector: {sectionName: 'general', index: -1}
  // section name is like Experiences, general infomation, etc., index is what sub item in that form is being edited, like experience 1, 2, 3 etc. 


  const nothingBeingSelected = { sectionName: editSelectorNames.none, index: -1 };
  const [editSelectorMain, setEditSelectorMain] = useState(nothingBeingSelected);

  // Handle Cancel Form Data
  const handleCancelEditInput = () => {
    setEditSelectorMain(nothingBeingSelected);
  }


  // ----------------------------- General Info -----------------------------------

  // Handle Submit Form Data
  const handleGeneralInfoInputDataSubmit = (newData) => {
    setGeneralInformationCvObject(newData);
    setEditSelectorMain(nothingBeingSelected);
  }

 // Cancel handled by one common function

  // General Info In CV:
  const [generalInfoCvDataObject, setGeneralInformationCvObject] = useState(defaultGeneralInfo);

  // General Info in CV Edit Button Callback:
  const handleGeneralInfoRelatedDataEditClick = () => {
    // Essentially this sets edit mode true in the edit form. 
    console.log("general info object is:")
    console.table(generalInfoCvDataObject)
    setEditSelectorMain({ sectionName: editSelectorNames.generalInfo, index: -1 });

  }


  // ----------------------------- Experiences -----------------------------------


  // Handle Submit Form Data
  const handleExperiencesInputDataSubmit = (newData) => {
    setExperiencesCvObject(newData);
    setEditSelectorMain(nothingBeingSelected);
  }
  // Cancel handled by one common function

  // Experience In CV:
  const [experiencesCvDataObject, setExperiencesCvObject] = useState(defaultExperiencesInfo);

  // Experience in CV Edit Button Callback:
  const handleExperiencesRelatedDataEditClick = (arg) => {
    // Essentially this sets edit mode true in the edit form. 
    console.log("---------Edit Button pressed on an experience!---------")
    console.log(`arg is ${arg}`)
    setEditSelectorMain({sectionName: editSelectorNames.experienceInfo, index: arg});

  }




  return (
    <>
      <section className="edit-cv-section">
        <div className="input-section-card">
          <GeneralInfoForm
            editSelector={editSelectorMain}
            onDataSubmit={handleGeneralInfoInputDataSubmit}
            onDataCancel={handleCancelEditInput} />

        </div>
        <div className="input-section-card">
          <ExperiencesForm
            editSelector={editSelectorMain}
            onDataSubmit={handleExperiencesInputDataSubmit}
            onDataCancel={handleCancelEditInput}

          />
        </div>
      </section>

      <section className="cv">


        <CvHeading
          firstName={generalInfoCvDataObject.firstName}
          lastName={generalInfoCvDataObject.lastName}
          editSelector={editSelectorMain}
          onEdit={handleGeneralInfoRelatedDataEditClick}
        />
        <CvExperienceSection
          experiences={experiencesCvDataObject}
          editSelector={editSelectorMain}
          onEdit={handleExperiencesRelatedDataEditClick}
        />

      </section>
    </>
  );
}



export default CvMaker
