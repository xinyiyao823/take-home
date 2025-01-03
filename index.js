const express = require('express');

const app = express(); //import express
const port = 3000;

app.listen(
    3000, () => console.log(`listening on http://localhost:${port}`)
)

module.exports = app;

app.get("/species", (req, res) => {
    res.status(200).send(
        
             [   
                {id: 1,
                name: "Coqui Frog",
                sci_name: "Eleutherodactylus coqui",
                description: "A small tree frog with brown or gray speckled skin and a loud, disctinctive call. This species is a national symbol of the island usually less than 2 inches in length and has large eyes to spot prey."},

                {id: 2,
                name: "Puerto Rico Spindalis",
                sci_name: "Spindalis portoricensis",
                description: "A colorful songbird with black and white stripes and a bright yellow chest. The official bird of Puerto Rico, the spindalis is usually found in forested areas and sings a distinctive song in the early mornings."},

                {id: 3,
                name: "Leatherback Sea Turtle",
                sci_name: "Dermochelys coriacea",
                description: "The largest of all sea turtle species with no scales or hard shell. They have a tough, rubbery exterior (like leather) and are currently endangered due to habitat loss."},
                
                {id: 4,
                name: "Puerto Richan Parrot",
                sci_name: "Amazona vittata",
                description: "A bright green parrot with roots in Puerto Rico dating back to the 16th century. Now, there are less than 30 living in the wild, typically in the forest areas since they feed on seeds and fruits. "},

                {id: 5,
                name: "Puerto Rican Boa",
                sci_name: "Chilabothrus inornatus",
                description: "This snake is the largest found in Puerto Rico and is not venomous nor  does it attack humans. It has a timid nature and helps to keep the rodent population down."},

                {id: 6,
                name: "Giant Anole",
                sci_name: "Anolis cuvieri",
                description: "A lizard that grows up to 5 inches with a green body and raised scales. They usually inhabit the canopy of tall trees and tend to be aggressive. Also under extinction threat due to deforestation on the island."},
             ]
               
    )}
) 
