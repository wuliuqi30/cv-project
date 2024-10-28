export function CloseButton({ closeCallBack }) {

    return (
        <div className="close-button-row">
            
            <button onClick={closeCallBack}>
                {"Close"}
            </button>

        </div>
    ) 
}