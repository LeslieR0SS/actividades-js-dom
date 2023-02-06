/* Actividad  11 
A partir de la página web proporcionada (ejercicio11.html) y utilizando las funciones DOM, 
mostrar por pantalla la siguiente información: 
1. Número de enlaces de la página 
2. Dirección a la que enlaza el penúltimo enlace 
3. Numero de enlaces que enlazan a http://prueba 
4. Número de enlaces del tercer párrafo */

function estilos() {
	// Numero de enlaces de la pagina
    var links = document.getElementsByTagName("a");
    var linksCounter = links.length;
    console.log("LinksCounter: " + linksCounter);
    console.log(links)

    let insertar =  document.createElement('p');
    insertar.innerHTML='Total de enlaces: ' + linksCounter;
    document.body.appendChild(insertar);

    // Direccion del penultimo enlace
    var lastLink = links[links.length - 1]; //Obtener el último elemento del array
    console.log("last link: " + lastLink)
    var linkAddress = lastLink.getAttribute("href");
    let insertLastAddress = document.createElement('p');
    insertLastAddress.innerHTML = "URL del último enlace: " + linkAddress;
    document.body.appendChild(insertLastAddress);

	// Numero de enlaces que apuntan a http://prueba
    var targetURL = "http://prueba";
    var count = 0;

    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute('href') == targetURL) {
            count++;
        }
    }

    console.log("Contador numero enlaces " + count);
    let sameLink = document.createElement("p");
    sameLink.innerHTML = "Total de enlaces a http://prueba: " + count
    document.body.appendChild(sameLink);
    

	// Numero de enlaces del tercer p�rrafo
    var parragraphs = document.getElementsByTagName("p");
    var targetParragraph = parragraphs[2];
    console.log(targetParragraph);
    var linksTargetParragraph = targetParragraph.getElementsByTagName("a");
    let counter = linksTargetParragraph.length;
    console.log("Total links in the target parragraph: " + counter)

    let linksInTargetParragraph = document.createElement("p");
    linksInTargetParragraph.innerHTML = "Total de links en la párrafo objetivo: " + counter;
    document.body.appendChild(linksInTargetParragraph);

}

