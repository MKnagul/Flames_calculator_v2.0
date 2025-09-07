let flamesString = "FLAMES";


function flames(){
    flamesString = "FLAMES";
    let name1 = document.getElementById("name1").value;
    let name2 = document.getElementById("name2").value;
    let flamesResult = calculateFlames(name1, name2);
    let name = name1+name2;
    document.getElementById("result").innerHTML = `<h1>${flamesResult}</h1>`;
} 

function calculateFlames(name1, name2){
     let secondReminingLetter = name2;
     let firstReminingLetter = name1;
     for (let i=0; i<name1.length; i++){
        for(let j=0;j<secondReminingLetter.length;j++)
        {
            if(name1[i] === secondReminingLetter[j]){
               secondReminingLetter = secondReminingLetter.replace(name1[i], '');
               firstReminingLetter = firstReminingLetter.replace(name1[i], '');
                break;
            }
        }
    }
    let remaining_length = firstReminingLetter.length + secondReminingLetter.length;
    let indexvalue = 0;
    while(true){
        if(flamesString .length === 1){
            break

        }
        let count = 0;
        for(let m = indexvalue; m<flamesString.length;m = m+1){
       
            if(++count === remaining_length){ 
                
                flamesString = flamesString.replace(flamesString[m], '');
                indexvalue = m % flamesString.length;
                break;
            }
             if(m === flamesString.length -1 )
            {
                m = -1;
            }
        }
    }
    return flamesString;
}