import React from 'react'

const Select = ({id, options, value, setValue, ...props}) => {

    return (
        <p>
            <select
                name={id}
                id={id}
                value={value}
                onChange={({target}) => setValue(target.value)}
            >
                <option value="" disabled >Selecione uma opção</option>
                {options.map((option) => (
                    <option 
                        value={option}
                        key={option}
                    >
                        {option}
                    </option>
                ))}
            </select>
        </p>
    )
}

export default Select