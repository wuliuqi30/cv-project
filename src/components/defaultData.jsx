
export const defaultGeneralInfo = {
    firstName: 'Hersh',
    lastName: 'Sangani',
}

export const defaultExperiencesInfo = [
    {   
        id: 0,
        company: "Science Applications International Corporation", 
        title: "Sr. Systems Engineer",
        location: "El Segundo, CA, USA",
        startDate: new Date(2019,9), 
        endDate: new Date(2020,6), 
        bulletItems: [
            "Wrote and analyzed system requirements for GPS Blocks II and III ensuring comprehensive coverage and alignment with critical technical standards.",
            "Carried out meticulous requirement traceability analysis, identifying and eliminating redundancies to enhance system efficiency.", 
            "Managed requirements using a DOORS database, improving traceability and removing errors." , 
            "Developed and updated essential technical support documentation, and crafted detailed yet understandable summaries, reports, and presentations in support of the customer."
        ]       
    },
    {
        id: 1,
        company: "Honest Place", 
        title: "Senior Dude",
        location: "place",
        startDate: new Date(2013,2), 
        endDate: new Date(2015,2), 
        bulletItems: [
            "Did an honest man's job",
        ]       
    }
];

export const defaultEducationInfo = [
    {
        id: 0,
        school: "University of Arizona",
        degree: "Master of Science",
        major: "Electrical and Computer Engineering",
        gpa: 3.89,
        location: "Tucson, AZ",
        startDate: new Date(2015,8),
        endDate: new Date(2019,5)
    }, 
    {
        id: 1,
        school: "Cornell University",
        degree: "Bachelor of Science",
        major: "Electrical and Computer Engineering",
        gpa: 3.59,
        location: "Ithaca, NY",
        startDate: new Date(2009,8),
        endDate: new Date(2013,5)
    }


]