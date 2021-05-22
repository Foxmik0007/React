// Recherche d'element à partir de document

    //Recherche par ID
    const sub1 = document.getElementById('subtitle1');

    //Recherche par Tag
    const body = document.getElementsByTagName('body');

    //Recherche par Query - ajoute de la complexité pour plus de precision
    const elt = document.querySelector("#Contenaire div.box1 > a");
    

//Recherche depuis un element
    //Code initial
const elts = document.getElementById('Contenaire');
    
    //Recherche à partir de l'element principal
    //Retourne les elements box
    elts.children;
