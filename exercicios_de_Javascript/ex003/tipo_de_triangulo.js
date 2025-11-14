const a = Number(process.argv[2] ?? 3);
const b = Number(process.argv[3] ?? 4);
const c = Number(process.argv[4] ?? 5);
const can = (a+b>c) && (a+c>b) && (b+c>a);
if(!can) { console.log("Não formam um triângulo"); process.exit(); }
if(a===b && b===c) console.log("Equilátero");
else if(a===b||a===c||b===c) console.log("Isósceles");
else console.log("Escaleno");
