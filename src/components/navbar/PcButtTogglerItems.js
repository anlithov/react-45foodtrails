import React from "react";



export default function PcButtTogglerItems({ toggler }) {
    function setTheme(themeName) {
        localStorage.setItem('theme', themeName);
        document.documentElement.className = themeName;
    }
    function toggleTheme(theName) {
        if (!(localStorage.getItem('theme') === theName)) {
            setTheme(theName);
        }
    }

    return (
        <div className={'theme-item ' + toggler.name} onClick={() => toggleTheme(toggler.name)}></div>
    )

}