import '../styles/CvMaker.css';

import { useState } from 'react';
import { editSelectorNames } from '../constants/constants';
import {
  defaultGeneralInfo,
  defaultExperiencesInfo,
  defaultEducationInfo,
  defaultContactInfo,
  defaultSkillsInfo
} from '../data/defaultData';

import { PictureForm } from './InputFormSection/PictureForm';

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
import defaultProfilePic from '../assets/croppedpic.jpg';

function CvMaker() {

  const suppressOutput = false;
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



  // Profile Picture; 

  const [selectedImage, setSelectedImage] = useState(defaultProfilePic);

 

  const handleImageChange = (e) => {
    
    if (!suppressOutput) {
      console.log("In Image Selection Change handler");
      console.log("selectedImage is " + selectedImage);
      console.log(e);
    }
 
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      }

      reader.readAsDataURL(file);
    }
  }
  // ----------------------------- General Info -----------------------------------
  // General Info In CV:
  const [generalInfoCvDataObject, setGeneralInformationCvObject] = useState(defaultGeneralInfo);


  // Handle Submit Form Data
  const handleGeneralInfoDataFormClose = () => {
    console.log("Closing the General Info Form");
    setEditSelectorMain(nothingBeingSelected);
  }



  // ----------------------------- Experiences -----------------------------------

  // Experience
  const [experiencesCvDataObject, setExperiencesCvObject] = useState(defaultExperiencesInfo);


  // Handle Submit Form Data
  const handleExperiencesFormClose = () => {
    console.log("Closing the Experience Form");
    setEditSelectorMain(nothingBeingSelected);
  }
  // Cancel handled by one common function



  // Experience in CV Edit Button Callback:
  const handleExperiencesRelatedDataEditClick = (arg) => {
    // Essentially this sets edit mode true in the edit form. 
    console.log("---------Edit Button pressed on an experience!---------")
    console.log(`arg is ${arg} type is ${typeof arg} converted to number is ${typeof Number(arg)}`)
    setEditSelectorMain({ sectionName: editSelectorNames.experienceInfo, index: Number(arg) });

  }

  // ----------------------------- Education -----------------------------------
  const [educationInfoCvDataObject, setEducationInfoCvObject] = useState(defaultEducationInfo);
  // Handle Submit Form Data
  const handleEducationFormClose = () => {
    console.log("Closing the Education Form");
    setEditSelectorMain(nothingBeingSelected);
  }

  const handleEducationDataEditClick = (arg) => {
    // Essentially this sets edit mode true in the edit form. 
    console.log("---------Edit Button pressed on an Education!---------")
    console.log(`arg is ${arg} type is ${typeof arg} converted to number is ${typeof Number(arg)}`)
    setEditSelectorMain({ sectionName: editSelectorNames.educationInfo, index: Number(arg) });

  }

  // ---------------Contact Info ---------------
  // Education In CV:
  const [contactInfoCvDataObject, setContactInfoCvObject] = useState(defaultContactInfo);

  // Handle Submit Form Data
  const handleContactInputDataFormClose = () => {
    console.log("Closing the Contact Form");
    setEditSelectorMain(nothingBeingSelected);
  }


  // ---------------Skills Info ---------------

  // Education In CV:
  const [skillsInfoCvDataObject, setSkillsInfoCvObject] = useState(defaultSkillsInfo);



  // Handle Submit Form Data
  const handleSkillsInputDataFormClose = () => {
    console.log("Closing the Skills Form");
    // Delete any skills that are empty
    setSkillsInfoCvObject((prevState) => {
      return prevState.filter((skill) => {
        return skill.skillName != ''
      });
    });


    setEditSelectorMain(nothingBeingSelected);
  }

  const handleSkillsInfoDataEditClick = (arg) => {
    // Essentially this sets edit mode true in the edit form. 
    console.log("---------Edit Button pressed on Skill info!---------")
    console.log(`arg is ${arg}`)
    setEditSelectorMain({ sectionName: editSelectorNames.skillsInfo, index: Number(arg) });

  }

  // const handleExperienceChangeEditSelectorCall = (arg) => {
  //   console.log("Changing the edit selector! arg is: ");
  //   console.log(arg);
  //   console.log("Edit Selector before update is:  ");
  //   console.log(editSelectorMain);
  //   console.log("Calling setEditSelectorMain")
  //   setEditSelectorMain({sectionName: editSelectorNames.experienceInfo, index: experiencesCvDataObject.length});
  // }

  if (!suppressOutput) {
    console.log('educationInfoCvDataObject is: ')
    console.log(educationInfoCvDataObject);
    console.log("edit selector is: ");
    console.log(editSelectorMain);
  }

  return (
    <>
      {/* CV */}
      <section className="cv">

        <div className="cv-top-banner"></div>
        <CvHeading
          firstName={generalInfoCvDataObject.firstName}
          lastName={generalInfoCvDataObject.lastName}
          miniIntro={generalInfoCvDataObject.miniIntro}
          selectedPhoto={selectedImage} />
        <div className="cv-left-column-background"></div>
        <div className='cv-left-info-column'>

          <CvContactSection
            contactInfo={contactInfoCvDataObject}
            editSelector={editSelectorMain}

          />
          <CvEducationSection
            educations={educationInfoCvDataObject}
            editSelector={editSelectorMain}
            onEdit={handleEducationDataEditClick}
          />
          <CvSkillsSection
            skills={skillsInfoCvDataObject}
            editSelector={editSelectorMain}
            onEdit={handleSkillsInfoDataEditClick}
          />

        </div>

        <div className='cv-right-info-column'>

          <CvExperienceSection
            experiences={experiencesCvDataObject}
            editSelector={editSelectorMain}
            onEdit={handleExperiencesRelatedDataEditClick}
            changeExperienceHandler={setExperiencesCvObject}
          />
        </div>


      </section>

      {/* Edit Section */}
      <section className="edit-cv-section">
        <div className="input-section-card">
          <PictureForm handlePictureSelectionChange={handleImageChange} />
        </div>
        <div className="input-section-card">
          <GeneralInfoForm
            editSelector={editSelectorMain}
            changeEditSelector={setEditSelectorMain}
            handleFormClose={handleGeneralInfoDataFormClose}
            generalInfo={generalInfoCvDataObject}
            generalInfoChangeHandler={setGeneralInformationCvObject} />

        </div>

        <div className="input-section-card">
          <SkillsForm
            editSelector={editSelectorMain}
            changeEditSelector={setEditSelectorMain}
            handleFormClose={handleSkillsInputDataFormClose}
            skillsInfo={skillsInfoCvDataObject}
            skillsInfoChangeHandler={setSkillsInfoCvObject} />

        </div>
        <div className="input-section-card">
          <ContactForm
            editSelector={editSelectorMain}
            changeEditSelector={setEditSelectorMain}
            handleFormClose={handleContactInputDataFormClose}
            contactFormInfo={contactInfoCvDataObject}
            contactFormChangeHandler={setContactInfoCvObject} />

        </div>
        <div className="input-section-card">
          <ExperiencesForm
            editSelector={editSelectorMain}
            changeEditSelector={setEditSelectorMain}
            handleFormClose={handleExperiencesFormClose}
            experienceInfo={experiencesCvDataObject}
            experienceInfoChangeHandler={setExperiencesCvObject}
          />
        </div>
        <div className="input-section-card">
          <EducationForm
            editSelector={editSelectorMain}
            changeEditSelector={setEditSelectorMain}
            handleFormClose={handleEducationFormClose}
            educationFormInfo={educationInfoCvDataObject}
            educationFormChangeHandler={setEducationInfoCvObject}
          />
        </div>

      </section>


    </>
  );
}



export default CvMaker
