//Her kommer din Javascript-kode. Kommentarene er lagt til for å hjelpe deg med å dele opp oppgavene,
// du kan slette disse hvis du ønsker.

// Del 1: Lag karakter og lagre karakteren i localStorage

//Seksjon 2: Generer fiende

// Seksjon 3: Sloss!
//Du skal vise frem helten og fienden. Se HTML-dokumentet for hvordan fremvisningen skal se ut, med tanke på hvilke tagger, hierarki og hvilke klasser de skal ha.
//Du skal lage den strukturen som vist i HTML, her i Javascript og legge de til i div'en "battle-arena" fra HTML.


document.addEventListener("DOMContentLoaded", () => {


const heroNameInput = document.getElementById("character-name");
const heroName = heroNameInput.value;
const heroHpInput = document.getElementById("character-hp");
const heroHp = heroHpInput.value;
const heroAdInput = document.getElementById("attack-damage");
const heroAd = heroAdInput.value;
const btnCreateChar = document.getElementById("create-character");

//Array med profilbildene til heltene. Minus én for å fjerne det ene fiendebildet som delte classname
let heroImageGallery = document.getElementsByClassName("profile-img");
let remove = 1;
let removeImage = (heroImageGallery, remove) => {
  const copyImageGallery = [...heroImageGallery];
  for (let i = 0; i < remove; i++) {
    copyImageGallery.pop();
  }
  return copyImageGallery;
};
let newImageGallery = removeImage(heroImageGallery, remove);

console.log(newImageGallery);


function createChar() {
  const character = { Navn: heroName, HP: heroHp, Attackpower: heroAd }
  localStorage.setItem("Helt", JSON.stringify(character))
  heroName
};

btnCreateChar.addEventListener("click", createChar);


});