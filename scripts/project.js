/* W06: Project */

/* Declare and initialize global variables */

let chapter = Math. floor(Math. random() * (9 - 1 + 1)) + 1;
let verse = Math. floor(Math. random() * (15 - 10 + 1)) + 10;
let bookNumber = Math. floor(Math. random() * (2 - 0 + 1)) + 0;
let bookName = ["john", "psalms", "proverbs"]
let verseList = [];
let results = null;
let url = `https://bible-api.com/${bookName[bookNumber]}%20${chapter}:${verse}?translation=kjv`;
const versesElement = document.getElementById('verses');

/* async displayTemples Function */
const displayVerses = (verseObj) => {
   // verses.forEach((verseBible) => {
        // Create <article> element
        const articleElement = document.createElement('article');

        // Create <h3> element for temple name
        const h3Element = document.createElement('h3');
        h3Element.textContent = verseObj.reference;

        // Create <img> element for temple image
        const paragrathElement = document.createElement('p');
        paragrathElement.textContent = verseObj.text;

        // Append <h3> and <img> elements to <article> element
        articleElement.appendChild(h3Element);
        articleElement.appendChild(paragrathElement);

        // Append <article> element to global templesElement variable
        versesElement.appendChild(articleElement);
    //});
};

/* async getTemples Function using fetch()*/
const getVerses = async () => {
    try {
        // Fetch temple data
        const response = await fetch(url); 
        
        // Convert response to JSON
        const verseData = await response.json();
        
        // Assign the result to the templeList global array variable
        verseList = verseData;
        
        // Call displayTemples function and pass it the list of temples
        displayVerses(verseList);
    } catch (error) {
        console.error('Error fetching verse data:', error);
    }
};

/* reset Function */
const reset = () => {
    // Clear all <article> elements from the templesElement
    versesElement.innerHTML = '';
};

/* filterTemples Function */


getVerses();

const filterVerses = (verses) => {
    // Call reset function to clear the output
    reset();

    // Obtain the value of the HTML select element with ID 'filtered'
    const filter = document.getElementById('filtered').value;

    // Use a switch statement based on the filter value
    switch (filter) {
        case 'almeida':
            url = `https://bible-api.com/${bookName[bookNumber]}%20${chapter}:${verse}?translation=almeida`;
            getVerses();
            break;
        case 'kjv':
            url = `https://bible-api.com/${bookName[bookNumber]}%20${chapter}:${verse}?translation=kjv`;
            getVerses();
            break;
        case 'clementine':
            url = `https://bible-api.com/${bookName[bookNumber]}%20${chapter}:${verse}?translation=clementine`;
            getVerses();
            break;
        case 'rccv':
            url = `https://bible-api.com/${bookName[bookNumber]}%20${chapter}:${verse}?translation=rccv`;
            getVerses();
            break;
        default:
            console.error('Invalid filter value:', filter);
    }
};


/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterVerses(verseList) });
