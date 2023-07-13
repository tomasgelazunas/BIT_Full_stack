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

sakinys = sakinys.replaceAll(/[o]/gi,'*');
console.log(sakinys);

//g ir i žymos padaro case insentitive

//********************** 5 užduotis **************************

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log("Penkta užduotis");
      function rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      let firstVariable = rand(0, 2);
      let secondVariable = rand(0, 2);
      let thirdVariable = rand(0, 2);
      let fourthVariable = rand(0, 2);
      console.log(firstVariable);
      console.log(secondVariable);
      console.log(thirdVariable);
      console.log(fourthVariable);

      let countOfZero = 0;
      let countOfOne = 0;
      let countOfTwo = 0;

      // firstVariable
      if (firstVariable === 0) {
        countOfZero++;
      } else if (firstVariable === 1) {
        countOfOne++;
      } else {
        countOfTwo++;
      }
      // secondVariable
      if (secondVariable === 0) {
        countOfZero++;
      } else if (secondVariable === 1) {
        countOfOne++;
      } else {
        countOfTwo++;
      }
      // thirdVariable
      if (thirdVariable === 0) {
        countOfZero++;
      } else if (thirdVariable === 1) {
        countOfOne++;
      } else {
        countOfTwo++;
      }
      // fourthVariable
      if (fourthVariable === 0) {
        countOfZero++;
      } else if (fourthVariable === 1) {
        countOfOne++;
      } else {
        countOfTwo++;
      }
      console.log(`Iš viso nulių: ${countOfZero}`);
      console.log(`Iš viso vienetų: ${countOfOne}`);
      console.log(`Iš viso dvejetų: ${countOfTwo}`);

//********************** 6 užduotis **************************

      console.log("Šešta užduotis");
      let pirmas = rand(0, 4);
      console.log(pirmas);
      let antras = rand(0, 4);
      console.log(antras);
      if (pirmas > antras) {
        console.log("Rezultatas:" + (pirmas / antras).toFixed(2));
      } else if (pirmas === antras) {
        console.log("Reikšmės yra lygios");
      } else {
        console.log("Rezultatas:" + (antras / pirmas).toFixed(2));
      }

//********************** 7 užduotis **************************

      console.log("Septinta užduotis");
      let first = rand(0, 25);
      console.log(first);

      let second = rand(0, 25);
      console.log(second);

      let third = rand(0, 25);
      console.log(third);

      let min = Math.min(first, second, third);
      let max = Math.max(first, second, third);
      let vidurinisSkaicius = first + second + third - (min + max);
      console.log("Vidurinis skaičius:", vidurinisSkaicius);

//********************** 8 užduotis **************************

      console.log("Aštunta užduotis");
      let firstName = "Audrey";
      let lastName = "Hepburn";
      let firstLetters = firstName[0] + lastName[0];
      console.log(firstLetters);

//********************** 9 užduotis **************************

      console.log("Devinta užduotis");
      let alphabet = "abcdefghijklmnopqrstuvwxyz";
      let positionOne = rand(0, alphabet.length - 1);
      let positionTwo = rand(0, alphabet.length - 1);
      let positionThree = rand(0, alphabet.length - 1);
      console.log(
        alphabet[positionOne] + alphabet[positionTwo] + alphabet[positionThree]
      );