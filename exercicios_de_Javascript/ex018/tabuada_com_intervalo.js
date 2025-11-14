const num=Number(process.argv[2] ?? 5);
const start=Number(process.argv[3] ?? 4);
const end=Number(process.argv[4] ?? 7);
if(end<start){ console.log("Final não pode ser menor que inicial"); process.exit(); }
for(let i=start;i<=end;i++) console.log(`${num} x ${i} = ${num*i}`);
