const Person = {
    firstName: "Kimi",
    lastName: "Hime",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },




    // console.log(Person.fullName());

    weight: 70,
    height: 172,
    weightIdeal: function () {
        const heightMinus100 = this.height - 100;
        return heightMinus100 - (heightMinus100 * 10) / 100;
        this.weight;
    },
    needDiet: function () {
        const weightIdeal = this.weightIdeal();
        if (weightIdeal - 5 > this.weight)
            return "you need more protein, need more " + (weightIdeal - this.weight) + "Kg";
        else if (weightIdeal + 5 < this.weight)
            return "you need a mayo diet, need reduce weight: " + (this.weight - weightIdeal) + "Kg";
        return "you are in a good shape";
    },

};

console.log(Person.fullName());
console.log(Person.weightIdeal());
console.log(Person.needDiet());

// const countries = {
//     ID: {
//         province: ["bali", "jateng", "jatim"],
//         city: ["singaraja", "gianjar", "negare", "badung"],
//     },
//     MY: {},
//     TH: {
//         province: [],
//     },
// }


// // optional chaining (?.)

// console.log(countries?.TH?.province ?? "Not Found");