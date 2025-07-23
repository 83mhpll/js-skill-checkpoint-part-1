function checkPasswordStrength(userPassword) {
  if (userPassword.length < 6) {
    return "Weak";
  } else if (userPassword.length <= 10) {
    return "Medium";
  } else {
    return "Strong";
  }
}

// ตัวอย่างการทดสอบ
let userPassword1 = "ssswnalWadqQ";
console.log(checkPasswordStrength(userPassword1)); // "Strong"

let userPassword2 = "TechUp";
console.log(checkPasswordStrength(userPassword2)); // "Medium"

let userPassword3 = "abcde";
console.log(checkPasswordStrength(userPassword3)); // "Weak"
