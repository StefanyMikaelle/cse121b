/* W05: Programming Tasks */

/* Declare and initialize global variables */
const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
const templesElement = document.getElementById('temples');
let templeList = [];
let results = null;

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        // Create <article> element
        const articleElement = document.createElement('article');

        // Create <h3> element for temple name
        const h3Element = document.createElement('h3');
        h3Element.textContent = temple.templeName;

        // Create <img> element for temple image
        const imgElement = document.createElement('img');
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;

        // Append <h3> and <img> elements to <article> element
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);

        // Append <article> element to global templesElement variable
        templesElement.appendChild(articleElement);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
        // Fetch temple data
        const response = await fetch(url); 
        
        // Convert response to JSON
        const templeData = await response.json();
        
        // Assign the result to the templeList global array variable
        templeList = templeData;
        
        // Call displayTemples function and pass it the list of temples
        displayTemples(templeList);
    } catch (error) {
        console.error('Error fetching temple data:', error);
    }
};

/* reset Function */
const reset = () => {
    // Clear all <article> elements from the templesElement
    templesElement.innerHTML = '';
};

/* filterTemples Function */


getTemples();

const filterTemples = (temples) => {
    // Call reset function to clear the output
    reset();

    // Obtain the value of the HTML select element with ID 'filtered'
    const filter = document.getElementById('filtered').value;

    // Use a switch statement based on the filter value
    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'notutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case 'all':
            displayTemples(temples);
            break;
        default:
            console.error('Invalid filter value:', filter);
    }
};


/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });
