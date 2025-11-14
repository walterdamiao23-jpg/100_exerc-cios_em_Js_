const inputs = process.argv.slice(2).length? process.argv.slice(2).map(Number) : [5,10,7,-1];
let sum=0,count=0;
for(const v of inputs){
  if(v<0) break;
  sum+=v; count++;
}
console.log("Média dos valores positivos lidos:", count? sum/count : "Sem valores");
