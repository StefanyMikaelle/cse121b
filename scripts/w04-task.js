/* LESSON 4 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name : "Stefany Mikaelle",
    photo: {
        src : "images/profile_stefany.jpg",
        alt : "profile picture"
    },
    favoriteFoods : ["pizza", "ice cream", "cake" ],
    hobbies : ["sing", "watch movies"],
    placesLived : [] 
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place : "São Paulo, SP",
        length : "1 year and 4 months"
    }
)

myProfile.placesLived.push (
    {
        place: "Recife, PE",
        length : "27 years "
    }
)

/* DOM Manipulation - Output */
/* Name */
document.querySelector("#name").textContent = myProfile.name;


/* Photo with attributes */
let photoElement = document.querySelector("#photo");
photoElement.src = myProfile.photo.src;
photoElement.alt = myProfile.photo.alt;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach( food => {
let li = document.createElement("li");
li.textContent = food;
document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach( hobby => {
let li = document.createElement("li");
li.textContent = hobby;
document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach( placeObject => {
let dt = document.createElement("dt");
let dd = document.createElement("dd");
dt.textContent = placeObject.place;
dd.textContent = placeObject.length;
document.querySelector("#places-lived").appendChild(dt);
document.querySelector("#places-lived").appendChild(dd);
});

