import { useState } from 'react'
export function EditableSection({initialChildList}) {

    const [name, setName] = useState("Enter Title");
    const [nameBeingEdited, setNameBeingEdited] = useState(false);


    const handleChange = (e) => {
        setName(e.target.value);
      };
    
      // Toggle This Section being edited
      const handleEditClick = () => {
        setNameBeingEdited(!nameBeingEdited)
      }

    return (
        <section className="editable-section">

            {nameBeingEdited ? (<input
                className="editable-section-text"
                type="text"
                value={name}
                onChange={handleChange}
            />) : (<p className="editable-section-text">
                {name}
            </p>)}
            
            <button 
            onClick={handleEditClick}
            className= {nameBeingEdited ? "editable-section-submit-button" : "editable-section-edit-button"}
            >
                {nameBeingEdited ? "Submit" : "Edit"}
            </button>
            
        </section>




    )
    // if(beingEdited){
    //     return (


    // } else {
    //     return (<p>
    //         {data}
    //         </p>)
    // }

}