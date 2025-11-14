const names = process.argv.slice(2).length? process.argv.slice(2) : ["Carlos","Ana","Bruno","Diana"];
console.log("Ordenado:", names.slice().sort((a,b)=>a.localeCompare(b)).join(", "));
