const vals = process.argv.slice(2).map(Number);
let sum=0, count=0, pos=0, neg=0;
for(const v of vals){
  if(v===9999) break;
  sum+=v; count++;
  if(v>0) pos++; else if(v<0) neg++;
}
console.log({media: count? sum/count : 0, positivos: pos, negativos: neg, pctPos: count? (pos/count*100).toFixed(2):0});
