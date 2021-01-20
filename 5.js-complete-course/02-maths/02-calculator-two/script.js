/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(function() {
    alert(parseInt(document.getElementById("op-one").value) + parseInt(document.getElementById("op-two").value));

    var performOperation = function(operation) {
        function plus(a,b) {
            return (a + b);
        }

        function minus(a,b) {
            return (a - b);
        }

        function multiply(a,b) {
            return (a * b);
        }

        function divide(a,b) {
            return (a / b);
        }

        function calc() {
            let w;
            let x = document.getElementById("oper1").value;
            let y = document.getElementById("operx").value;
            let z = document.getElementById("oper2").value;
            //document.getElementById("resul").innerHTML=w;

            switch (y) {
                case '0':
                    w = plus(x, z);
                    document.getElementById("resul").innerHTML=w;
                    break;
                case '1':
                    w = minus(x, z);
                    document.getElementById("resul").innerHTML=w;
                    break;
                case '2':
                    w = multiply(x, z);
                    document.getElementById("resul").innerHTML=w;
                    break;
                case '3':
                    w = divide(x, z);
                    document.getElementById("resul").innerHTML=w;
                    break;
                default:
                    w = "Don't really know..";
            }

        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();

