import React from 'react';
import "./index.scss"
import {FoodCatsBar, FoodShowdownArea} from "../../components/food-tabs";


const RecipesScreen = () => {
    const recipes = [
        {id: 1, title: "Coffee Panna-Cotta", poster: "./assets/images/1234.jpg"},
        {id: 2, title: "Pizza Palermo", poster: "./assets/images/1234.jpg"},
        {id: 3, title: "Pizza Bazil", poster: "./assets/images/1234.jpg"},
        {id: 4, title: "True Bread", poster: "./assets/images/1234.jpg"},
        {id: 5, title: "Pumpkin pie", poster: "./assets/images/1234.jpg"}
    ]


    return (
        <div className="page-recipes">
            <FoodCatsBar title="Recipes"/>
            <FoodShowdownArea recipes={recipes}/>
        </div>
    )

};

export default RecipesScreen;