class Person {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }

  getColor() {
    console.log(`Một người có tên ${this.name} có màu da ${this.color}`);
  }
}


const person = new Person("Hải", 20, "vàng");

person.getColor();
