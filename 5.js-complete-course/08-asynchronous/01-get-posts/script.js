/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019fefefefefefefefeffffefeffffefefeffefef
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

document.getElementById("run").addEventListener("click", () => {

        window.lib.getPosts((error, articles) => {
            if (error !== null) {
                alert("There's an error!");
            } else {
                console.table(articles);
            }
        });

});
