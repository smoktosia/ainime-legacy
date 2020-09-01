import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

// style
import style from './Submit.module.css'

const Submit = ({type, children, className, ...rest}) => {
    return(
        <button
            {...rest}
            type={type}
            className={classnames(style.btn, className)}
        >{children}</button>
    )
}

Submit.propTypes = {
    type: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,

    rest: PropTypes.object
}

Submit.defaultProps = {
    type: 'submit',
    children: null,
    className: null,

    rest: null
}

export default Submit