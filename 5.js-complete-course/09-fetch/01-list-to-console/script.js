/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

document.getElementById("run").addEventListener("click", () => {

    async function getData() {
        let data = await fetch('../../_shared/api.json');
        let result = await data.json();
        console.table(result);
    }

    getData();

});