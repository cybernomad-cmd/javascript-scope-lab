// Lab: Flatburger Restaurant

const burgers = ["Hamburger", "Cheeseburger"];
let featuredDrink = "milkshake";
let featuredItem = "";

function setFeaturedItem(item) {
    featuredItem = item;
}

function addSpecialBurger() {
    let specialBurger = "BBQ Bacon Burger";
    burgers.push(specialBurger);
}

setFeaturedItem("Double Cheeseburger");
addSpecialBurger();

console.log(burgers);
console.log(featuredDrink);
console.log(featuredItem);
