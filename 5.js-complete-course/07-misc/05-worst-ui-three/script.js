/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

// array van inputs waarvan input steeds met juiste button overeen komt dankzij zelfde index
    let inputs = document.querySelectorAll("input");

    // loop over elke button waarbij zowel input als button gemanipuleerd worden
    document.querySelectorAll("button").forEach((button, index) => {
        let input = inputs[index];
        let number = input.dataset.min;

        let slotMachine = setInterval(function(){
            number = numberSpinner(input, number);
        }, 50);

        button.addEventListener("click", function () {
            clearInterval(slotMachine);
        })
    })

    // intervalfunctie om display mee te laten loopen met de inputfields
    setInterval(function () {
        let output = '0';
        inputs.forEach(element => {
            output += element.value.toString().padStart(element.dataset.min.length, '0');
        });
        document.getElementById("target").innerHTML = output;
    }, 50);

    // intervalfunctie die hierboven in de slotMachine wordt opgeroepen voor elke input
    function numberSpinner(input, number){
        input.value = number.toString();
        number++;
        if (number >= input.dataset.max){
            number = input.dataset.min;
        }
        return number;
    }

})();
