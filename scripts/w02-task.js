/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Stefany Mikaelle da Silva Lima";
let currentYear = new Date().getFullYear();// 2024;
let profilePicture = "images/profile_stefany.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');//

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;//
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of [${ fullName}]`);//


/* Step 5 - Array */

var favoriteFoods = ["Pizza", "Chocolate", "Ice Cream", "Bread"];
foodElement.innerHTML = favoriteFoods;
var singleFavoriteFood = "Lasagna";
favoriteFoods.push(singleFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;

