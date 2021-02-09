/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click",function(){

        let numbers = [];

        function randomNumber () {
            return Math.floor(Math.random() * 100);
        }

        for (let i = 1; i < 11; i++) {
            numbers.push(randomNumber());
            document.getElementById("n-" + i).innerHTML = numbers[i - 1];
        }


        let min = Math.min(...numbers);
        let max = Math.max(...numbers);
        let sum = numbers.reduce((a, b) => a + b, 0);
        let average = sum/numbers.length;

        document.getElementById("min").innerHTML = min.toString();
        document.getElementById("max").innerHTML = max.toString();
        document.getElementById("sum").innerHTML = sum.toString();
        document.getElementById("average").innerHTML = average.toString();

    });


})();
