const obj = {
  first_name: "aa",
  last_name: "fsaf",
  printFullName: function() {
    return console.log("hello");
  }
}

class MyObj {
  constructor() {
    this.first_name = "aaaaa";
    this.last_name = "bbbbb";
  }
  printFullName() {
    console.log("hello");
  }
}

// obj.printFullName();

const obj2 = new MyObj();
obj2.printFullName();

console.log(obj2)