const sec = parseInt(process.argv[2] ?? "3661", 10);
const h = Math.floor(sec/3600);
const m = Math.floor((sec%3600)/60);
const s = sec%60;
console.log(`${sec} segundos = ${h}h ${m}m ${s}s`);
