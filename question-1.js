// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้
myTodo.push({ id: 5, todo: "Walk the dog" });

const todoToUpdate = myTodo.find(item => item.id === 4);
if (todoToUpdate) {
  todoToUpdate.todo = "Go to the gym";
}

myTodo.pop();

console.log(myTodo);

const lastTodo = myTodo[myTodo.length - 1];
console.log(`To-do id: ${lastTodo.id}, ${lastTodo.todo}`);
