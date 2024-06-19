window.addEventListener("load", () => {
    let botones = document.getElementsByTagName("button")
    let anterior = botones[1]
    let siguiente = botones[2]

    let image = document.getElementById("image")

    let sources = ["Photos/Blythe1.jpg", "Photos/Blythe2.jpg", "Photos/blythe3.jpg"];

    let indice = 0;

    siguiente.addEventListener("click", function () {
        indice++
        if (indice >= sources.length) {
            indice = 0
        }
        image.src = sources[indice]
    })

    anterior.addEventListener("click", function () {
        indice--;
        if (indice < 0) {
            indice = sources.length - 1;
        }
        image.src = sources[indice]
    });
});