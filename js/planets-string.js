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
     */

    var breakPlanets = planetsArray.join('<br>');
    console.log(breakPlanets);

    /**
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     *
     *
     */

    for (var i = planetsArray.length; i--;) {
        planetsArray[i] = "\n" + '<li>' + planetsArray[i] + '</li>' + "\n";
    }

    var planetsString2 = '<ul>' + "\n" + planetsArray.join("") + '\n' + '</ul>';

    console.log(planetsString2);

})();