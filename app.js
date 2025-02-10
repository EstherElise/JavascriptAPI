//Her kommer din Javascript-kode. Kommentarene er lagt til for å hjelpe deg med å dele opp oppgavene,
// du kan slette disse hvis du ønsker.

// Del 1: Lag karakter og lagre karakteren i localStorage

//Seksjon 2: Generer fiende

// Seksjon 3: Sloss!
//Du skal vise frem helten og fienden. Se HTML-dokumentet for hvordan fremvisningen skal se ut, med tanke på hvilke tagger, hierarki og hvilke klasser de skal ha.
//Du skal lage den strukturen som vist i HTML, her i Javascript og legge de til i div'en "battle-arena" fra HTML.


document.addEventListener("DOMContentLoaded", () => {

const heroName = document.getElementById("character-name").value;
const heroHp = document.getElementById("character-hp").value;
const heroAd = document.getElementById("attack-damage").value;

console.log(heroName);

function makeChar() {
  document.addEventListener("click")
  const character = { heroName, heroHp, heroAd }
  localStorage.setItem("character", JSON.stringify(character))
}
});