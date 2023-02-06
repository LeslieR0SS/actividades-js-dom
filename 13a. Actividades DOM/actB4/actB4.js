/* Edita el código proporcionado en ejercicioB4.html y realiza los siguientes pasos: 
    1. Añade la etiqueta <script> al final del cuerpo del HMTL 
    2. Cambia el estilo de letra a "Arial, sans-serif" 
    3. Añade la información a los <spans> con tu propia información 
    4. Añade a cada <li> una clase llamada class=”listitem” de forma que quede de 
    color roja toda la lista. 
    5. Crea un elemento <img> con el atributo src con una URL de una imagen. Añádela al 
    código HTML. */

function estilos(){
    //2.
    document.body.style.fontFamily = "Arial, sans-serif";
   // document.body.style.fontSize = "32px";    para cambiar el tamaño del texto
    // 3.- 
    document.getElementById("nickname").innerHTML = "Florian"; // para escirbir dentro del span de Nickname
    document.getElementById("hobby").innerHTML = "Rugby";
    document.getElementById("ciudad").innerHTML = "Sidney";

    // 4.- Para añadir una clase a todos los elementos li
    var elementosLista = document.getElementsByTagName("li");
    for (var i = 0; i < elementosLista.length; i++) {
        elementosLista[i].classList.add("listitem");
    }

    // 5.- Nuevo elemento
    var newImage = document.createElement("img");
    newImage.setAttribute("src", "https://www.autopista.es/uploads/s1/10/28/17/39/la-ballena-jorobada-dedica-gran-parte-de-su-tiempo-a-estar-en-movimiento.jpeg");
    document.body.appendChild(newImage);

}