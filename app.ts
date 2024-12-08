function combine(input1: number | string, input2: number | string) {
    let results;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        results = input1 + input2;
    } else {
        results = input1.toString() + input2.toString();
    }
    return results;
}

const combinedAges = combine(10, 20);
console.log(combinedAges);

const combinedNames = combine('a', 'b');
console.log(combinedNames);