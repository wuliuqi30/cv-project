export function CvHeading({ firstName, lastName, miniIntro, selectedPhoto }) {

    const suppressDebugOutput = true;

    if (!suppressDebugOutput) {
        console.log(firstName, lastName)
    }

    return (
        <>
            <div className="cv-photo">
                <img
                    src={selectedPhoto}
                    alt="Profile"
                    className="profile-image"
                    
                />
            </div>
            <div className={"cv-heading"}>
                <div className={"cv-heading-name"}>{firstName + ' ' + lastName}</div>
                <div className={"cv-heading-intro"}>{miniIntro}</div>
            </div >


        </>
    )
}