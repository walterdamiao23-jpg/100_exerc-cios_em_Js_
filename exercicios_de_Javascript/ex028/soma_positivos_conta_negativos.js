const vals = process.argv.slice(2).length? process.argv.slice(2).map(Number) : Array.from({length:50}, (_,i)=>i-25);
let sumPos=0, negCount=0;
vals.forEach(v=>{ if(v>0) sumPos+=v; if(v<0) negCount++; });
console.log("Soma positivos:", sumPos, "Quantidade negativos:", negCount);
