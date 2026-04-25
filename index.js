// Lab: Flatburger Restaurant
let burgers = ["Hamburger", "Cheeseburger"];
let drink = "milkshake";
let featuredItem = "";

function setFeaturedItem(item) {
    featuredItem = item;
}

function addSpecialBurger() {
    if (true) {
        let specialBurger = "BBQ Bacon Burger";
        burgers.push(specialBurger);
    }
}

setFeaturedItem("Double Cheeseburger");
addSpecialBurger();

console.log(burgers);
console.log(drink);
console.log(featuredItem);
