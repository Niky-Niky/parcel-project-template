import menuData from "./menu.json";

import foodServiceTpl from "./food-service.hbs"; 

const foodServiceMarkUp = foodServiceTpl(menuData); 

const menuRef = document.querySelector(".menu js-menu");

menuRef.insertAdjacentHTML("beforeend", foodServiceMarkUp);
