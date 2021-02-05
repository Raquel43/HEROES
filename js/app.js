import {
  magic,
  weapons,
  gem,
  characters
} from "./data.js";
let stateHero = characters[0];


init();

function init() {
  //es un array que no vamos a modificar
  const buttonsHero = document.querySelectorAll(".btn-character");
  //Para cada botón configuramos la acción a realizar cuando el usuario haga click
  buttonsHero.forEach(function(button) {
    button.addEventListener("click", updateHero);
  });
  // Configurar los checkbox de magia
  const listCheckboxMagia = document.querySelectorAll(".checkMagia");
  listCheckboxMagia.forEach((element) => {
    element.addEventListener("click", function(event) {
      refreshMagiaHero(this.name, this.checked);
    });
  });

  const listCheckboxArmas = document.querySelectorAll(".checkArma");
  listCheckboxArmas.forEach((element) => {
    element.addEventListener("click", function(event) {
      refreshArmasHero(this.name, this.checked);
    });
  });

  const listCheckboxGemas = document.querySelectorAll(".checkGema");
  listCheckboxGemas.forEach((element) => {
    element.addEventListener("click", function(event) {
        if (this.checked && this.checked.length < 4) {
        refreshGemsHero(this.name, this.checked);
    } else {
        this.checked = false;
        //Aviso:número máximo de gemas asignadas
        console.warn("Número máximo de gemas asignadas");
        alert("Sólo se pueden seleccionar dos gemas");
    }
    });
  });

  const buttonUpdate = document.querySelector("#update-view-hero");
  buttonUpdate.addEventListener("click", viewPowers);
}

function viewPowers() {
  viewMagicHero();
  viewArmasHero();
  viewGemasHero();
  viewSkillsHero();
}

const viewSkillsHero = ()=> {
  // Points
  document.getElementById("points-attack").innerHTML="A-" + stateHero.calculateAttack();
  document.getElementById("points-defense").innerHTML="D-" + stateHero.calculateDefense();
};


function refreshMagiaHero(pMagia, pActive) {
  if (pActive) {

    stateHero.aMagic.push(pMagia);
  } else {
    stateHero.aMagic = stateHero.aMagic.filter((element) => element !== pMagia);
  }
}

function refreshArmasHero(pArma, pActive) {
  if (pActive) {
    stateHero.aWeapons.push(pArma);
  } else {
    stateHero.aWeapons = stateHero.aWeapons.filter(
      (element) => element !== pArma
    );
  }
}

function refreshGemaHero(pGema, pActive) {
  if (pActive) {
    stateHero.aGem.push(pGema);
  } else {
    stateHero.aGem = stateHero.aGem.filter((element) => element !== pGema);
  }
}

function updateHero() {
  //el this referencia al objeto que esta llamando esta función
  let nameHero = this.id; // This referencia al objeto o elemento que le llama: en este caso button, accedemos de esta manera a la imagen referenciada
  for (let hero of characters) {
    if (this.id == hero.name) {
      stateHero = hero;
      const imgHero = document.querySelector("#hero-img"); //Accedo al elemento imagen
      imgHero.src = `img/hero-${nameHero}.png`;

      const buttonAnterior = document.querySelector(".btn-character-on");
      buttonAnterior.classList.toggle("btn-character-on");
      //Botón actual donde el usuario ha pulsado
      this.classList.toggle("btn-character-on");

      const ActualizarEstado = document.querySelector('#form');
      ActualizarEstado.addEventListener("click",document.getElementById("form").reset());
      viewPowers();
    }
      
    }
  }


function viewMagicHero() {
  magic.forEach(function(itemMagic) {
    console.log(stateHero);
    const MagicFound = stateHero.aMagic.find(
      (magicHero) => magicHero == itemMagic
    );
    let eMagic = document.getElementById(itemMagic);
    eMagic.classList.remove("item-off", "item-on"); //Borramos las clases que tenca
    eMagic.classList.add(MagicFound ? "item-on" : "item-off"); //añadimos la clase correspondiente
  });
}

function viewArmasHero() {
  weapons.forEach(function(itemArma) {
    const ArmaFound = stateHero.aWeapons.find(
      (armasHero) => armasHero == itemArma
    );
    let eWeapons = document.getElementById(itemArma);
    eWeapons.classList.remove("item-off", "item-on"); //Borramos las clases que tenca
    eWeapons.classList.add(ArmaFound ? "item-on" : "item-off"); //añadimos la clase correspondiente
  });
}

function viewGemasHero() {
  gem.forEach(function(itemGema) {
    const GemaFound = stateHero.aGem.find(gemasHero => gemasHero == itemGema.name);
    let name = itemGema.name;
    let eGem = document.getElementById(name);
    eGem.classList.remove("item-off", "item-on"); //Borramos las clases que tenca
    eGem.classList.add(GemaFound ? "item-on" : "item-off"); //añadimos la clase correspondiente
  });
}