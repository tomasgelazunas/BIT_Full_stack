// Ciklai

// 1. Naršyklėje nupieškite linija iš 400 “*”. 
//   a. Naudodami css stilių “suskaldykite” liniją taip, kad visos žvaigždutės matytųsi ekrane;
//   b. Programiškai “suskaldykite” žvaigždutes taip, kad vienoje eilutėje nebūtų daugiau nei 50 “*”; 
// 2. Naudokite funkcija rand(). Sugeneruokite atsitiktinį skaičių nuo 1 iki 6 ir jį atspausdinkite atitinkame h tage. Pvz skaičius 3- rezultatas: <h3>3</h3>
// 3. Naudokite funkcija rand(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti žali, 0 - raudonas, didesni už 0 mėlyni.
// 4. Sukurkite kintamąjį su stringu: “An American in Paris”. Jame ištrinti visas balses. Rezultatą atspausdinti. Kodą pakartoti su stringais: “Breakfast at Tiffany's”, “2001: A Space Odyssey” ir “It's a Wonderful Life”.
// 5. Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti raudonos spalvos.
// 6. Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti. Jeigu reikia, panaudokite css, kad visi rezultatai matytųsi ekrane.

//********************** 1 užduotis **************************

let i = 0;
let rez = '';
while (i < 400) {
  if (i % 50 === 0) rez += '\n';
  rez += '*';
  i++;
}
document.getElementById('stars').innerText = rez;

//********************** 2 užduotis **************************

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  let randomNr = rand(1, 6);
  document.getElementById('randomNr').innerText = randomNr;
  
  //********************** 3 užduotis **************************
  
  i = 0
  let colorfulNumbers = '';
  
  while (i < 3) {
    let num1 = rand(-10, 10);
    if (num1 < 0) {
      colorfulNumbers += '<span style="color: green;">' + num1 + '</span> ';
    } else if (num1 > 0) {
      colorfulNumbers += '<span style="color: blue;">' + num1 + '</span> ';
    } else {
      colorfulNumbers += '<span style="color: red;">' + num1 + '</span> ';
    }
  
    i++;
  }
  console.log(colorfulNumbers);
  document.getElementById('colors').innerHTML = colorfulNumbers;
  
//********************** 4 užduotis **************************

  let string ='An American in Paris';
      string = string.replace(/[aeiouy]/gi, '');

    console.log(string);
    document.getElementById('string').innerHTML = string;

  let strings = [
    "Breakfast at Tiffany's",
    "2001: A Space Odyssey or It's a Wonderful Life",
    "It's a Wonderful Life"
  ]
  i = 0;
  while (i < strings.length) {
    sakinys = strings[i].replace(/[aeiouy]/gi, '');
    i++;
    console.log('Pakartotas kodas: ', sakinys);
  }
 //********************** 5 užduotis **************************

  i = 0;
  let rezultatas = '';
  let count = 0;
  
  while (i < 300) {
    let newNumbers = rand(0, 300);
    rezultatas += newNumbers + ' ';
    if (newNumbers > 150) {
      count++;
    }
    if (newNumbers > 275) {
      rezultatas += '<span style="color: red;">' + newNumbers + '</span> ';
    }
    i++;
  }
  console.log(rezultatas);
  console.log('Skaiciu didesniu uz 150 yra: ', count);
  document.getElementById('numbers').innerHTML = rezultatas;
  
//********************** 6 užduotis **************************
  
  i = 1;
  let rezult = '';
  
  while (i <= 3000) {
    if (i % 77 === 0) {
      rezult += i + ',';
    }
    i++;
  }
  rezult = rezult.slice(0, -1);
  console.log(rezult);
  document.getElementById('number77').innerHTML = rezult;