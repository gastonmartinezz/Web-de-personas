async function cargarPersonas() {
    try {
        const response = await fetch(`https://my-json-server.typicode.com/m-dopazo/json/personas`);
        const data = await response.json();

        const listaPersonas = document.getElementById("lista-personas");
        listaPersonas.innerHTML= "";

        data.forEach(persona => {
            const dude = document.createElement("div");

            dude.classList.add("persona");
            listaPersonas.appendChild(dude);

            const dato = document.createElement("p");
            dato.innerHTML = `Nombre: ${persona.name} <br> Mail: ${persona.email}`
            dude.appendChild(dato);
            
        });
    } catch (error){
        console.log(error);
    }
};

cargarPersonas();

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    if (localStorage.getItem("modo") == undefined){
        localStorage.setItem("modo", "dia");
        body.classList.toggle('dia') ;
    } else {
        toggle();
    }

});

const btn = document.getElementById('modo');

function toggle() {
    const body = document.body;

    if (body.classList == ""){
        body.classList.add(localStorage.getItem("modo")); 
    } else {
        body.classList.toggle('dia');
        body.classList.toggle('noche');
    }    

    let modoLocal;
    if (body.classList.contains('dia')) {
        modoLocal = "dia";
    } else {
        modoLocal = "noche";
    }

    localStorage.setItem("modo", modoLocal);

    let mode = localStorage.getItem("modo");
    if (mode === "noche") {
        body.classList.add("noche");
    }
}

btn.addEventListener('click', toggle);

const botonBuscar = document.getElementById("botonBuscar");
const inputBuscador = document.getElementById("buscador");


botonBuscar.addEventListener("click", () => {
    // Obtenemos el valor del campo de búsqueda
    const busca = inputBuscador.value.toLowerCase();

    // Obtenemos la lista de personas
    const personas = document.querySelectorAll(".persona");

    // Iteramos sobre cada persona según el término de búsqueda
    personas.forEach(persona => {
        const nombre = persona.querySelector("p").textContent.toLowerCase();
        const email = persona.querySelector("p").textContent.toLowerCase();

        if (nombre.includes(busca) || email.includes(busca)) {
            persona.style.display = "block"; 
        } else {
            persona.style.display = "none"; 
        }
    });
});
cargarPersonas();