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

let aa = 'Angelina';
let bb = 'Jolie';

let rezultatas = aa.substring(5) + bb.substring(2);
console.log(rezultatas);

//arba taip geriau, tada galima keisti aa ir bb:

// const aa = "Angelina";
// const bb = "Jolie";
// let rezultatas = aa[aa.length - 3] + aa[aa.length - 2] + aa[aa.length - 1] + bb[bb.length - 3] + bb[bb.length - 2] + bb[bb.length - 1];
// console.log(rezultatas);
