Function constructor (còn được gọi là Constructor function) là một cách khác để tạo ra các đối tượng trong JavaScript. Nó sử dụng một hàm thông thường và từ khóa `new` để tạo ra các đối tượng mới. Function constructor thường được sử dụng trước khi Class được giới thiệu trong JavaScript.

Để tạo một function constructor, bạn sử dụng một hàm thông thường và đặt các thuộc tính và phương thức cho đối tượng bằng cách sử dụng từ khóa `this`. Ví dụ:

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.sayHello = function() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  };
}

const person = new Person("John", 25);
console.log(person.name); // In ra: John
console.log(person.age); // In ra: 25
person.sayHello(); // In ra: Hello, my name is John and I'm 25 years old.
```

Trong ví dụ trên, chúng ta đã tạo một function constructor `Person` để tạo ra các đối tượng `Person`. Bên trong hàm `Person`, chúng ta sử dụng từ khóa `this` để đặt các thuộc tính và phương thức cho đối tượng. Khi sử dụng `new Person("John", 25)`, chúng ta tạo ra một đối tượng mới với thuộc tính `name` và `age` tương ứng.

Function constructor cũng hỗ trợ kế thừa và prototype, tương tự như Class. Bạn có thể thêm các phương thức chung cho tất cả các đối tượng được tạo bằng function constructor bằng cách sử dụng prototype. Ví dụ:

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} is speaking.`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.fetch = function() {
  console.log(`${this.name} is fetching.`);
};

const dog = new Dog("Buddy", "Labrador Retriever");
console.log(dog.name); // In ra: Buddy
dog.speak(); // In ra: Buddy is speaking.
dog.fetch(); // In ra: Buddy is fetching.
```

Trong ví dụ trên, chúng ta đã tạo một function constructor `Animal` và `Dog`. Bằng cách sử dụng `Object.create` và `prototype`, chúng ta đã tạo sự kế thừa giữa `Animal` và `Dog`. Như vậy, các đối tượng được tạo từ `Dog` cũng có thể truy cập vào phương thức `speak` từ `Animal`.

Tuy nhiên, từ phiên bản ES6 trở đi, Class đã trở thành một cách ưu tiên hơn để tạo đ