import React from 'react';
import "./index.scss"
import {Appetizers, Desserts, Drinks, Mains, Salads, Soups} from "../../assets/icons";

const RecipesScreen = () => {
    return (
        <div className="page-recipes">

        <header className="jcs-header">
            <div className="front_panel">
                <div className="fp-wrap">
                    <div className="fp-title">
                        <span>Recipes</span>
                    </div>
                    <div className="fp-filter modal-trigger">
                        <a data-target="slide-out" className="trigger-filter btn-act sidenav-trigger slide-open">
                            <i className="material-icons">filter_list</i>
                        </a>
                    </div>
                </div>
                <div className="fp-wrap-2">
                    <nav className="fp-button_panel">
                        <a href="https://45foodtrails.com/<?php if (get_locale() == 'en_US') : ?>en<?php   endif; ?><?php if (get_locale() == 'ru_RU') : ?>ru<?php   endif; ?>/recipes/soups"
                           className="f-button tooltip-container">
                            <div className="f-img">

                                <Soups/>

                            </div>
                            <span className="tooltip">Soups</span>
                        </a>
                        <a href="https://45foodtrails.com/<?php if (get_locale() == 'en_US') : ?>en<?php   endif; ?><?php if (get_locale() == 'ru_RU') : ?>ru<?php   endif; ?>/recipes/appetizers"
                           className="f-button tooltip-container">
                            <div className="f-img">
                                <Appetizers/>
                            </div>
                            <span className="tooltip">
                           Appetizers
                        </span>
                        </a>

                        <a href="https://45foodtrails.com/<?php if (get_locale() == 'en_US') : ?>en<?php   endif; ?><?php if (get_locale() == 'ru_RU') : ?>ru<?php   endif; ?>/recipes/salads"
                           className="f-button tooltip-container">
                            <div className="f-img">
                                <Salads/>
                            </div>
                            <span className="tooltip">
                            Salads
                            </span>
                        </a>

                        <a href="https://45foodtrails.com/<?php if (get_locale() == 'en_US') : ?>en<?php   endif; ?><?php if (get_locale() == 'ru_RU') : ?>ru<?php   endif; ?>/recipes/maincourses"
                           className="f-button tooltip-container">
                            <div className="f-img">
                                <Mains/>
                            </div>
                            <span className="tooltip">
                            Maincourses
                        </span>
                        </a>

                        <a href="https://45foodtrails.com/<?php if (get_locale() == 'en_US') : ?>en<?php   endif; ?><?php if (get_locale() == 'ru_RU') : ?>ru<?php   endif; ?>/recipes/desserts"
                           className="f-button tooltip-container">
                            <div className="f-img">
                                <Desserts/>
                            </div>
                            <span className="tooltip">
                            Desserts
                        </span>
                        </a>

                        <a href="https://45foodtrails.com/<?php if (get_locale() == 'en_US') : ?>en<?php   endif; ?><?php if (get_locale() == 'ru_RU') : ?>ru<?php   endif; ?>/recipes/drinks"
                           className="f-button tooltip-container">
                            <div className="f-img">
                                <Drinks/>
                            </div>
                            <span className="tooltip">
                           Drinks
                        </span>
                        </a>
                    </nav>
                </div>
            </div>
        </header>


    <div className="jcs-content mixer">
        <div className="s_wrap fullwidth">
            <div className="list_pads overall">

                <div className="pad-child">

                </div>

            </div>


        </div>
    </div>
    </div>
)
    ;
};

export default RecipesScreen;