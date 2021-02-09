/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let text = document.getElementById("target").innerText;
    let separatedCharacters = text.split("");
    let index = 0;

    document.getElementById("target").innerText = "";

    let delay = setInterval(displayCharacters, (Math.random() * 100));

    function displayCharacters() {
        if (index === separatedCharacters.length) {
            clearInterval(delay);
        }

        else {
            document.getElementById("target").innerHTML += separatedCharacters[index];
            index++;
        }
    }

})();
