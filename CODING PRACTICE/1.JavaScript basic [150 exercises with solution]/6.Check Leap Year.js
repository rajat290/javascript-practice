const leapyaer = (Year) => {
    return (Year % 100 === 0)? (year % 400 === 0) : (year % 4 === 0);
};
// test the function with simple years
console.log(leapyaer(2000)); // true
console.log(leapyaer(1900)); // false