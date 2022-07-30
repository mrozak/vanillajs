const Person = {
    firstName: "Kimi",
    lastName: "Hime",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },




    // console.log(Person.fullName());

    weight: 65,
    height: 172,
    isWeightIdeal: function () {
        const heightMinus100 = this.height - 100;
        return heightMinus100 - (heightMinus100 * 10) / 100 <
            this.weight;
    },


};

console.log(Person.fullName());
console.log(Person.isWeightIdeal());

const countries = {
    ID: {
        province: ["bali", "jateng", "jatim"],
        city: ["singaraja", "gianjar", "negare", "badung"],
    },
    MY: {},
    TH: {
        province: [],
    },
}


// optional chaining (?.)

console.log(countries?.TH?.province ?? "Not Found");