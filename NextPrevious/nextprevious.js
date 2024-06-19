document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".GRID");
    let url = 'https://pokeapi.co/api/v2/pokemon/';
    let buttons = document.querySelectorAll("button");
    let nextButton = buttons[1];
    let previousButton = buttons[0];
    let urlSiguiente = '';
    let urlAnterior = '';

    const fetchData = (url) => {
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(datos => {
                const pokemons = datos.results;
                urlSiguiente = datos.next;
                urlAnterior = datos.previous;
                grid.innerHTML = '';
                pokemons.forEach(pokemon => {
                    grid.innerHTML += `<div class="box"><p>${pokemon.name}</p></div>`;
                });
            });
    };

    fetchData(url);

    nextButton.addEventListener("click", () => {
        if (urlSiguiente) {
            fetchData(urlSiguiente);
        }
    });

    previousButton.addEventListener("click", () => {
        if (urlAnterior) {
            fetchData(urlAnterior);
        }
    });
});