import React from "react";
import "./index.scss"

export default function Button({name, type="btn", iconRight , iconLeft, addClass}) {
    const classes = [type]
    iconRight && classes.push("icon-right")
    iconLeft && classes.push("icon-left")
    addClass && classes.push.apply(classes, addClass)
    function checkIcon(value) {
        return (typeof value === 'string' ? (<i className="material-icons">{value}</i>) : value)
    }

    return (
        <div className={classes.join(' ')}>
            {name && <span>{name}</span>}
            <div className='icon'>
                {checkIcon(iconRight)}
                {checkIcon(iconLeft)}
            </div>
        </div>
    )

}