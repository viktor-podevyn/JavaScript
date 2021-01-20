/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    var responses = false;
    while (responses === false){
        if (responses === false){
            let age = prompt("what's your age?");
            let gender = prompt("what's your gender?");
            let town = prompt("where do you live?");
                responses = confirm("are these correct? " + age + " " + gender + " " + town);
            if (responses === false){
                alert('Please confirm!');

            } else {
                alert("thanks!");
                break;
            }
        }
    }


