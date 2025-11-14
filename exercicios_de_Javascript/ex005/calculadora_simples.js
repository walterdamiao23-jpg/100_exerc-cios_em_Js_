const op = process.argv[2] ?? "+";
const x = Number(process.argv[3] ?? 10);
const y = Number(process.argv[4] ?? 3);
let res;
switch(op){
  case "+": res = x+y; break;
  case "-": res = x-y; break;
  case "*": res = x*y; break;
  case "/": res = y===0? "Erro: divisão por zero": x/y; break;
  default: res = "Operador não suportado";
}
console.log(`${x} ${op} ${y} = ${res}`);
