import React from 'react'
import "./index.scss"
import '../../constants/menu'
import PcButtList from "./PcButtList";
import * as myConstClass from '../../constants/menu';

export default function Footer() {

    const Logo = myConstClass.menuLogo;
    const Buttons = myConstClass.menuButtons;

    return (

        <footer id="colophon" className="site-footer">
            <div className="sf_main">
                <div className="logo-footer">
                    {Logo.svg}
                </div>
                <div className="slogan">
                    <div className="up">
                        <span className="n1">Modern</span>
                        <span className="n2">Simple</span>
                        <span className="n3">Accessible</span>
                    </div>
                    <div className="down">
                        <span>Build your own unique web-app with mosimac</span>
                    </div>
                </div>
            </div>
            <div className="sf_copyright">
                <div className="flexcenter uniwrap">
                    <PcButtList pcbutts={Buttons} />
                    <div className="footer-signature">
                        <div className="sfс_text">
                            © Mosimac Design 2020-{new Date().getFullYear()}
                        </div>
                        <span className="sfc_sep"> | </span>
                        <div className="sfс_text">
                            Site Cunstructing
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )

}