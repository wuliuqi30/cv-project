import '../styles/CvMaker.css';

import { useState } from 'react';
import { editSelectorNames } from '../constants/constants';
import { defaultGeneralInfo, 
  defaultExperiencesInfo, 
  defaultEducationInfo, 
  defaultContactInfo,
  defaultSkillsInfo } from '../data/defaultData';

import { GeneralInfoForm } from './InputFormSection/GeneralInfoForm';
import { CvHeading } from './CvSection/CvHeading';

import { ExperiencesForm } from './InputFormSection/ExperiencesForm';
import { CvExperienceSection } from './CvSection/CvExperienceSection';

import { EducationForm } from './InputFormSection/EducationForm';
import { CvEducationSection } from './CvSection/CvEducationSection';

import { ContactForm } from './InputFormSection/ContactForm';
import { CvContactSection } from './CvSection/CvContactSection';

import { CvSkillsSection } from './CvSection/CvSkillsSection';
import { SkillsForm } from './InputFormSection/SkillsForm';


function CvMaker() {

  const suppressOutput = true;
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
    setEditSelectorMain({ sectionName: editSelectorNames.experienceInfo, index: arg });

  }

  // ----------------------------- Education -----------------------------------

  // Handle Submit Form Data
  const handleEducationInputDataSubmit = (newData) => {
    setEducationCvObject(newData);
    setEditSelectorMain(nothingBeingSelected);
  }

  // Education In CV:
  const [educationCvDataObject, setEducationCvObject] = useState(defaultEducationInfo);


  const handleEducationDataEditClick = (arg) => {
    // Essentially this sets edit mode true in the edit form. 
    console.log("---------Edit Button pressed on an education!---------")
    console.log(`arg is ${arg}`)
    setEditSelectorMain({ sectionName: editSelectorNames.educationInfo, index: arg });

  }

  // ---------------Contact Info ---------------

  // Education In CV:
  const [contactInfoCvDataObject, setContactInfoCvObject] = useState(defaultContactInfo);


  // Handle Submit Form Data
  const handleContactInputDataSubmit = (newData) => {
    setContactInfoCvObject(newData);
    setEditSelectorMain(nothingBeingSelected);
  }

  const handleContactInfoDataEditClick = (arg) => {
    // Essentially this sets edit mode true in the edit form. 
    console.log("---------Edit Button pressed on contact info!---------")
    console.log(`arg is ${arg}`)
    setEditSelectorMain({ sectionName: editSelectorNames.contactInfo, index: arg });

  }

    // ---------------Skills Info ---------------

  // Education In CV:
  const [skillsInfoCvDataObject, setSkillsInfoCvObject] = useState(defaultSkillsInfo);



  // Handle Submit Form Data
  const handleSkillsInputDataSubmit = (newData) => {
    setSkillsInfoCvObject(newData);
    setEditSelectorMain(nothingBeingSelected);
  }

  const handleSkillsInfoDataEditClick = (arg) => {
    // Essentially this sets edit mode true in the edit form. 
    console.log("---------Edit Button pressed on skill info!---------")
    console.log(`arg is ${arg}`)
    setEditSelectorMain({ sectionName: editSelectorNames.skillsInfo, index: arg });

  }

  if (!suppressOutput){
    console.log("defaultSkillsInfo is: ");
    console.table(defaultSkillsInfo);
    console.log("skillsInfoCvDataObject is:");
    console.table(skillsInfoCvDataObject);
  }

  return (
    <>
      {/* CV */}
      <section className="cv">

        <CvHeading
          firstName={generalInfoCvDataObject.firstName}
          lastName={generalInfoCvDataObject.lastName}
          editSelector={editSelectorMain}
          onEdit={handleGeneralInfoRelatedDataEditClick}
        />
        <div className='cv-left-column'>
          <CvContactSection
            contactInfo={contactInfoCvDataObject}
            editSelector={editSelectorMain}
            onEdit={handleContactInfoDataEditClick}
          />
          <CvEducationSection
            educations={educationCvDataObject}
            editSelector={editSelectorMain}
            onEdit={handleEducationDataEditClick}
          />
          <CvSkillsSection
            skills={skillsInfoCvDataObject}
            editSelector={editSelectorMain}
            onEdit={handleSkillsInfoDataEditClick}
          />

        </div>
        <CvExperienceSection
          experiences={experiencesCvDataObject}
          editSelector={editSelectorMain}
          onEdit={handleExperiencesRelatedDataEditClick}
        />


      </section>

      {/* Edit Section */}
      <section className="edit-cv-section">
        <div className="input-section-card">
          <GeneralInfoForm
            editSelector={editSelectorMain}
            onDataSubmit={handleGeneralInfoInputDataSubmit}
            onDataCancel={handleCancelEditInput} />

        </div>
        
        <div className="input-section-card">
          <SkillsForm
            editSelector={editSelectorMain}
            onDataSubmit={handleSkillsInputDataSubmit}
            onDataCancel={handleCancelEditInput} />

        </div>
        <div className="input-section-card">
          <ContactForm
            editSelector={editSelectorMain}
            onDataSubmit={handleContactInputDataSubmit}
            onDataCancel={handleCancelEditInput} />

        </div>
        <div className="input-section-card">
          <ExperiencesForm
            editSelector={editSelectorMain}
            onDataSubmit={handleExperiencesInputDataSubmit}
            onDataCancel={handleCancelEditInput}

          />
        </div>
        <div className="input-section-card">
          <EducationForm
            editSelector={editSelectorMain}
            onDataSubmit={handleEducationInputDataSubmit}
            onDataCancel={handleCancelEditInput}

          />
        </div>

      </section>


    </>
  );
}



export default CvMaker