import { KEPEK } from "./adatok.js";
import { htmlOsszeAllit } from "./fuggvenyek.js";

/*1. feladat:  galéria kisképeinek elhelyezése */
/* fogd meg a .galeria elemet */
const galeriaELEM = document.getElementsByClassName("galeria")[0];
console.log(galeriaELEM);


/* írd bele az összeálíltott html képsorozatot */
galeriaELEM.innerHTML = htmlOsszeAllit(KEPEK)

/*2. feladat  A .nagykep divben lévő img elem megfogása */
const nagyimgELEM = document.querySelector(".nagykep img");

/* A .nagykep div megfogása */
const nagykepELEM = document.querySelector(".nagykep"); // HA BAJ VAN ITT A BAJ

/*3. feladat-  eseménykezelő hozzáadása a kisképekhez  */
/* Az előzőekben létrehozott kisképek megfogása (querySelectorAll) - ez egy lista lesz */
const kiskepELEMEK = document.querySelectorAll(".kep")

/* eseménykezelő hozzáadása a kisképekhez, ciklussal */
/* Az eseménykezelő függvényében: ha a kisképre kattintunk, akkor a nagykép src attribútumát le kell 
cserélni a kiskép src attribútumában megadott elérési útvonalra  */
for (let index = 0; index < kiskepELEMEK.length; index++) {
    // const element = kiskepELEMEK[index];
    kiskepELEMEK[index].addEventListener("click",function(event){
        console.log(event.taget.src)
        nagyimgELEM.src=event.target.src;
    }
    )
}

/* 4. feladat .bal és a .jobb gombokra kattintva léptessük a galériát */

let aktIndex = 0;

// fogd meg a jobb gombot
const jobbGOMB = document.querySelector(".jobb")
// tegyel ra egy esemenykezelot
jobbGOMB.addEventListener("click", jobbra);

// az es.kez.ben az aktindex valtozo erteket noveld
// aktindex valtozo megfelelo kep eleresi utjat csereld le a nagykepelem img src.jeben
function jobbra(){
    aktIndex++;
    // aktIndex=aktIndex%KEPEK.length; ---> ua. mint az if-es
    if (aktIndex >= KEPEK.length){
        aktIndex=0;
    }
    console.log(aktIndex);
    console.log(KEPEK[aktIndex].kep)
    nagyimgELEM.src=KEPEK[aktIndex].kep;

}

