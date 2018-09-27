import React from 'react'

import classes from './BuildControl.css'

const buildControl = ({ label, removed, disabled, added }) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{label}</div>
        <button
            className={classes.Less}
            onClick={removed}
            disabled={disabled}>-</button>
        <button className={classes.More} onClick={added}>+</button>
    </div>
)

export default buildControl