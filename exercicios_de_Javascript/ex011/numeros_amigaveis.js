const LIMIT = Number(process.argv[2] ?? 5000);
function sumDiv(n){
  let s=1;
  for(let i=2;i*i<=n;i++) if(n%i===0){ s+=i; if(i!==n/i) s+=n/i; }
  return s;
}
const amic=[];
for(let a=2;a<=LIMIT;a++){
  const b=sumDiv(a);
  if(b>a && b<=LIMIT && sumDiv(b)===a) amic.push([a,b]);
}
console.log("Pares amigáveis até", LIMIT, ":", amic.map(p=>p.join("-")).join(", "));
