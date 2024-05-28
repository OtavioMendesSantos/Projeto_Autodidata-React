import React from 'react'

const Input = ({ label, id, value, onChange, type, onBlur, placeholder, error }) => {

  return (
    <p>
      <label htmlFor={id}> {label} </label>
      <input
        id={id}
        name={id}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        type={type}
        onBlur={onBlur}
      />
      {error && <p>{error}</p>}
    </p>
  )
}

export default Input