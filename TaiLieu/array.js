
// 1. Array.push(): Thêm phần tử vào cuối mảng.
const array = [1, 2, 3];
array.push(4);
// Output: [1, 2, 3, 4]


// 2. Array.pop(): Xóa phần tử cuối cùng khỏi mảng và trả về phần tử đó.
const array = [1, 2, 3, 4];
const poppedElement = array.pop();
// Output: poppedElement = 4, array = [1, 2, 3]

// 3. Array.length: Trả về độ dài của mảng.
const array = [1, 2, 3];
const length = array.length;
// Output: length = 3


// 4. Array.indexOf(): Trả về vị trí đầu tiên của phần tử được tìm thấy trong mảng, hoặc -1 nếu không tìm thấy.
const array = [1, 2, 3, 4];
const index = array.indexOf(3);
// Output: index = 2


// 5. Array.includes(): Kiểm tra xem một phần tử có tồn tại trong mảng hay không.
const array = [1, 2, 3, 4];
const includes = array.includes(3);
// Output: includes = true

// 6. Array.slice(): Trả về một mảng con mới từ một vị trí bắt đầu đến một vị trí kết thúc.
const array = [1, 2, 3, 4, 5];
const newArray = array.slice(2, 4);
// Output: newArray = [3, 4]

// 7. Array.splice(): Thay đổi nội dung của mảng bằng cách thêm, xóa hoặc thay thế các phần tử.
const array = [1, 2, 3, 4];
array.splice(1, 2, 'a', 'b', 'c');
// Output: array = [1, 'a', 'b', 'c', 4]

// 8. Array.map(): Tạo một mảng mới bằng cách ánh xạ qua mọi phần tử trong mảng ban đầu.
const array = [1, 2, 3];
const newArray = array.map((element) => element * 2);
// Output: newArray = [2, 4, 6]


// 9. Array.filter(): Tạo một mảng mới chỉ chứa các phần tử thỏa mãn một điều kiện cho trước.
const array = [1, 2, 3, 4, 5];
const newArray = array.filter((element) => element % 2 === 0);
// Output: newArray = [2, 4]


// 10. Array.sort(): Sắp xếp các phần tử trong mảng theo thứ tự tăng dần hoặc giảm dần.
const array = [3, 1, 4, 2, 5];
array.sort();
// Output: array = [1, 2, 3, 4, 5]

// 11. Array.reverse(): Đảo ngược thứ tự của các phần tử trong mảng.
const array = [1, 2, 3, 4, 5];
array.reverse();
// Output: array = [5, 4, 3, 2, 1]

// 12. Array.reduce(): Thực hiện một phép tính trên tất cả các phần tử trong mảng và trả về một giá trị duy nhất.
const array = [1, 2, 3, 4, 5];
const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue);
// Output: sum = 15

// 13. Array.forEach(): Thực hiện một hàm cho mỗi phần tử trong mảng.
const array = [1, 2, 3];
array.forEach((element) => {
  console.log(element);
});
// Output: 1
//         2
//         3

// 14. Array.every(): Kiểm tra xem tất cả các phần tử trong mảng có thỏa mãn một điều kiện cho trước hay không.
const array = [1, 2, 3, 4, 5];
const allPositive = array.every((element) => element > 0);
// Output: allPositive = true

// 15. Array.some(): Kiểm tra xem có ít nhất một phần tử trong mảng thỏa mãn một điều kiện cho trước hay không.
const array = [1, 2, -3, 4, -5];
const hasNegative = array.some((element) => element < 0);
// Output: hasNegative = true

// 16. Array.find(): Trả về giá trị của phần tử đầu tiên trong mảng thỏa mãn một điều kiện cho trước.
const array = [1, 2, 3, 4, 5];
const foundElement = array.find((element) => element > 3);
// Output: foundElement = 4

