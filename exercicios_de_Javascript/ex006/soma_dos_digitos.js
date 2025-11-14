const s = process.argv[2] ?? "12345";
const sum = s.split('').reduce((acc,ch)=> acc + Number(ch), 0);
console.log(`Soma dos dígitos de '${s}' = ${sum}`);
