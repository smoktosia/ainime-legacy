import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

// ICON
import { FaCheck } from 'react-icons/fa'

// css
import style from './Checkbox.module.css'

const Checkbox = ({containerClassName, labelClassName, children, ...rest}) => {
    return(
        <label className={classnames(style.label, labelClassName)}>

            <div className={classnames(style.container, containerClassName)}>
                <input
                    {...rest}
                    type='checkbox'
                    className={style.input}
                />
                <FaCheck className={style.icon} size='1rem' />
            </div>

            {
                children &&
                <span className={style.text}>
                    {children}
                </span>

            }

        </label>
    )
}

Checkbox.propTypes = {
    containerClassName: PropTypes.string,
    labelClassName: PropTypes.string,
    children: PropTypes.node,
    rest: PropTypes.object
}

Checkbox.defaultProps = {
    containerClassName: null,
    labelClassName: null,
    children: null,
    rest: null
}

export default Checkbox