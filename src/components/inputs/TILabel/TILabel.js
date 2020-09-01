import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

// TEXT INPUT
import { TextInput } from 'components/inputs'

// css
import style from './TILabel.module.css'

const TILabel = ({children, className, textClassName, ...rest}) => {
    return(
        <label className={classnames(style.label, className)}>
            <div className={classnames(style.text, textClassName)}>{children}</div>
            <TextInput {...rest} />
        </label>
    )
}

TILabel.propTypes = {
    children: PropTypes.node.isRequired,

    className: PropTypes.string,
    textClassName: PropTypes.string,

    rest: PropTypes.object,
}

TILabel.defaultProps = {
    children: '',

    className: '',
    textClassName: '',

    rest: null,
}

export default TILabel