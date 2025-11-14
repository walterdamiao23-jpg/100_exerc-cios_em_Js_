const names = process.argv.slice(2,12).length? process.argv.slice(2,12) : ["Ana","Beto","Carlos","Diana","Eva","Filipe","Gina","Hugo","Irene","Joao"];
const query = process.argv[12] ?? "Carlos";
console.log(names.includes(query) ? "ACHEI" : "NÃO ACHEI");
