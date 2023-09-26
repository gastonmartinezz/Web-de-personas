async function personas() {
    try {
        const response = await fetch(`https://my-json-server.typicode.com/m-dopazo/json/personas`);
        /*  https://my-json-server.typicode.com/m-dopazo/json/personas
                hace referencia a la LISTA con los datos
            https://my-json-server.typicode.com/m-dopazo/json 
                hace referencia al json (creo) y (Creo) se podria usar data.personas para acceder a la LISTA de personas
            */
        const data = await response.json();
        

    } catch (error){
        console.log(error);
    }
}


const btn = document.getElementById('modo');

function toggle() {
    const body = document.body;
    body.classList.toggle('dia');
    body.classList.toggle('noche'); 

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