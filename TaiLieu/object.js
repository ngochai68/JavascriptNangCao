Dưới đây là một số hàm thường được sử dụng để làm việc với đối tượng (object) trong JavaScript:

1. Object.keys(): Trả về một mảng chứa tất cả các key của đối tượng.
```javascript
const obj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj);
// Output: keys = ['a', 'b', 'c']
```

2. Object.values(): Trả về một mảng chứa tất cả các giá trị của đối tượng.
```javascript
const obj = { a: 1, b: 2, c: 3 };
const values = Object.values(obj);
// Output: values = [1, 2, 3]
```

3. Object.entries(): Trả về một mảng chứa các cặp key-value của đối tượng dưới dạng mảng con.
```javascript
const obj = { a: 1, b: 2, c: 3 };
const entries = Object.entries(obj);
// Output: entries = [['a', 1], ['b', 2], ['c', 3]]
```

4. Object.assign(): Sao chép các giá trị của một hoặc nhiều đối tượng vào một đối tượng đích.
```javascript
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const mergedObj = Object.assign({}, obj1, obj2);
// Output: mergedObj = { a: 1, b: 2 }
```

5. Object.freeze(): Đóng băng đối tượng, ngăn chặn việc thay đổi giá trị của các thuộc tính hiện có và ngăn chặn việc thêm/xóa thuộc tính mới.
```javascript
const obj = { a: 1, b: 2 };
Object.freeze(obj);
obj.a = 3; // Không thay đổi được giá trị
obj.c = 4; // Không thêm được thuộc tính mới
// Output: obj = { a: 1, b: 2 }
```

6. Object.seal(): Kín chặt đối tượng, ngăn chặn việc thêm/xóa thuộc tính mới, nhưng cho phép thay đổi giá trị của các thuộc tính hiện có.
```javascript
const obj = { a: 1, b: 2 };
Object.seal(obj);
obj.a = 3; // Thay đổi giá trị được
obj.c = 4; // Không thêm được thuộc tính mới
// Output: obj = { a: 3, b: 2 }
```

7. Object.getOwnPropertyDescriptor(): Trả về thông tin về thuộc tính của một đối tượng.
```javascript
const obj = { a: 1 };
const propertyDescriptor = Object.getOwnPropertyDescriptor(obj, 'a');
// Output: propertyDescriptor = { value: 1, writable: true, enumerable: true, configurable: true }
```

9. Object.getOwnPropertySymbols(): Trả về một mảng chứa tất cả các symbol thuộc tính của đối tượng.
```javascript
const symbol1 = Symbol('symbol1');
const symbol2 = Symbol('symbol2');
const obj = {
  [symbol1]: 'value1',
  [symbol2]: 'value2'
};
const symbols = Object.getOwnPropertySymbols(obj);
// Output: symbols = [Symbol(symbol1), Symbol(symbol2)]
```

10. Object.hasOwnProperty(): Kiểm tra xem một thuộc tính có tồn tại trực tiếp trong đối tượng hay được kế thừa từ prototype không.
```javascript
const obj = { a: 1 };
console.log(obj.hasOwnProperty('a')); // Output: true
console.log(obj.hasOwnProperty('toString')); // Output: false
```

11. Object.is(): So sánh hai giá trị để xác định xem chúng có bằng nhau hay không. Khác với phép so sánh '===' thông thường, Object.is() cũng xem xét các trường hợp đặc biệt như NaN và -0.
```javascript
console.log(Object.is(1, 1)); // Output: true
console.log(Object.is(NaN, NaN)); // Output: true
console.log(Object.is(0, -0)); // Output: false
```

12. Object.setPrototypeOf(): Thiết lập prototype của một đối tượng cho một đối tượng khác.
```javascript
const obj1 = { a: 1 };
const obj2 = { b: 2 };
Object.setPrototypeOf(obj2, obj1);
console.log(obj2.a); // Output: 1
```

Đây là một số hàm phổ biến để làm việc với đối tượng trong JavaScript. Bạn có thể sử dụng chúng để thao tác, tìm kiếm và xử lý dữ liệu đối tượng theo nhu cầu của bạn. Nếu bạn có bất kỳ câu hỏi hoặc cần thêm thông tin, xin vui lòng cho tôi biết.
Không, danh sách các hàm liệt kê là một số hàm phổ biến được sử dụng để làm việc với đối tượng trong JavaScript. Tuy nhiên, JavaScript cung cấp nhiều hàm khác nữa để làm việc với đối tượng. Dưới đây là một số hàm khác mà bạn có thể sử dụng:

13. Object.create(): Tạo một đối tượng mới với prototype được chỉ định.
```javascript
const obj = { a: 1 };
const newObj = Object.create(obj);
console.log(newObj.a); // Output: 1
```

14. Object.getOwnPropertyDescriptors(): Trả về tất cả các thuộc tính (bao gồm cả thuộc tính không liên quan đến enumerable) của một đối tượng dưới dạng một đối tượng mô tả thuộc tính.
```javascript
const obj = { a: 1 };
const descriptors = Object.getOwnPropertyDescriptors(obj);
console.log(descriptors.a); // Output: { value: 1, writable: true, enumerable: true, configurable: true }
```

15. Object.isExtensible(): Kiểm tra xem một đối tượng có thể mở rộng (thêm thuộc tính mới) hay không.
```javascript
const obj = { a: 1 };
console.log(Object.isExtensible(obj)); // Output: true
```

16. Object.preventExtensions(): Ngăn chặn việc mở rộng (thêm thuộc tính mới) cho một đối tượng.
```javascript
const obj = { a: 1 };
Object.preventExtensions(obj);
obj.b = 2; // Không thêm được thuộc tính mới
console.log(obj); // Output: { a: 1 }
```

17. Object.isSealed(): Kiểm tra xem một đối tượng có bị kín chặt hay không (không thể thêm/xóa thuộc tính mới) và có thể thay đổi giá trị của các thuộc tính hiện có.
```javascript
const obj = { a: 1 };
console.log(Object.isSealed(obj)); // Output: false
```

18. Object.isFrozen(): Kiểm tra xem một đối tượng có bị đóng băng hay không (không thể thêm/xóa thuộc tính mới và không thay đổi được giá trị của các thuộc tính hiện có).
```javascript
const obj = { a: 1 };
console.log(Object.isFrozen(obj)); // Output: false
```

Danh sách trên là một số hàm thường được sử dụng, nhưng không hoàn toàn là toàn bộ các hàm dùng cho đối tượng trong JavaScript. Có nhiều hàm khác nữa để thao tác, xử lý và tương tác với đối tượng.

Hàm Object.getOwnPropertyNames() trả về một mảng chứa tên của tất cả các thuộc tính (bao gồm cả thuộc tính không liên quan đến enumerable) của một đối tượng.

Ví dụ:
```javascript
const obj = {
  a: 1,
  b: 2,
  c: 3
};

const propertyNames = Object.getOwnPropertyNames(obj);
console.log(propertyNames);
// Output: ['a', 'b', 'c']
```

Trong ví dụ trên, hàm Object.getOwnPropertyNames() trả về một mảng chứa tên của các thuộc tính 'a', 'b' và 'c' của đối tượng obj.

Lưu ý rằng Object.getOwnPropertyNames() chỉ trả về tên của các thuộc tính trực tiếp của đối tượng, không bao gồm các thuộc tính kế thừa từ prototype.

Nếu bạn cần lấy tên của các thuộc tính kế thừa từ prototype cũng như các thuộc tính riêng của đối tượng, bạn có thể sử dụng hàm Object.keys() hoặc Object.entries() thay vì Object.getOwnPropertyNames().