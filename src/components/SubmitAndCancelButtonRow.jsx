

export function SubmitAndCancelButtonRow({ submitCallback, cancelCallback }) {

    return (
        <div className="submit-cancel-button-row">
            <button onClick={cancelCallback}>
                {"Cancel"}
            </button>
            <button onClick={submitCallback}>
                {"Submit"}
            </button>

        </div>
    )
}