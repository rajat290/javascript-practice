function romanToInt(roman) {
    const romanMap = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
    };
    let total = 0;
    for (let i = 0; i < roman.length; i++) {
        let value = romanMap[roman[i]];
        if (i + 1 < roman.length && romanMap[roman[i + 1]] > value) {
            total -= value;
        } else {
            total += value;
        }
    }
    return total;
}