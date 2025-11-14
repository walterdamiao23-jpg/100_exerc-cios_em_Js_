const name = process.argv.slice(2).join(" ") || "Paulo Jose de Almeida Prado";
const parts = name.split(/\s+/);
const out = parts.map(p=> p.length>2 ? p[0].toUpperCase()+'.' : p).join(' ');
console.log("Abreviatura:", out);
