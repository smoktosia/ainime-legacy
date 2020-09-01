import React from 'react'
import PropTypes from 'prop-types'

const Content = ({children}) => {
    return <div className='content'>{children}</div>
}

Content.propTypes = {
    children: PropTypes.node
}

Content.defaultProps = {
    children: ''
}

export default Content