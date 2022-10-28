import React from 'react';
import propTypes from 'prop-types'

const Section = ({title, children}) => (
    <div>
        <h1>{title}</h1>
        {children}
    </div>

)

Section.protoTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.element.isRequired,
  };

export default Section