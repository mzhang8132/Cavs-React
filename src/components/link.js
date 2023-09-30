import React from 'react'

import PropTypes from 'prop-types'

import './link.css'

const Link = (props) => {
  return (
    <div className="link-container">
      <a href="#process" className="link-link Anchor">
        {props.Link}
      </a>
    </div>
  )
}

Link.defaultProps = {
  Link: 'Our story',
}

Link.propTypes = {
  Link: PropTypes.string,
}

export default Link
