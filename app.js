document.addEventListener('DOMContentLoaded', function() {

    
    let btnDiv = document.createElement('div');
    btnDiv.id = 'container';
    document.body.appendChild(btnDiv);
    
    let button1 = document.createElement('button');
    button1.className = 'btn';
    let btnText = document.createTextNode('add square');
    button1.append(btnText);
    btnDiv.append(button1);
    
    
    let div2 = document.createElement('div');
    div2.className = 'squaresDiv';
    document.body.appendChild(div2);
    let squaresDivId = 0;
    
    button1.addEventListener('click', function() {
        squaresDivId++;
        let divBoxArea = document.createElement('span');
        divBoxArea.id = squaresDivId;
        divBoxArea.className = 'divBoxArea';
        let squaresText = document.createTextNode(squaresDivId);
        divBoxArea.appendChild(squaresText);
        div2.appendChild(divBoxArea);
        
        divBoxArea.addEventListener('click', function() {
            function generateColor() {
                let randColor = '#' +Math.floor(Math.random() *16777215).toString(16);
                return randColor;
            }
            
            //let randColor = ['blue', 'green', 'yellow', 'brown', 'grey', 'pink', 'purple'];
            divBoxArea.style.backgroundColor = generateColor();
        });

        divBoxArea.addEventListener('dblclick', function() {
            if(divBoxArea.id % 2 === 0 && divBoxArea.nextSibling === null) {
                alert("I'm last in line!");
            }else if (divBoxArea.id % 2 === 0) {
                divBoxArea.nextSibling.remove();
            } else if (divBoxArea.id % 2 === 1 && divBoxArea.previousSibling === null) {
                alert("There's no one before me!");
            } else if (divBoxArea.id % 2 === 1) {
                divBoxArea.previousSibling.remove();
            }
        })

    });
    



})