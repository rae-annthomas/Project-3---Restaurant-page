import "./styles.css";
import {pageLoad} from "./homePage.js";
import {menuLoad} from "./menuPage.js";
import {aboutLoad} from "./aboutPage.js";
pageLoad();

const homeButton = document.querySelector("#homeBtn");
const menuButton = document.querySelector("#menuBtn");
const aboutButton = document.querySelector("#aboutBtn");

homeButton.addEventListener("click", () => {
    const content = document.querySelector("#content");
    content.textContent = "";
    pageLoad();

})

menuButton.addEventListener("click", () => {
    const content = document.querySelector("#content");
    content.textContent = "";
    menuLoad();

})

aboutButton.addEventListener("click", () => {
    const content = document.querySelector("#content");
    content.textContent = "";
    aboutLoad();

})