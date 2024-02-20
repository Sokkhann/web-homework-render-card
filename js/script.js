"use strict"
// import cardComponent and products from different file
// we need to use type module to ensure that we can use different file
import { cardComponent } from "../components/cardComponent.js";
import { products } from "../data/products.js"

// create a variable and pass the value of render-area that we selected by id from html 
let renderArea = document.querySelector("#render-area")
products.map((product) => {
    // inject each card of product into renderArea in html file
    renderArea.innerHTML += cardComponent(product)

})

