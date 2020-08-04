﻿function mostrarDescripcion(numPortafolio) {

    switch (numPortafolio) {
        case 1:
            $("#imagenesPortafolio").attr("src", "img/work/logicZotz/logicZotz4.jpg");
            $("#descripcionPortafolio").text("Video juego desarrollado en el lenguaje java, el cual tiene el objetivo de enseñar las bases de un leguaje de programación a niños de primaria y secundaria de entre 7 y 14 años. Esto claro en compañia del personaje favorito de la famosa serie de anime Dragon Ball.");

            break;
        case 2:
            $("#imagenesPortafolio").attr("src", "img/work/cpr_soluciones/cpr_soluciones9.jpg");
            $("#descripcionPortafolio").text("Prototipo web desarrollado en ReactJS y exclusivamente para la empresa deipi, el cual tiene como objetivo ayudar a la administracion y visualizacion de los productos de diferentes categotias y su vez brindar una mejor publicidad de ellos.");
            break;
        case 3:
            $("#imagenesPortafolio").attr("src", "img/work/tgz/tgz4.jpg");
            $("#descripcionPortafolio").text("Sitio web desarrollado para un club de gamer, en el cual se pueden enterar de lo ultimo del momento en videojuegos, dar opinion sobre algun videojuego y promocionar algun torneo o evento relacionado con esta area.");
            break;
        case 4:
            $("#imagenesPortafolio").attr("src", "img/work/toz/toz4.jpg");
            $("#descripcionPortafolio").text("Sitio web desarrollado para un club de anime, en el cual se pueden enterar de lo ultimo del momento en el mundo del anime, dar opinion sobre su distintas series de este genero, compartir sitios o articulos sobre anime y ver los ultimos capitulos de las series en emisión.");
            break;

    }

    $('#modalDescripcionPortafolio').modal({ fadeDuration: 100 });
    cargarModal();
}


var animateButton = function (e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
        e.target.classList.remove('animate');
    }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('hover', animateButton, false);
}
