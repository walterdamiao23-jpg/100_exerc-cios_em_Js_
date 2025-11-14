const arr = process.argv.slice(2,22).map(x=>Number(x));
let max = -Infinity, pos=-1;
arr.forEach((v,i)=>{ if(v>max){max=v; pos=i;} });
console.log("Maior:", max, "Posição (0-based):", pos);
