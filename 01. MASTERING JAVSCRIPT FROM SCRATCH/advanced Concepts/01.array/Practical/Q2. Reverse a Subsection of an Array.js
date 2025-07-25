// Question (Hinglish + Easy Language):
// 💬 Tumhare paas ek array hai strings ka (jaise names). Tumhe ek naya array banana hai jisme sabhi names uppercase (capital letters) me ho.

// Example:
// Input: ["rajat", "vivek", "komal"]
// Output: ["RAJAT", "VIVEK", "KOMAL"]

// 2. Real World Example:
// Socho tumhare paas ek list hai students ke names ki, aur tumhe unhe uppercase me convert karna hai taaki tumhe unhe easily read kar sakein (jaise kisi event me unka naam display karna hai).
const names = ["rajat", "vivek", "komal"]; // Example input
const upperCaseNames = names.map(name => name.toUpperCase()); // Convert names to uppercase
console.log(upperCaseNames); // Output: ["RAJAT", "VIVEK", "KOMAL"]

//  4. Step-by-Step Explanation:
// map() array ka har element ko access karta hai aur kuch operation perform karke naya array banata hai.

// Har name ko toUpperCase() method se convert kiya capital letters me.

// Result me har name capital form me ek naye array me store ho gaya.