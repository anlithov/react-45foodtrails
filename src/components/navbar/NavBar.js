import React from 'react'
import "./index.scss"
import {Hamburger} from "../../assets/icons";
import PcButtList from "./PcButtList";
import * as myConstClass from "../../constants/menu";


export default function NavBar() {
    const Logo = myConstClass.menuLogo;
    const Buttons = myConstClass.menuButtons;
    const Themes = myConstClass.themeList;
    return (
        <div id="menu" className="menu_base">
            <div className="menu_in uniwrap">
                <div className="menu_content">
                    <div className="menu-pres">
                        <div className="logo">
                            <a className="logo-url" href="/">
                                {Logo.svg}
                            </a>
                        </div>
                    </div>
                    <div className="mobile menu-hamburger">
                        <div className="ic-menu">
                            <Hamburger />
                        </div>
                    </div>
                    <PcButtList pcbutts={Buttons} togglers={Themes}/>
                </div>
            </div>
        </div>
    )
}