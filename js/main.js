'use strict'


/* function hello(){
   alert('ti sto salutando')
} */
//setTimeout(hello, 4000);
/*

function bo() {
    console.log('non lo so')
}
const timer = setInterval(bo, 2000);
console.log('timer');

const stop = document.getElementById('stop');
stop.addEventListener('click', function () {
    console.log('stoppo il timer');
    //per fermare il timer uso CLEARINTERVAL
    clearInterval(timer)
});
 */


//chiedi al utente quanti secondi mancano alla cottura della pasta

/* const seconds = Number(prompt('quanto manca?'))
console.log({seconds})

setTimeout(function(){
alert('è pronta')
}, seconds*1000); */

/********************************
//COUNTDOWN OTTIMIZZATO
let tempo = 10;

const clock = setInterval(function(){
       
    if(tempo === 0){
        clearInterval(clock);
        console.log('buon anno!!')
    }else{
        console.log(tempo);
        tempo--;
    }
},  1000); 
***********************************/


//visualizzare in pagina 5 numeri casuali


const cpuNummbers = [];
let randomNumbers = Math.floor(Math.random() * 100) + 1;

for (let i = 0; cpuNummbers.length < 5; i++) {
}

if (!cpuNummbers.includes(randomNumbers)){
    cpuNummbers.push(randomNumbers);


} console.log({ randomNumbers })

console.log(cpuNummbers)

