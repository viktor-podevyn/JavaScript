/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    let title = new Date();
    let hournow = title.getHours();
    let minutesnow = title.getMinutes();
    if ( hournow >17){

        console.log("Its after 17!");
        document.getElementById('target').innerHTML = "Good evening!";

    } else if(hournow <17) {

        console.log("It's before 17!");
        document.getElementById('target').innerHTML = "Hello!!";

    } else if (hournow === 17 && minutesnow === 30){

        console.log("its exactly 17.30!");
        document.getElementById('target').innerHTML = "Good evening!";

    } else if (hournow === 17 && minutesnow >30){

        console.log("It's up to 17.59!");
        document.getElementById('target').innerHTML = "Good evening!";

    } else if (hournow === 17 && minutesnow <30){

        console.log("It's up to 17.29!");
        document.getElementById('target').innerHTML = "Hello!";

    }

})();
