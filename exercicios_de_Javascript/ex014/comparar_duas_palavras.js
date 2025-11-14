const [a="casamento", b="casa"] = process.argv.slice(2);
if(a===b) console.log("Iguais");
else{
  if(a.length===b.length) console.log("Diferentes, mesmos comprimentos");
  else console.log("Maior comprimento:", a.length>b.length? "palavra1":"palavra2");
  if(a.includes(b)) console.log(`${b} é substring de ${a}`);
  else console.log("Não é substring");
}
