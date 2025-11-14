const profs = [
  [111,"M",40],
  [222,"F",30],
  [333,"M",20]
];
let totalGain=0, maleSum=0,maleCount=0,femSum=0,femCount=0;
profs.forEach(([code,sex,h])=>{
  const bruto = h*30;
  const desconto = sex==="M"? 0.10*bruto : 0.05*bruto;
  const liquido = bruto - desconto;
  totalGain += liquido;
  if(sex==="M"){ maleSum+=liquido; maleCount++; } else { femSum+=liquido; femCount++; }
  console.log(`Code:${code} Bruto:${bruto.toFixed(2)} Líquido:${liquido.toFixed(2)}`);
});
console.log("Média líquida homens:", maleCount? maleSum/maleCount : 0);
console.log("Média líquida mulheres:", femCount? femSum/femCount : 0);
