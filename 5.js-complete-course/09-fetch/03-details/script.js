/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

document.getElementById("run").addEventListener("click", () => {

    async function getData() {
        let response = await fetch('../../_shared/api.json');
        let data = await response.json();
        console.log(data);
        data = data["heroes"];

        data.forEach(hero => {
            let templateHtml = document.getElementById("tpl-hero").content.cloneNode(true);
            templateHtml.querySelector(".name").innerText = hero.name;
            templateHtml.querySelector(".alter-ego").innerText = hero.alterEgo;
            templateHtml.querySelector(".powers").innerText = hero.abilities;
            document.getElementById("target").appendChild(templateHtml);
        })
    }
    getData();
});

