import React from 'react'

import classes from './Button.css'

const button = ({ buttonType, clicked, children }) => (
    <button
        className={[classes.Button, classes[buttonType]].join(' ')}
        onClick={clicked}
    >{children}</button>
)

export default button