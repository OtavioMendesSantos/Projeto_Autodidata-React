import React from 'react'

const Radio = ({ label, name, value, setValue, options, ...props }) => {
  return (
    <p>
      {options.map((option, index) => (
        <label htmlFor={option} key={index}>
          <input
            style={{ display: 'inline-block', width: 'fit-content' }}
            type="radio"
            id={option}
            name={name}
            value={option}
            checked={value === option}
            onChange={({ target }) => setValue(target.value)}
            {...props}
          />
          {option}
        </label>
      ))}
    </p>
  )
}

export default Radio