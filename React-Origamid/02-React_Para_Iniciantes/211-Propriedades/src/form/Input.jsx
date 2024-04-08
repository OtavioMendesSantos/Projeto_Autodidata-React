import React from 'react'

const Input = ({labelText, type, id, ...props}) => {
  return (
    <div style={{margin: "1 rem"}}>
        <label htmlFor={id}>{labelText}</label>
        <input type={type} id={id} name={id} {...props}/>
    </div>
  )
}

export default Input