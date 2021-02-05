import {magic, weapons, gem, character, stateHero} from "./data.js";

function init(){

    const buttonsHero = document.querySelectorAll('.btn-character');
    //Para cada botón configuramos la acción a realizar cuando el usuario haga click
    buttonsHero.forEach(
        function(button){
            button.addEventListener("click", updateHero);
        }
    );
}

function updateHero(){
    let nameHero = this.id;
    const imgHero = document.querySelector('#hero-img');
    imgHero.scr= `img/hero-${nameHero}.png`;

    const buttonAnterior = document.querySelector('.btn.character-on')
    buttonAnterior.classList.toggle("btn-character-on")
}

function setButtonsHero(buttonHero) {
    buttonHero.addEventListener("click", function (){
        //Si es troba deshabilitat no es fa res
        if (this.readOnly) return false;

        //Modifica estat hero
        updateHero(this.id);

        var buttonsCharacter = document.querySelector(".btn-character-on");
        if (buttonsCharacter) {
            buttonsCharacter.classList.toggle("btn-character-on")
            buttonsCharacter.readOnly = false;
        }
        //Botó actal
        this.classList.toggle("btn-character-on");
        this.readOnly = true;
    });
}
/**
 * Actualiar personajes
 * ----------------------------------------------------------------------
 */
updateHero = (name) => {
    //Actualizamos estado nombre
    stateHero.name = name;

    //Actualizamos estado imagen
    let heroImg = document.getElementById("hero-img");
    heroImg.src = "img/hero-" + name + ".png";
};

/**
 * Actualiza el estado de gemas
 * -----------------------------------------------------------------------
 */
const refreshGemsHero = (gem, active) => {
    if (active){
        stateHero.aGem.push(gem);
    } else {
        stateHero.aGem = stateHero.aGem.filter(function(element){
            return element != gem;
        });

    }
    console.log("Gemas actuales", stateHero.aGem);
};

/**
 * Actualiza el estado de armas
 * ------------------------------------------------------------------------
 */
const refreshWeaponsHero = (weapon, active) => {
    if (active){
        stateHero.aWeapons.push(weapon);
    }else {
        stateHero.aWeapons = statHero.aWeapons.filter(function(element){
            return element !== weapon;
        });
    }
    console.log("Armas actuales", statHero.aWeapons);
};

/**
 * Actualiza el estado de magia
 * -----------------------------------------------------------------------
 */
const refreshMagiaHero = (pMagia, pActive) => {
    if (pActive){
        stateHero.aMagic.push(pMagia);
    }else{
        stateHero.aMagic = stateHero.aMagic.filter(element=> element != pMagia);
    }
    console.log("Magias actuales", stateHero.aMagic);
};

const viewSkillsHero = ()=> {
    // Points
    document.getElementById("points-attack").innerHTML="A-" + stateHero.calculateAttack();
    ducument.getElementById("points-defense").innerHTML="D-" + stateHero.calculateDefense();
};

/**
 * Mostra les dades en pantalla del hero
 * -----------------------------------------------------------------------
 */
// TODO: REFACTORING
const viewHero = (oHero) => {
// Actualizar magia
    console.log ("Acutalizando vista magia ....");
    magic.forEach(
        function(itemMagic){
            const magicFound = stateHero.aMagic.find((magicHero) => magicHero == itemMagic);
            let eMagic = document.getElementById(itemMagic);
            eMagic.classList.remove("item-off", "item-on");
        //Borramos las clases que tenga
            eMagic.classList.add(magicFound?"item-on":"item-off");
        //añadimos la clase correspondiente
        console.log(itemMagic,eMagic.classList);
        }
    );

    //Actualizar armas
    console.log("Actualizando vista armas....");
    weapons.forEach(
        function(weapon){
            const weaponFound = stateHero.aWeapons.find( (weaponsHero) => weaponsHero == weapon);
            let eWeapon = document.getElementById(weapon);
            eWeapon.classList.remove("item-off", "item-on");
            //Borramos las clases que tenga
            let claseCss = weaponFound?"item-on":"item-off";
            eWeapon.classList.add(claseCss); //Añadimos la clase correspondiente
        }
    );

    //Actualizar gemas
    gem.forEach((gema) => {
        const found = statHero.aGem.find( gemaHero => gemaHero == gema.name);
        let name = gema.name;
        let eGema = document.getElementById(name);
        let classGemaActive = found ? "item-on" : "item-off";
        eGema.classList.remove("item-off", "item-on");
        eGema.classList.add(classGemaActive);
        console.log(gema, classGemaActive);
    });

    viewSkillsHero();
};
/**
 * Función que inicializa los objetos
 */
function init1() {
    document.querySelector("form").reset();

    //Actualizará el estado cada vez que es marca un checkbox
let listCheckboxMagia= document.querySelectorAll("input[class='checkMagia']");
console.log("Lista checkbox magia:", listCheckboxMagia);
listCheckboxMagia.forEach((element) => {
    element.addEventListener("click", function (event) {
        refreshMagiaHero(this.name, this.checked);
    });
});


// Actualizará el estado cada vez que se marca un checkbox
let listCheckBoxArmas = document.querySelectorAll("input[class='checArma']");
console.log("Lista checkbox armas:", listCheckboxArmas);
listCheckboxArmas.forEach((element)=> {
    element.addEventListener("click", function (event) {
    refreshWeaponsHero(this.name, this.checked);
    });
});

let listCheckboxGemas = document.querySelectorAll("input[class='checkGema']");
console.log("Lista checkbox:", listCheckboxGemas);

//Actualizará el estado cada vez que se marca un checkbox
listCheckboxGemas.forEach((element) => {
    let aGem = document.querySelectorAll("input[class='checkGema']:checked");
    if (aGem && aGem.length < 3) {
        refreshGemsHero(this.name, this.checked);
    } else {
        this.checked = false;
        //Aviso:número máximo de gemas asignadas
        console.warn("Número máximo de gemas asignadas");
        alert("Sólo se pueden seleccionar dos gemas");
    }
});


//Configuració de l'event del botó d'actualització de visió de dades del Hero
let btnUpdateViewHero = document.getElementById("update-view-hero");
btnUpdateViewHero.addEventListener("click", function (e){
    viewHero(stateHero);
});

//Acción cambio de personaje
let listBtnHeros = document.querySelectorAll(".box-personaje > button");
listBtnHeros.forEach((buttonHero) =>{
    buttonHero.addEventListener("click", function(event) {
        //Si es torba deshabilitat no es fa res
        if(this.readOnly) return false;

        //Modifica estat hero
        updateHero(this.id);

        //Dsmarca botó anterior
        var buttonsCharacter = document.querySelector(".btn-character-on");
        if (buttonsCharacter){
            buttonsCharacter.classList.toggle("btn-character-on");
            buttonsCharacter.readOnly = false;

            //Botó actual
            this.classList.toggle("btn-character-on");
            this.readOnly=true;
        }
    
    });
});
//Points
viewSkillsHero();

}

init();
init1();