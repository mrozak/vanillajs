const namaMantan = ["komang", "made", "ketut"]

// console.log(namaMantan, length);

namaMantan.forEach(function (item, index, array) {
    console.log(item, index, array);
});

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



console.log(
    namaMantan
        .reduce(function (acc, mantan) {
            acc[mantan] = 'Mantan ke ${ke + 1}';

            return acc;

        }, {})
);





