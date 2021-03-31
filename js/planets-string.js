(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split('|');

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     *
     *
     */


    var breakPlanets = planetsArray.join('<br>');
    console.log(breakPlanets);

    var tags = '<ul>';

    planetsArray.forEach(function(planet) {
        tags += '<li>' + planet + '</li>';
    });
    // for (var i = planetsArray.length; i--;) {
    //     planetsArray[i] = "\n" + '<li>' + planetsArray[i] + '</li>' + "\n";
    // }
    tags += '</ul>';

    var planetsString2 = planetsArray.join("");

    console.log("<ul>" + "\n" + planetsString2 + "\n" + "</ul>");

})();
