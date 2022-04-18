const {animals} = require('./data/animals.json')
const express = require ('express');
const app = express();

function filterByQuery(query, animalsArray) { 
    let personalityTraitsArray = [];
    // Note that we save the animalsArray as filteredResults here:

    let filteredResults = animalsArray;
    if(query.personalityTraits) {
        //Save the personality traits as a dedicated array.
        //If personalityTraits is a string, place it into a new array and save. 
        if (typeof query.personalityTraits === 'string') {
            personalityTraitsArray = [query.personalityTraits];
        } else {
            personalityTraitsArray = query.personalityTraits;
        }
        //Loop through each trait in the personalityTraits array:
        
    }

    if (query.diet) {
        filteredResults = filteredResults.filter(animal => animal.diet === query.diet);
    }
    if (query.species) {
        filteredResults = filteredResults.filter(animal => animal.species === query.species);
    }
    if (query.name) {
        filteredResults = filteredResults.filter(animal => animal.name === query.name);
    }
    return filteredResults;
}


app.get('/api/animals', (req, res) => {
    let results = animals;
    if (req.query) {
        results= filterByQuery(req.query, results);
    }

    res.json(results);
});

app.listen(3001, () => {
    console.log(`API server now on port 3001`);
});