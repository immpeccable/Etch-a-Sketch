
let body = document.querySelector('#body');
let applyButton = document.querySelector('#btn');
let inputTxt = document.querySelector('#ipt');
let belowContent = document.querySelector('#below-content');
let currentGridSize = 16;
let examinedCell;
let cellLength = 31.25;
createGrid(currentGridSize);

function createGrid(len){
    currentGridSize = len;
    noc = currentGridSize * currentGridSize;
    
    cellLength = 500/len;

    let grid = document.createElement('div');
    
    grid.style.cssText = "display: flex; flex-direction: column; width: 500px; height: 500px; flex: 1; margin-left: 10%;"

    grid.setAttribute('id', 'grid');

    belowContent.appendChild(grid);
    

    for(let i = 0; i<len; i++){

       let row = document.createElement('div');
        row.style.cssText = "display: flex";
        grid.appendChild(row);

        for(let j = 0; j<len; j++){

            
            let cell = document.createElement('button');
            cell.setAttribute('id',"btn" + (i*len+j));
            cell.style.width = cellLength + "px"
            cell.style.height = cellLength +"px";
            cell.style.cssText += "background-color: white; border-radius: 0; border-color: aliceblue; border-width: 1px;";
            row.appendChild(cell);
        }
    }
    mainFunc();
}


function clickFunc(){
    
    let gridSize = document.getElementById("ipt").value;
    belowContent.removeChild(grid);
    createGrid(gridSize);

}


applyButton.addEventListener('click', clickFunc);


function mainFunc(){
    console.log(noc);
    for(let q = 0; q < noc; q++){

        let btn = document.getElementById("btn" + q);
        btn.addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = 'black';
            event.target.style.border = "none";
        })
    }
}

