import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

// style
import style from './Button.module.css'

const Button = ({styled, children, className, ...rest}) => {

    const classNames = classnames(style.button, styled && style.styled, className)

    return <button {...rest} className={classNames}>{children}</button>
}

Button.propTypes = {
    styled: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    rest: PropTypes.object
}

Button.defaultProps = {
    styled: false,
    children: '',
    className: null,
    rest: null
}

export default Button