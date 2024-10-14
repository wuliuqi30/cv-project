import './CvMaker.css'
import { EditableSection } from './editableSection';
import { List } from './List';
import { GeneralInfoForm } from './components/GeneralInfoForm';
import React from 'react';
import { useState } from 'react';
import { CvHeading } from './components/CvHeading';
import { defaultGeneralInfo } from './components/defaultData';

function CvMaker() {


  // this console.log runs every time the component renders
  console.log("during render:");

  // For a editable section, there's an edit button.
  // When you click edit, each piece of text that was just being displayed as h1 or p etc. turns into an input of the same size and formatting
  // The edit button also turns into a submit button. Then when you click submit, the submit button becomes an edit button, the inputs become
  // actual text.
  // Each editable section should have a state, which is "editing" or "notEditing". If editing, it returns an input. If "notEditing" it returns text

  const [generalInfoEditMode, setGeneralInfoEditMode] = useState(true)


  const [generalInfoCvDataObject, setGeneralInformationCvObject] = useState(defaultGeneralInfo);

  const handleGeneralInfoInputDataSubmit = (newData) => {
    setGeneralInformationCvObject(newData);
    setGeneralInfoEditMode(false);
  }
  
  const handleGeneralInfoDataCancel = () => {
    setGeneralInfoEditMode(false);
  }

  // This function is for anytime an edit button on the cv clicks something that is related to general info.
  const handleGeneralInfoRelatedDataEditClick = () => {
    
    // Essentially this sets edit mode true in the edit form. 
    console.log("general info object is:")
    console.table(generalInfoCvDataObject)
    setGeneralInfoEditMode(true);


  }

  // console.log(`generalInfoDataObject is`);
  // console.table(generalInfoDataObject);
  return (
    <>
      <section className="edit-cv-section">
        <div className="general-info-form-card">
          <GeneralInfoForm 
          editMode={generalInfoEditMode} 
          onGeneralInfoDataSubmit={handleGeneralInfoInputDataSubmit}
          onGeneralInfoDataCancel={handleGeneralInfoDataCancel} />
        </div>
      </section>
      <section className="cv">

        
        <CvHeading
          firstName={generalInfoCvDataObject.firstName}
          lastName={generalInfoCvDataObject.lastName}
          editMode={generalInfoEditMode}
          onEdit={handleGeneralInfoRelatedDataEditClick}
           />




      </section>
    </>
  );
}



export default CvMaker
