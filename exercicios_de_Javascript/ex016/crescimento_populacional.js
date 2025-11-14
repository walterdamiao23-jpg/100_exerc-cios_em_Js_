let popA=80000, popB=200000;
const rA=0.03, rB=0.015;
let years=0;
while(popA<popB){
  popA += popA*rA;
  popB += popB*rB;
  years++;
  if(years>10000) break;
}
console.log(`Anos necessários: ${years} (popA=${Math.floor(popA)}, popB=${Math.floor(popB)})`);
