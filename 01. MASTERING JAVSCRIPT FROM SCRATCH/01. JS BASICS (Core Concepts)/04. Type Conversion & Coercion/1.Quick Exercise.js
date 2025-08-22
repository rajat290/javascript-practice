console.log('10' + 5);
console.log('10' - 5);
console.log(true + 2);
console.log(false + '3');
console.log(undefined + 1);
console.log(null + 1);



// 🧠 Explanation:

// Expression | Output | Reason
// '10' + 5 | "105" | "+" operator → string concatenation
// '10' - 5 | 5 | "-" operator → converts both to numbers
// true + 2 | 3 | true → 1 (boolean to number) → 1 + 2 = 3
// false + '3' | "false3" | "+" operator → string concatenation (false becomes "false")
// undefined + 1 | NaN | undefined → NaN when used in arithmetic
// null + 1 | 1 | null → 0 in number context → 0 + 1 = 1



/*
📢 Short Tip:
"+" operator → agar string hai to concatenation karega.

"-", "*", "/" operator → automatically number mein convert karega.

undefined jab math mein aaye to NaN deta hai.

null jab math mein aaye to 0 ban jata hai.
*/