// 17. Array.findIndex(): Trả về chỉ số của phần tử đầu tiên trong mảng thỏa mãn một điều kiện cho trước.
const array = [1, 2, 3, 4, 5];
const foundIndex = array.findIndex((element) => element > 3);
// Output: foundIndex = 3

// 18. Array.concat(): Kết hợp hai mảng hoặc thêm phần tử vào mảng hiện có và trả về một mảng mới.
const array1 = [1, 2, 3];
const array2 = [4, 5];
const newArray = array1.concat(array2);
// Output: newArray = [1, 2, 3, 4, 5]

// 19. Array.join(): Tạo một chuỗi bằng cách nối tất cả các phần tử trong mảng với một dấu phân cách cho trước.
const array = ['Hello', 'world'];
const joinedString = array.join(' ');
// Output: joinedString = 'Hello world'

// 20. Array.fill(): Thay thế tất cả các phần tử trong mảng bằng một giá trị cụ thể.
const array = [1, 2, 3, 4, 5];
array.fill(0);
// Output: array = [0, 0, 0, 0, 0]

// 21. Array.includes(): Kiểm tra xem một phần tử có tồn tại trong mảng hay không (trả về giá trị true hoặc false).
const array = [1, 2, 3, 4, 5];
const includes = array.includes(3);
// Output: includes = true

// 22. Array.slice(): Trả về một mảng con mới từ một vị trí bắt đầu đến một vị trí kết thúc (không bao gồm vị trí kết thúc).
const array = [1, 2, 3, 4, 5];
const newArray = array.slice(2, 4);
// Output: newArray = [3, 4]

// 23. Array.shift(): Xóa phần tử đầu tiên của mảng và trả về phần tử đó.
const array = [1, 2, 3, 4, 5];
const shiftedElement = array.shift();
// Output: shiftedElement = 1, array = [2, 3, 4, 5]

// 24. Array.unshift(): Thêm một hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng.
const array = [2, 3, 4, 5];
const newLength = array.unshift(1);
// Output: newLength = 5, array = [1, 2, 3, 4, 5]

// 25. Array.toString(): Chuyển đổi một mảng thành một chuỗi được phân tách bằng dấu phẩy.
const array = [1, 2, 3, 4, 5];
const string = array.toString();
// Output: string = '1,2,3,4,5'

// 26. Array.includes(): Kiểm tra xem một phần tử có tồn tại trong mảng hay không (trả về giá trị true hoặc false).
const array = [1, 2, 3, 4, 5];
const includes = array.includes(3);
// Output: includes = true

// 27. Array.join(): Tạo một chuỗi bằng cách nối tất cả các phần tử trong mảng với một dấu phân cách cho trước.
const array = ['Hello', 'world'];
const joinedString = array.join(' ');
// Output: joinedString = 'Hello world'

// 28. Array.reverse(): Đảo ngược thứ tự các phần tử trong mảng.
const array = [1, 2, 3, 4, 5];
array.reverse();
// Output: array = [5, 4, 3, 2, 1]

// 29. Array.slice(): Trả về một mảng con mới từ một vị trí bắt đầu đến một vị trí kết thúc (không bao gồm vị trí kết thúc).
const array = [1, 2, 3, 4, 5];
const newArray = array.slice(2, 4);
// Output: newArray = [3, 4]

// 30. Array.splice(): Thay đổi nội dung của mảng bằng cách thêm, xóa hoặc thay thế các phần tử.
const array = [1, 2, 3, 4];
array.splice(1, 2, 'a', 'b', 'c');
// Output: array = [1, 'a', 'b', 'c', 4]

// 31. Array.reduceRight(): Thực hiện một phép tính trên tất cả các phần tử trong mảng từ phải sang trái và trả về một giá trị duy nhất.
const array = [1, 2, 3, 4, 5];
const sum = array.reduceRight((accumulator, currentValue) => accumulator + currentValue);
// Output: sum = 15

