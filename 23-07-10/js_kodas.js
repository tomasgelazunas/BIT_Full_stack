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

