/**Actividad B2
Añade un párrafo <p> con el texto “Hola Mundo” y una imagen <img> con el enlace
http://placekitten.com/g/200/300 usando DOM al ejercicioB2.html.
Recuerda que para añadir el atributo (por ejemplo el src) a un elemento debes hacerlo de la
siguiente forma:  nodoElemento.src = “http://prueba.com” */

function estilos(){
    var newParagraph = document.createElement("p");
    var content = document.createTextNode("Hola Mundo");

    newParagraph.appendChild(content);
    document.body.appendChild(newParagraph);
    
    const image = document.createElement('img');
    image.src = "http://placekitten.com/g/200/300";
    document.body.appendChild(image);

}


