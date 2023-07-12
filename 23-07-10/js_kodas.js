// Kintamieji ir sąlygos

// 1.Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.

// 2.Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį:
// "Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".

// 3.Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.

// 4.Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. Jame visas “o” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.

// 5.Sukurkite keturis kintamuosius kuriems sugeneruokite atsitiktines reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. 

// 6.Pasinaudokite atsitiktinio skaičiaus generavimo funkcija. Sukurkite du kintamuosius ir naudodamiesi funkcija jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.

// 7.Naudokite funkciją ir sukurkite tris kintamuosius kuriems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite vidurinę reikšmę.

// 8.Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.

// 9.Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.

//********************** 1 užduotis **************************

let a = 'Angelina';
let b = 'Jolie';

if(a.length <= b.length) {
    console.log(a);
} else if(a.length === b.length){
    console.log(`Vardas ir pavardė vienodo ilgio`);
}
else {
    console.log(b);
}

//********************** 2 užduotis **************************

let vardas = 'Tomas';
let pavarde = 'Gelazunas';
let gmetai = '1985';
let metai = '2023';

console.log(`Aš esu ${vardas} ${pavarde}. Man yra ${metai - gmetai} metai(-ų).`);
//Arba galima taip, su '' kabutėmis: console.log('Aš esu '+ vardas +' '+ pavarde +'. Man yra '+ (metai - gmetai) +' metai(-ų).');


//********************** 3 užduotis **************************

let actname = 'Angelina';
let surname = 'Jolie';

let rezultatas = actname.substring(5) + surname.substring(2);
console.log(rezultatas);

//geriau taip, tada galima keisti aa ir bb ir kodas parodys rezultatą:

let aa = "Angelina";
let bb = "Jolie";
let rezultatas2 = aa[aa.length - 3] + aa[aa.length - 2] + aa[aa.length - 1] + bb[bb.length - 3] + bb[bb.length - 2] + bb[bb.length - 1];
console.log(rezultatas2);

//********************** 4 užduotis **************************

let sakinys = 'Once upon a time in hollywood';
sakinys = sakinys.replaceAll('O','*').replaceAll('o','*');
console.log(sakinys);

//arba regex pagalba:

sakinys = sakinys.replaceAll(/[oO]/g,'*');
console.log(sakinys);

//********************** 5 užduotis **************************

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let pirmas = rand(0, 2);
let antras = rand(0, 2);
let trečias = rand(0, 2);
let ketvirtas = rand(0, 2);

let nuliai = 0;
let vienetai = 0;
let dvejetai = 0;

console.log(pirmas, antras, trečias, ketvirtas);