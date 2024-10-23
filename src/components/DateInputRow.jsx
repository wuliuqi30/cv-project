
export function DateInputRow({
    labelText,
    handleInputDataChange,
    htmlForIdentifier,
    disabled,
    required,
    startDate,
    endDate
}) {



    const handleChange = ([newStartDate, newEndDate]) => {
        setStartDate(newStartDate);
        setEndDate(newEndDate);
    };

    return (
        <div className="date-input-row">
            <label htmlFor={htmlForIdentifier}>
                {labelText}
            </label>
            <DatePicker
                selected={startDate}
                onChange={handleChange}
                selectsRange
                startDate={startDate}
                endDate={endDate}
                dateFormat="MM/yyyy"
                showMonthYearPicker
            />

        </div>
    )


}