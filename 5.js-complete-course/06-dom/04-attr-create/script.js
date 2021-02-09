/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let element = document.getElementById("source");
    let imgValue = element.getAttribute("data-image");
    let targetElement = document.getElementById("target");

    let img = document.createElement("img");
    img.setAttribute("src", imgValue);

    targetElement.appendChild(img);
    sourceElement.remove();


})();
