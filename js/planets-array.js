(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.unshift("The Sun");
    console.log(planets);

    console.log('Adding "Pluto" to the end of the planets array.');
    planets.push("Pluto");
    console.log(planets);

    console.log('Removing "The Sun" from the beginning of the planets array.');
    planets.shift();
    console.log(planets);

    console.log('Removing "Pluto" from the end of the planets array.');
    planets.pop()
    console.log(planets);

    console.log('Finding and logging the index of "Earth" in the planets array.');
    // var indexOfEarth = planets.indexOf("Earth")
    console.log("The index of Earth is: " + planets.indexOf("Earth"));

    console.log("Changing 'Earth' to 'Earth is cool'")
    planets[2] = "Earth is is cool"
    console.log(planets);

    console.log("Changing 'Earth is cool' back to 'Earth'")
    // planets[indexOfEarth] = "Earth"
    planets[2] = "Earth"
    console.log(planets);

    console.log("Reversing the order of the planets array.");
    planets.reverse();
    console.log(planets);

    console.log("Sorting the planets array.");
    planets.sort();
    console.log(planets);

    console.log("Showing only first half of array.");
    console.log(planets.slice(0, 4));

    console.log("Showing only second half of array.");
    console.log(planets.slice(4));


    // Creating two variables that will divide the planets array in half

    // var firstHalfOfPlanets = planets.slice(0, 4);
    // firstHalfOfPlanets = firstHalfOfPlanets.toLowerCase();
    //
    // var secondHalfOfPlanets = planets.slice(4);
    // secondHalfOfPlanets = secondHalfOfPlanets.toLowerCase();
    //
    //
    //
    // // Concat the two new variables to a single new variable to complete the planets array
    //
    // var planetsCombined = firstHalfOfPlanets.concat(secondHalfOfPlanets );
    // console.log(planetsCombined);
    //

})();