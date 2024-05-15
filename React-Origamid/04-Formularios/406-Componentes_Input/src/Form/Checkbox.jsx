import React from 'react'

const Checkbox = ({ value, setValue, options, ...props}) => {
    const handleCheckbox = ({ target }) => {
        if ( target.checked) {
            setValue([...value, target.value])
        } else {
            setValue(value.filter(itemValue => itemValue !== target.value))
        }
    }
    
    return (
        <p>
            {options.map((option, index) => (
                <label htmlFor={option} key={index}>
                    <input 
                        style={{display: 'inline-block', width: 'fit-content'}}
                        type="checkbox" 
                        id={option}
                        name={option}
                        value={option} 
                        checked={value.includes(option)} 
                        onChange={handleCheckbox} 
                        {...props} 
                    />
                    {option}
                </label>
            ))}
        </p>
    )
}

export default Checkbox
