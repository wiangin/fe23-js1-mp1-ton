//Loop 5 times, text and backgroundcolor change gradually
const rad = ['Rad 1', 'Rad 2', 'Rad 3', 'Rad 4', 'Rad 5']
const textSize = ['1rem', '2rem', '3rem', '4rem', '5rem']

for(let i = 0; i < 5; i ++){
    const pEl = document.createElement('p');
    document.body.appendChild(pEl);
    pEl.style.textAlign = 'center';
    pEl.style.color = `hsl(230, 100%, 70%)`;
    let hue = 100 + i * 25;
    pEl.style.backgroundColor = `hsl(${hue}, 100%, 80%)`;
    pEl.innerText = rad[i];
    pEl.style.fontSize = textSize[i];
}

// Container Box
const container = document.createElement('div');
document.body.appendChild(container);
container.style.border = '1px solid black';
container.style.height = '300px';
container.style.display = 'flex';
container.style.justifyContent = 'space-evenly';
container.style.alignItems = 'center';

let numberList1 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let numberList2 = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0']
let wordsList = ['ett','två','tre','fyra','fem','sex','sju','åtta','nio','tio'];

//3 inside Boxes
for(let i = 0; i < 3; i++){
    let insideBox = document.createElement('div');
    container.appendChild(insideBox);
    insideBox.style.border = '10px solid hsl(240, 50%, 75%)';
    insideBox.style.width = '50px';

    // Box nr1
    if(i == 0){
        for(let j = 0; j < numberList1.length; j++){
            const pEl = document.createElement('p');
            insideBox.appendChild(pEl);
            pEl.style.margin = '0';
            pEl.innerText = numberList1[j];  

            if(numberList1[j] % 2 == 0){
                pEl.style.backgroundColor = 'black';
                pEl.style.color = 'white';
            }   
            
            if(numberList1[j] == numberList1[4]){
                pEl.style.backgroundColor = 'hsl(240, 50%, 75%)'
            }
        }  
    }

     // Box nr2
    else if(i == 1){
        for(let k = 0; k < numberList2.length; k++){
            const pEl = document.createElement('p');
            insideBox.appendChild(pEl);
            pEl.style.margin = '0';
            pEl.innerText = numberList2[k];   
            pEl.style.textAlign = 'center';

            if(numberList2[k] % 2 == 0){
                pEl.style.backgroundColor = 'black';
                pEl.style.color = 'white';
            }

            if(numberList2[k] == numberList2[1]){
                pEl.style.backgroundColor = 'hsl(240, 50%, 75%)'
            }
        }
    }

     // Box nr3
    else if(i == 2){
        for(let l = 0; l < wordsList.length; l++){
            const pEl = document.createElement('p');
            insideBox.appendChild(pEl);
            pEl.style.margin = '0';
            pEl.innerText = wordsList[l];  
            pEl.style.textAlign = 'end'; 

            if(numberList1[l] % 2 == 0){
                pEl.style.backgroundColor = 'black';
                pEl.style.color = 'white';
            }

            if(wordsList[l] == wordsList[5]){
                pEl.style.backgroundColor = 'hsl(240, 50%, 75%)'
            }
        }
    }
}

