export function PictureForm({ handlePictureSelectionChange }) {

    return (
        
            <input
                type="file"
                accept="image/*"
                onChange={handlePictureSelectionChange}
                
                id="fileInput"
                className={"edit-form-title"} />

    )
}