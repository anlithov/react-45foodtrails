import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import {NavBar} from "./components/navbar";
import {Footer} from "./components/footer";

import {HomeScreen, ContactScreen, RecipesScreen, KnowHowsScreen} from "./screens";
import {HomeSvg, RecipesSvg, ContactSvg, KnowHowsSvg, Logo} from "./assets/icons";



export default function ScreensRouter() {
    const menuLogo = {
        svg: <Logo />,
    }
    const menuButtons = [
        {name: 'home', svg: <HomeSvg />},
        {name: 'recipes', svg: <RecipesSvg />},
        {name: 'know-hows', svg: <KnowHowsSvg />},
        {name: 'contact', svg: <ContactSvg />},
    ]
    const themeList = [
        { name: 'theme-latico' },
        { name: 'theme-martin' },
        { name: 'theme-clary' },
        { name: 'theme-ricco' },
        { name: 'theme-hyggo' },
        { name: 'theme-patri' },
        { name: 'theme-vermir' },
        { name: 'theme-risana' },
    ]
    return(
        <BrowserRouter>
            <NavBar menuLogo={menuLogo} menuButtons={menuButtons} themeList={themeList}/>
            <div id="content">
                <Switch>
                    <Route exact path="/" component= {HomeScreen} />
                    <Route path = "/recipes" component = {RecipesScreen} />
                    <Route path = "/know-hows" component = {KnowHowsScreen} />
                    <Route path = "/contact" component = {ContactScreen} />
                </Switch>
            </div>
            <Footer menuLogo={menuLogo} menuButtons={menuButtons} />
        </BrowserRouter>
    );
};