import React from 'react'
import "./index.scss"
import {Hamburger} from "../../assets/icons";
import PcButtList from "./PcButtList";


export default function NavBar({menuLogo, menuButtons, themeList}) {

    return (
        <div id="menu" className="menu_base">
            <div className="menu_in uniwrap">
                <div className="menu_content">
                    <div className="menu-pres">
                        <div className="logo">
                            <a className="logo-url" href="/">
                                {menuLogo.svg}
                            </a>
                        </div>
                    </div>
                    <div className="mobile menu-hamburger">
                        <div className="ic-menu">
                            <Hamburger />
                        </div>
                    </div>
                    <PcButtList pcbutts={menuButtons} togglers={themeList}/>
                </div>
            </div>
        </div>
    )
}