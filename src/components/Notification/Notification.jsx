import React from 'react';
import propTypes from 'prop-types';


const Notification = ({message}) => (
<h2>{message}</h2>
)

Notification.prototype = {
    message: propTypes.string.isRequired,
}

export default Notification