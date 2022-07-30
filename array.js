// const namaMantan = ["komang", "made", "ketut"]

// console.log(namaMantan, length);

// namaMantan.forEach(function (item, index, array) {
//     console.log(item, index, array);
// });

// namaMantan.push("dewi");

// console.log(namaMantan);



// pop = menghapus eleman di akhir sebuah array


// namaMantan.pop();

// console.log(namaMantan);



// shift = menghapus elemen di awal sebuah array



// namaMantan.shift();

// console.log(namaMantan);



//  splice = menghapus berdasarkan posisi index


// namaMantan.splice(namaMantan.indexOf("ketut", 1));

// console.log(namaMantan);



// console.log(
//     namaMantan
//         .reduce(function (acc, mantan) {
//             acc[mantan] = 'Mantan ke ${ke + 1}';

//             return acc;

//         }, {})
// );


// LOOP

// for (let index = 0; index < namaMantan.length; index++) {
//     const element = namaMantan[index];

//     console.log(element);

// }


// let index = 0
// while (index < namaMantan.length) {
//     const element = namaMantan[index];
//     console.log(element);
//     index++
// }

// console.log(
//     namaMantan
//         .filter(function (mantan, ke) {
//             return mantan == "made";
//         })

//         .map(function (mantan, ke) {
//             return `${mantan} adalah manatan ke ${ke + 1}`;
//         })
// );

const nik = [5, 12, 8, 190, 99];

const found = nik.find(element => element > 10);
console.log(found);











