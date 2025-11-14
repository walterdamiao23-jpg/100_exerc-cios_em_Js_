const base = Number(process.argv[2] ?? 5);
if(base<5 || base>15){ console.log("Base deve ser entre 5 e 15"); process.exit(); }
for(let i=1;i<=base;i+=2){
  const pad = " ".repeat((base-i)/2);
  console.log(pad + "#".repeat(i));
}
