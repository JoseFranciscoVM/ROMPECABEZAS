var rows = 4;
var columns = 4;

var currTile;
var otherTile;

var turns = 0;

window.onload = function() {
    //tabla
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            //<img de fondo >
            let tile = document.createElement("img");
            tile.src = "./imfacil1/blank2.jpg";

            //inicia 
            tile.addEventListener("dragstart", dragStart); //click sobre la imagen 
            tile.addEventListener("dragover", dragOver);   //sobrepone imagen 
            tile.addEventListener("dragenter", dragEnter); //arrastra las imagenes una por otra 
            tile.addEventListener("dragleave", dragLeave); //arrastar las imagenes 
            tile.addEventListener("drop", dragDrop);       //suelta la imagen una a otra 
            tile.addEventListener("dragend", dragEnd);      //despues de cada accion  

            document.getElementById("board").append(tile);
        }
    }

    
    let pieces = [];//en las piezas C/U
    for (let i=1; i <= rows*columns; i++) {
        pieces.push(i.toString()); //sobrepone las imagenes de cada uno de ellos 
    }
    pieces.reverse();
    for (let i =0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);

        //cambio de imagenes 
        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }

    for (let i = 0; i < pieces.length; i++) {
        let tile = document.createElement("img");
        tile.src = "./imfacil1/" + pieces[i] + ".PNG";

        //Arrastrar cada una de ellas 
        tile.addEventListener("dragstart", dragStart); 
        tile.addEventListener("dragover", dragOver); 
        tile.addEventListener("dragenter", dragEnter);
        tile.addEventListener("dragleave", dragLeave); 
        tile.addEventListener("drop", dragDrop);       
        tile.addEventListener("dragend", dragEnd);     

        document.getElementById("pieces").append(tile);
    }
}

//DRAG TILES
function dragStart() {
    currTile = this; //imagenes de la imagenes de cada uno de ellos 
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this; // esto se refiere a la imagen que se está dejando caer
}

function dragEnd() {
    if (currTile.src.includes("blank")) {
        return;
    }
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;

    turns += 1;
    document.getElementById("turns").innerText = turns;
}
