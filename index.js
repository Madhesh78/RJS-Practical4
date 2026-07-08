// Complete the function using object destructuring.

function getStudentDetails(students) {
        return students.map(({ name, age, grade }) => {
        return `${name} is ${age} years old and has grade ${grade}`;
 });
}
const students = [
  { name: "Alice", age: 20, grade: "A" },
  { name: "Bob", age: 22, grade: "B" }];
console.log(getStudentDetails(students));
