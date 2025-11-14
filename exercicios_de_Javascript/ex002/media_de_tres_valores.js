const a = parseFloat(process.argv[2] ?? "4.5");
const b = parseFloat(process.argv[3] ?? "7.2");
const c = parseFloat(process.argv[4] ?? "1.3");
const avg = (a+b+c)/3;
console.log(`Média de ${a}, ${b}, ${c} = ${avg}`);
