function combine(
    input1: number | string,
    input2: number | string,
    resultConversion: 'as-text' | 'as-number'
) {
    let results;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        results = +input1 + +input2;
    } else {
        results = input1.toString() + input2.toString();
    }
    return results;
}

const combinedAges = combine(10, 20, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('19',  '23', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('a', 'b', 'as-text');
console.log(combinedNames);