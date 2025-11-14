const results=[];
for(let i=1000;i<=9999;i++){
  const s = String(i);
  const left = Number(s.slice(0,2));
  const right = Number(s.slice(2));
  if((left+right)*(left+right)===i) results.push(i);
}
console.log("Números com a propriedade:", results.join(", "));
