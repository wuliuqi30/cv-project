

export function SubmitAndCancelButtonRow({ closeCallBack, deleteCallback }) {

   
    return (
        <div className="submit-cancel-button-row">
            <button onClick={deleteCallback}>
                {"Delete"}
            </button>
            <button onClick={closeCallBack}>
                {"Close"}
            </button>

        </div>
    ) 
}