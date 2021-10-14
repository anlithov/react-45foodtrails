import React from 'react'
import PcButtItem from './PcButtItem'
import {ReactComponent as ThemeTogg} from "../../assets/icons/theme-toggler.svg";
import PcButtToggler from "./PcButtToggler";


export default function PcButtList(props) {
    return (
        <nav className="pc pc-butts">
            {props.pcbutts.map(pcbutt => {
                return <PcButtItem key={pcbutt.name} pcbutt={pcbutt}/>
            })}
            <div className="theme-panel">
                <div className="item theme">
                    <ThemeTogg />
                </div>
                <div className="theme-triangle"></div>
                <PcButtToggler togglers={props.togglers} />
            </div>
        </nav>
    )
}