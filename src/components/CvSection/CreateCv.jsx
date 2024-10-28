import { CvHeading } from './CvHeading';
import { CvExperienceSection } from './CvExperienceSection';
import { CvEducationSection } from './CvEducationSection';
import { CvContactSection } from './CvContactSection';
import { CvSkillsSection } from './CvSkillsSection';

export function CreateCv({
    editSelectorMain,
    handleSectionDataEditClick,
    generalInfoCvDataObject,
    contactInfoCvDataObject,
    educationCvDataObject,
    skillsInfoCvDataObject,
    experiencesCvDataObject,
    addItemClickHandler,
}) {
    
    return(
    <section className="cv">
        <div className='top-banner'></div>
        <CvHeading
          firstName={generalInfoCvDataObject.firstName}
          lastName={generalInfoCvDataObject.lastName}
          summary={generalInfoCvDataObject.summary}
          editSelector={editSelectorMain}
          onEdit={handleSectionDataEditClick}
        />
        <div className='cv-left-column-background'>
        </div>
        <div className='cv-left-column'>

          <CvContactSection
            contactInfo={contactInfoCvDataObject}
            editSelector={editSelectorMain}
            onEdit={handleSectionDataEditClick}
          />
          <CvEducationSection
            educations={educationCvDataObject}
            editSelector={editSelectorMain}
            onEdit={handleSectionDataEditClick}
          />
          <CvSkillsSection
            skills={skillsInfoCvDataObject}
            editSelector={editSelectorMain}
            onEdit={handleSectionDataEditClick}
          />
        </div>
        <CvExperienceSection
          experiences={experiencesCvDataObject}
          editSelector={editSelectorMain}
          onEdit={handleSectionDataEditClick}
          onAdd={addItemClickHandler}
        />


      </section>
    )
      
}