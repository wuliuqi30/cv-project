import { format } from "date-fns";

export function Education({
    id,
    school,
    location,
    major,
    gpa,
    degree,
    startDate,
    endDate,
    editSelectorIndex
}) {
    const suppressOutput = true;
    
    if (!suppressOutput) {
        console.log("Entered Education component");
        console.log(`id is ${id} editSelector is ${editSelectorIndex}`)
        console.log(`rendering education component: school: ${school} startdate: ${startDate} 
            enddate: ${endDate} major: ${major} etc`)
    }


    return (

        <section className={"education"}>
            <p className='education-info-heading'>
                {format(endDate, "MMM yyyy") + ' | '}
                <b>{degree}</b>
                {major != null && <span>{', ' + major}</span>}
                {gpa != null && <span>{' - GPA: ' + gpa}</span>}
            </p>
            {school != null && <p className='education-info-heading'>
                <b>{school}</b> <i>{location}</i>
            </p>}
        </section>

    )

}