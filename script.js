let sketchSize = 16;

let defaultColor ='black';
let blacked = 1;
let rainbowed = 0
let erasered=0;

const mainRight = document.querySelector('.main-right');

createBoard(sketchSize);

function createBoard(sketchSize) {
    let squareSize = (700/sketchSize)+"px";
    for (i=1;i<=sketchSize;i++) {
        let div = document.createElement('div');
        div.classList.add(`div-row-${i}`);
        div.classList.add(`table-square`);
        div.style.cssText = 'display:flex ';
        mainRight.appendChild(div);
        let divRow = document.querySelector(`.div-row-${i}`)
        for (j=1;j<=sketchSize;j++) {
            let divC = document.createElement('div');
            divC.classList.add(`div-${i}-${j}`);
            divC.classList.add(`table-square`);
            divC.style.height = squareSize;
            divC.style.width = squareSize;
            divC.addEventListener('mouseenter',colored)
            ///divC.addEventListener('mouseout',colorWhited)
            divRow.appendChild(divC);
        }
    }
    console.log('created board');
}

function colored(e) {
    if (blacked ===1) {
        e.target.style.backgroundColor= defaultColor;
        console.log(e.target.getAttribute('class'))
    }
    else if (rainbowed ===1) {
        let red = Math.floor(Math.random()*256);
        let green = Math.floor(Math.random()*256);
        let blue = Math.floor(Math.random()*256);
        let rainbowColor = `rgb(${red},${green},${blue})`;
        e.target.style.backgroundColor= rainbowColor ;
    }
    else if (erasered === 1) {
        e.target.style.backgroundColor = defaultColor;
    }

}

function clearBoard() {
    sketchSizeString=prompt("Enter the size of grids : ");
    sketchSize=Number(sketchSizeString);
    const mainRight = document.getElementById('main-right');
    while (mainRight.firstChild) {
        mainRight.removeChild(mainRight.firstChild);
    }
    createBoard(sketchSize)
}

function colorBlacked() {
    blacked = 1;
    rainbowed = 0;
    erasered=0;
    return(defaultColor = 'black') ;
}

function colorRainbow() {
    rainbowed = 1;
    blacked = 0;
    erasered=0;
}

function eraser() {
    blacked=0;
    rainbowed=0;
    erasered=1;
    return(defaultColor='white')
}
