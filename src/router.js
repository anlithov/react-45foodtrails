import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import {NavBar} from "./components/navbar";
import {Footer} from "./components/footer";

import {HomeScreen, ContactScreen, RecipesScreen, KnowHowsScreen} from "./screens";



export default function ScreensRouter() {

    return(
        <BrowserRouter>
            <NavBar/>
            <div id="content">
                <Switch>
                    <Route exact path="/" component= {HomeScreen} />
                    <Route path = "/recipes" component = {RecipesScreen} />
                    <Route path = "/know-hows" component = {KnowHowsScreen} />
                    <Route path = "/contact" component = {ContactScreen} />
                </Switch>
            </div>
            <Footer />
        </BrowserRouter>
    );
};