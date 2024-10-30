export function CvHeading({ firstName, lastName, miniIntro }) {

    const suppressDebugOutput = true;

    if (!suppressDebugOutput) {
        console.log(firstName, lastName)
    }

    return (
        <>
            <div className="cv-photo"></div>
            <div className={"cv-heading"}>
                <div className={"cv-heading-name"}>{firstName + ' ' + lastName}</div>
                <div className={"cv-heading-intro"}>{miniIntro}</div>
            </div >


        </>
    )
}