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

class Student extends Person {
  constructor(name, age, color, score) {
    super(name, age, color);
    this.score = score;
  }

  getScore() {
    console.log(`Sinh viên ${this.name} đạt điểm trung bình ${this.score}`);
  }
}

const student = new Student("Hải", 20, "Vàng", 10);
student.getColor();
student.getScore();
