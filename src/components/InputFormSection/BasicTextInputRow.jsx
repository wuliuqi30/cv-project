import React from 'react';
import { useState } from 'react';

export function BasicTextInputRow({
    labelText,
    placeholderText,
    inputText,
    handleInputTextChange,
    htmlForIdentifier,
    disabled,
    required
}) {


    const handleOnKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent the default form submission
            console.log("Prevented Submission from clicking enter on the input field")
        }
    }

    return (
        <div className="basic-form-input-row">

            <label htmlFor={htmlForIdentifier}>
                {labelText}
            </label>

            <textarea
                className='form-input-text-size custom-textarea'
                type="text"
                id={htmlForIdentifier}
                name={htmlForIdentifier}
                placeholder={placeholderText}
                required={required}
                disabled={disabled}
                onChange={handleInputTextChange}
                onKeyDown={handleOnKeyDown}
                value = {inputText}
            />
            
        </div>


    )

}