// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
const apple = inventory.find(item => item.name === "Apple");
if (apple) {
  apple.quantity = 200;
}


inventory.push({ name: "Orange", price: 20, quantity: 300 });


const totalValue = inventory.reduce((sum, item) => sum + item.price * item.quantity, 0);
console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${totalValue} บาท`);
