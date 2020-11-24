// ---------- store object ----------

let ica = {
    name: "Ica Supermarket Skurup",
    address: "Drottninggatan 29",
    zipcode: "12389",
    city: "Skurup",
    staff: [], // Defautlvärdet är en tom array som vi sen kan lägga till ta bort ifrån med hjälp av javascript.
    products: [],
    hireStaff: function (person) {
      // Vi använder oss av "this" här, för att "this" hänvisare till det egna objektet. Så "this" = ica
      this.staff.push(person);
      person.worksAt = this;
      return this;
    },
    fireStaff: function (person) {
      // Vi kan här använder en arraymetod som heter filter(), den filtrerar bort element utifrån ett villkor. Är villkoret sant, så behålls elementet. Är villkoret falskt så sorteras det bort.
      this.staff = this.staff.filter((p) => {
          return p !== person;
      });
      return this;
    },
    addProduct: function (product) {
      this.products.push(product)
      return this;
    }
  };
  
  // ---------- person objects ----------
  
  let niklas = {
    firstName: "Niklas",
    lastName: "Håkansson",
    age: 30,
    salary: 45000,
    worksAt: null, // Vi sätter null som ett standarvärde när personen inte har en arbetsplats.
    // Denna metod lägger till en arbetsplats på personobjektet och uppdaterar även storeibjektes staff-array med personen.
    startWorkAt: function (store) { 
      this.worksAt = store;        
      store.staff.push(this);
      return this;
    },
  };
  
  let erik = {
    firstName: "Erik",
    lastName: "Jansson",
    age: 45,
    salary: 23000,
    worksAt: null,
    startWorkAt: function (store) {
      this.worksAt = store;
      store.staff.push(this);
      return this;
    },
  };
  
  let sofia = {
    firstName: "Sofia",
    lastName: "Karlsson",
    age: 22,
    salary: 60000,
    worksAt: null,
    startWorkAt: function (store) {
      this.worksAt = store;
      store.staff.push(this);
      return this;
    },
  };
  
  // ---------- product objects ----------
  
  let milk = {
    name: "Mellanmjök",
    price: 11,
  }
  
  let cheese = {
    name: "Herrgårdsost",
    price: 59,
  };
  
  let beef = {
    name: "Biff",
    price: 109,
  };
  
  let fish = {
    name: "Lax",
    price: 89,
  };