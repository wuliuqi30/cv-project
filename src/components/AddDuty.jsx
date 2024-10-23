export function AddDuty({displayText,addDutyClickHandler}){
    

    return(
        <button onClick={addDutyClickHandler}>{displayText}</button>

    )
}