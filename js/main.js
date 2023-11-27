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


////visualizzare in pagina 5 numeri casuali:
//creazione numeri casuali
//stampo i numeri in pagina



function game() {
    //salvo elemento html nella costante htmlNumbers
    const htmlNumbers = document.getElementById('pc');
    console.log(htmlNumbers);


    let cpuNummbers = [];
    let i = 0;

    while (cpuNummbers.length < 5) {
        const randomNumbers = Math.floor(Math.random() * 10) + 1;
        if (!cpuNummbers.includes(randomNumbers)) {
            cpuNummbers.push(randomNumbers);
            i++;
        }
    } console.log('cpuNummbers =', cpuNummbers)
    htmlNumbers.innerHTML = cpuNummbers;

    //da li parte un timer di 30 sec,dopo 30sec i numeri scompaiono
    let time = 3
    const clock = setTimeout(function timer() {
        while (time !== 0) {
            time--
            console.log(time);
            if (time === 0) {
                htmlNumbers.classList.add('hide');
                clearTimeout(clock);
                console.log('timer expired');

            }
        }

        //chiedo al user di inserire i numeri che ha visto
        let archive = [];
        while (archive.length < 5) {
            let memoria = Number(prompt('inserisci i numeri'));
            archive.push(memoria);
        }htmlNumbers.classList.remove('hide')
        console.log(archive);

        //stampo i numeri inseriti da user nel DOM
        const userNumber= document.getElementById('user');
        userNumber.innerHTML=archive;


        function winOrLose(randomNumbers,memoria){
            if (randomNumbers.includes(memoria)){
                console.log('hai vinto')
            }else{
                console.log('hai perso');
            }
        }
        winOrLose()
    }, 3000);


    
    console.log(clock);

}
game()

//utente deve inserire uno alla volta i numeri visualizzati

































































/*
//PROVA DI RICREARE UN ARRAY DI NUM CASUALI E STAMPARLI IN PAGINA
function human() {

    //prendere lelemento nel html e salvarlo in una costante
    const uomo = document.getElementById('user');
    console.log(uomo);


    let userNumber = [];
    let y = 0;

    while (userNumber.length < 5) {
        const rdn = Math.floor(Math.random() * 10) + 1;
        if (!userNumber.includes(rdn)) {
            userNumber.push(rdn);
            y++;
        }
    } console.log('userNumber=', userNumber);

    let savage= new Audio('21savage.mp3')
    savage.play()
uomo.innerHTML = userNumber;


}
human()


//prova 2 :)
function human() {

    const prova = document.getElementById('user')
    console.log(prova)

    //genero numeri random univoci

    let insieme = [];

    let z = 0;
    while (insieme.length < 5) {
        const test = Math.floor(Math.random() * 10) + 1;
        if (!insieme.includes(test)) {
            insieme.push(test);
            z++;
        }
    } console.log('insieme =', insieme)


    prova.innerHTML=insieme;

}
human()
*/