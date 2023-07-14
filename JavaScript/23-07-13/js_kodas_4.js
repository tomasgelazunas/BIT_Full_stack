// 1. Nupieškite kvadratą iš “*”, kurio kraštines sudaro 100 “*”. Panaudokite css stilių, kad kvadratas ekrane atrodytų kvadratinis.
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// 2. Prieš tai nupieštam kvadratui nupieškite raudonas istrižaines.
// 3. Metam monetą. Monetos kritimo rezultatą imituojam rand() funkcija, kur 0 yra herbas, o 1 - skaičius. Monetos metimo rezultatus išvedame į ekraną atskiroje eilutėje: “S” jeigu iškrito skaičius ir “H” jeigu herbas. Suprogramuokite tris skirtingus scenarijus kai monetos metimą stabdome:
// Iškritus herbui;
// Tris kartus iškritus herbui;
// Tris kartus iš eilės iškritus herbui;

// https://lt.wikipedia.org/wiki/Pirminis_skai%C4%8Dius

const rand = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
}

// first and second task

let str = '';

for (let i = 1; i <= 100; i++) {
  if (Number.isInteger((i - 1) / 11)) {
      str += '<span style="color: red;">*</span>';
  } else if (i === (Math.ceil(i / 10) * 10) - Math.floor(i / 10) || i === 10) {
      str += '<span style="color: red;">*</span>';
  } else {
      str += '<span>*</span>';
  }

  if (Number.isInteger(i / 10)) {
      str += '<br>';
  }
}

document.getElementById('stars-box').innerHTML = str;

// third task
// scene 1

const n = id => document.querySelector(`#hm > #scene${id}`);
const hs = 'HS';

str = '';

while (true) {
  const randN = rand(0, 1);

  str += hs[randN] + '<br>';

  n(1).innerHTML = str;

  if (randN === 0) break;
}

// scene 2

let i = 0;
let hmh = 0;

str = '';

while (true) {
  const randN = rand(0, 1);

  str += hs[randN] + '<br>';

  n(2).innerHTML = str;

  if (randN === 0) {
      hmh++;
  }

  if (hmh === 3) break;

  i++;
}

//scene 3

i = 0;
hmh = 0;
str = '';

let prvH = false;

while (true) {
  const randN = rand(0, 1);

  if (randN === 0) {
      hmh++;

      prvH = true;
  } else {
      hmh = 0;

      prvH = false;
  }

  str += hs[randN] + '<br>';

  n(3).innerHTML = str;

  if(hmh === 3) break;
}