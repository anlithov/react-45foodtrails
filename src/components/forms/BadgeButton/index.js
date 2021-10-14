import React from "react";
import "./index.scss"

export default function BadgeButton({name, type="btn-badge", badgeRight , badgeLeft, addClass}) {
    const classes = [type]
    badgeRight && classes.push("badge-right")
    badgeLeft && classes.push("badge-left")
    addClass && classes.push.apply(classes, addClass)
    function checkBagde(value) {
        return (typeof value === 'string' ? (<i className="material-icons">{value}</i>) : value)
    }

    return (
        <div className={classes.join(' ')}>
            {name && <span>{name}</span>}
            <div className="badge">
                {checkBagde(badgeRight)}
                {checkBagde(badgeLeft)}
            </div>
        </div>
    )

}