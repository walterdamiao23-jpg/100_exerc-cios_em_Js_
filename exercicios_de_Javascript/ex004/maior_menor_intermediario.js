const nums = [(process.argv[2]??"3.2"), (process.argv[3]??"1.1"), (process.argv[4]??"2.5")].map(Number);
const sorted = [...nums].sort((x,y)=>x-y);
console.log("Maior:", sorted[2], "Intermediário:", sorted[1], "Menor:", sorted[0]);
