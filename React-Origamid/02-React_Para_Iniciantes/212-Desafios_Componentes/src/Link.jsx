import React from 'react'

const Link = ({href,text, ...props}) => {
  return (
    <a href={href} {...props}>{text}</a>
  )
}

export default Link