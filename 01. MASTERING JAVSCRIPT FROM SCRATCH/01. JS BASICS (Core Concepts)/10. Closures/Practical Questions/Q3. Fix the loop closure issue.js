for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}


//  Explanation:
// Replaced var with let

// let creates block-scoped variable (each loop has its own i)

// So setTimeout captures correct value via closure