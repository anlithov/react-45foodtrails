
import React from "react";


export default function PcButtItem({pcbutt}) {
    return (
        <div className={'pcm-button to-' + pcbutt.name}>
            <a href={'./' + pcbutt.name} className="">
                <div className="item">
                    {pcbutt.svg}
                </div>
                <span className="pcm-name">
                    {pcbutt.name}
                </span>
            </a>
        </div>
    )
}