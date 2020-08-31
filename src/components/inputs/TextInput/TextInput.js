import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

// style
import style from './TextInput.module.css'

const TextInput = ({type, containerClassName, inputClassName, center, focusBar, ...rest}) => {

    const [ focus, setFocus ] = useState(false)

    const handleFocus = () => setFocus(state => !state)

    const containerStyle = classnames(style.container, center && style.center, containerClassName, focusBar && style.focusBar, focus && style.focus)
    const inputStyle = classnames(style.input, inputClassName)

    return(
        <div className={containerStyle}>
            <input
                {...rest}
                className={inputStyle}
                type={type}

                onFocus={handleFocus}
                onBlur={handleFocus}
            />
        </div>
    )
}

TextInput.propTypes ={
    type: PropTypes.string.isRequired,

    containerClassName: PropTypes.string,
    inputClassName: PropTypes.string,

    center: PropTypes.bool,
    focusBar: PropTypes.bool,

    rest: PropTypes.object,
}

TextInput.defaultProps = {
    type: 'text',

    containerClassName: null,
    inputClassName: null,

    center: false,
    focusBar: false,

    rest: null,
}

export default TextInput