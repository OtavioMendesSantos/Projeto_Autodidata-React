import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ width, margin, children }) => {
    return (
        <button
            style={{ width: `${width}px`, height: `${width / 3}px`, margin: margin }}
        >
            {children}
        </button>
    )
}

Button.defaultProps = {
    margin: '100px',
}

Button.propTypes = {
    width: PropTypes.number.isRequired
}

export default Button