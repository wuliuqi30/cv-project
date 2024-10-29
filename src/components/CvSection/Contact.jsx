export function Contact({
    addressFirstLine,
    addressSecondLine,
    phoneNumber,
    email,
    editSelectorIndex
}) {
    const suppressOutput = true;

    if (!suppressOutput) {
        console.log("Entered Contact component");
        console.log(`addressFirstLine is ${addressFirstLine} addressSecondLine is ${addressSecondLine} phoneNumber us ${phoneNumber} and email is ${email} editSelector is ${editSelectorIndex}`)

    }

    return (

        <section className={"contact"}>
            
        </section>

    )

}