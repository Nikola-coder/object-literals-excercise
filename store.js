// ----------- store-object ----------
let ica = {
    name: "Ica Supermarket Skurup",
    address: "Drottninggatan 29",
    zipcod: "12389",
    city: "Skurup",
    staff: [],
    products: [],
    hireStaff: function (person){
        // Vi andvänder oss av "this" här, för att "this" hänvisar till det egna objektet. Så "this" = ica
        this.staff.push(person);
        person.worksAt = this;
    }
    fireStaff: function(person){
        // vi kan här använda en arraymetod som heter filter(). den filtrerar bort element utifrån ett villkor. är villkoret sant, så behålls elementet. är dvillkoret falskt så sorteras det bort.
        this.staff = this.staff.filter(p => p !== person);
        return this;
    }
};

// ---------- person-objects -----------
let niklas = {
    firstName: "Niklas",
    lastName: "Håkansson",
    age: 30,
    salary: 45000,
    worksAt: null,
    startWork: function(store){
        this.worksAt = store;
        store.staff.push(this);
    }
};

let erik = {
    firstName: "Erik",
    lastName: "Jansson",
    age: 45,
    salary: 23000,
    worksAt: null,
    startWork: function(store){
        this.worksAt = store;
        store.staff.push(this);
    }
};

let sofia = {
    firstName: "Sofia",
    lastName: "Karlsson",
    age: 22,
    salary: 60000,
    worksAt: null,
    startWork: function(store){
        this.worksAt = store;
        store.staff.push(this);
    }
};

