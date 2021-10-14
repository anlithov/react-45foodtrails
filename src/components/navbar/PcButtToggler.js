import React from 'react'
import PcButtTogglerItems from './PcButtTogglerItems'


export default function PcButtToggler(props) {
    return (
        <div className="theme-boxlist">
            {props.togglers.map(toggler => {
                return <PcButtTogglerItems key={toggler.name} toggler={toggler}/>
            })}
        </div>
    )
}