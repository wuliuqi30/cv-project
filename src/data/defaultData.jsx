
export const defaultGeneralInfo = {
    firstName: 'Hersh',
    lastName: 'Sangani',
    miniIntro: 'Experienced Systems Engineer with Master\'s degree in Electrical and Computer Engineering; Advanced Chinese Speaker'
}

export const defaultContactInfo = {
    addressFirstLine: "4983 Rabbit Run",
    addressSecondLine: "Liverpool, NY, 13090",
    phoneNumber: "1-858-752-7210",
    email: "sanganihersh@gmail.com"
}

export const defaultSkillsInfo = [
    { id: 0, skillName: 'Python', yearsExp: 3, skillType: 'computer' },
    { id: 1, skillName: 'Matlab', yearsExp: 5, skillType: 'computer' },
    { id: 2, skillName: 'DOORS', yearsExp: 3, skillType: 'computer' },
    { id: 3, skillName: 'Linux/Unix', yearsExp: 5, skillType: 'computer',},
    { id: 4, skillName: 'MS Office (Excel, Powerpoint, Outlook, Word)', yearsExp: 15, skillType: 'computer'},
    { id: 5, skillName: 'Mandarin Chinese (advanced)', yearsExp: 3, skillType: 'language'},
];


export const defaultExperiencesInfo = [
    {   
        id: 0,
        company: "Science Applications International Corporation", 
        title: "Sr. Systems Engineer",
        location: "El Segundo, CA, USA",
        startDate: new Date(2019,9-1), 
        endDate: new Date(2020,6-1), 
        bulletItems: [
            "Wrote and analyzed system requirements for GPS Blocks II and III ensuring comprehensive coverage and alignment with critical technical standards.",
            "Carried out meticulous requirement traceability analysis, identifying and eliminating redundancies to enhance system efficiency.", 
            "Managed requirements using a DOORS database, improving traceability and removing errors." , 
            "Developed and updated essential technical support documentation, and crafted detailed yet understandable summaries, reports, and presentations in support of the customer."
        ]       
    },
    {
        id: 1,
        company: "Raytheon Space & Airborne Systems", 
        title: "Sr. Systems Engineer",
        location: "El Segundo, CA, USA",
        startDate: new Date(2017,7-1), 
        endDate: new Date(2019,6-1), 
        bulletItems: [
            "Critically assessed customer and internal system-level radar requirements and formulated new requirements where appropriate.",
            "Leveraged MATLAB and C-programmed simulations to conduct complex Monte-Carlo trade studies and obtained statistical metrics on tracking accuracy and tracking performance.",
            "Conducted comprehensive evaluations to ascertain the radar system’s compliance with program requirements, devised detailed charts explaining how we’d meet each requirement, and provided a path-forward and alternative options for any at-risk requirements.",
            "Prepared key flight test performance metrics charts presented at weekly customer meetings and assisted in flight test planning." ]       
    },
    {
        id: 2,
        company: "Raytheon Space & Airborne Systems", 
        title: "Sr. Systems Engineer",
        location: "Tucson, AZ, USA",
        startDate: new Date(2014,11-1), 
        endDate: new Date(2017,1-1), 
        bulletItems: [
            "Improved radar algorithm performance (measured by missile mission success rate) through analysis of a high-fidelity Raytheon radar simulation.",
            "Executed software integration effort to combine two existing software builds for testing new algorithms in flight test. Enabled radar team to stick to a tight testing schedule.",
            "Tested and validated missile software performance through telemetry analysis of land-based and airborne flight data. Confirmed parameter selection algorithms (PRF, RF) behaved as expected for different cases.",
            "Validated performance of new radar simulation model through desktop testing and analysis. Demonstrated the model worked correctly for basic testing scenarios while incorporating higher-fidelity modeling."
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
        endDate: new Date(2019,5-1)
    }, 
    {
        id: 1,
        school: "Cornell University",
        degree: "Bachelor of Science",
        major: "Electrical and Computer Engineering",
        gpa: 3.59,
        location: "Ithaca, NY",
        startDate: new Date(2009,8),
        endDate: new Date(2013,5-1)
    },
    {
        id: 2,
        school: "Listening/Reading/Writing Total Score: 218/300 (72.6%)",
        degree: "HSK-6 Exam with Advanced Speaking",
        major: null,
        gpa: null,
        location: "Hangzhou, China",
        startDate: null,
        endDate: new Date(2023,12-1)
    },
    {
        id: 3,
        school: null,
        degree: "120-Hour TEFL Course",
        major: "tefl.org, ID 162867",
        gpa: null,
        location: null,
        startDate: null,
        endDate: new Date(2021,5-1)
    },
    {
        id: 4,
        school: "UCLA David Geffen School of Medicine, Center for Prehospital Care",
        degree: "Emergency Medical Technician Certificate",
        major: "182 Total Course Hours",
        gpa: null,
        location: "Los Angeles, CA, USA",
        startDate: null,
        endDate: new Date(2020,8-1)
    }


]