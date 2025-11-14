const arr = process.argv.slice(2,12).map(x=>Number(x));
const comp = Number(process.argv[12] ?? 50);
const less = arr.filter(x=>x<comp).length;
console.log("Array:", arr);
console.log(`${less} valores inferiores a ${comp}`);