// 32. Array.some(): Kiểm tra xem có ít nhất một phần tử trong mảng thỏa mãn một điều kiện cho trước.
const array = [1, 2, -3, 4, -5];
const hasNegative = array.some((element) => element < 0);
// Output: hasNegative = true

// 33. Array.every(): Kiểm tra xem tất cả các phần tử trong mảng có thỏa mãn một điều kiện cho trước hay không.
const array = [1, 2, 3, 4, 5];
const allPositive = array.every((element) => element > 0);
// Output: allPositive = true

// 34. Array.flat(): Làm phẳng các mảng lồng nhau thành một mảng duy nhất.
const array = [1, [2, 3], [4, [5, 6]]];
const flattenedArray = array.flat();
// Output: flattenedArray = [1, 2, 3, 4, 5, 6]

// 35. Array.flatMap(): Kết hợp các bước ánh xạ và làm phẳng mảng kết quả thành một mảng duy nhất.
const array = [1, 2, 3];
const mappedArray = array.flatMap((element) => [element * 2]);
// Output: mappedArray = [2, 4, 6]

// 36. Array.from(): Tạo một mảng mới từ một đối tượng có tính chất tương tự mảng hoặc chuỗi.
const string = 'Hello';
const newArray = Array.from(string);
// Output: newArray = ['H', 'e', 'l', 'l', 'o']

// 37. Array.isArray(): Kiểm tra xem một giá trị có phải là một mảng hay không.
const array = [1, 2, 3];
const isArr = Array.isArray(array);
// Output: isArr = true

// 38. Array.of(): Tạo một mảng mới từ các đối số được truyền vào.
const newArray = Array.of(1, 2, 3);
// Output: newArray = [1, 2, 3]


// 39. Array.filter(): Tạo một mảng mới chứa các phần tử của mảng ban đầu thoả mãn một điều kiện cho trước.
const array = [1, 2, 3, 4, 5];
const filteredArray = array.filter((element) => element % 2 === 0);
// Output: filteredArray = [2, 4]

// 40. Array.map(): Tạo một mảng mới bằng cách thực hiện một phép biến đổi lên từng phần tử của mảng ban đầu.
const array = [1, 2, 3];
const mappedArray = array.map((element) => element * 2);
// Output: mappedArray = [2, 4, 6]

// 41. Array.forEach(): Thực hiện một hàm cho mỗi phần tử trong mảng.
const array = [1, 2, 3];
array.forEach((element) => {
  console.log(element);
});
// Output: 1
//         2
//         3

// 42. Array.includes(): Kiểm tra xem một phần tử có tồn tại trong mảng hay không (trả về giá trị true hoặc false).
const array = [1, 2, 3, 4, 5];
const includes = array.includes(3);
// Output: includes = true

// 43. Array.indexOf(): Trả về chỉ số đầu tiên của một phần tử trong mảng. Nếu không tìm thấy, trả về -1.
const array = [1, 2, 3, 4, 5];
const index = array.indexOf(3);
// Output: index = 2

// 44. Array.lastIndexOf(): Trả về chỉ số cuối cùng của một phần tử trong mảng. Nếu không tìm thấy, trả về -1.
const array = [1, 2, 3, 4, 5, 3];
const lastIndex = array.lastIndexOf(3);
// Output: lastIndex = 5

// 45. Array.reduce(): Thực hiện một phép tính trên tất cả các phần tử trong mảng và trả về một giá trị duy nhất.
const array = [1, 2, 3, 4, 5];
const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue);
// Output: sum = 15

// 46. Array.some(): Kiểm tra xem có ít nhất một phần tử trong mảng thỏa mãn một điều kiện cho trước.
const array = [1, 2, -3, 4, -5];
const hasNegative = array.some((element) => element < 0);
// Output: hasNegative = true

// 47. Array.every(): Kiểm tra xem tất cả các phần tử trong mảng có thỏa mãn một điều kiện cho trước hay không.
const array = [1, 2, 3, 4, 5];
// const allPositive = array.every((element) =>