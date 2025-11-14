const N = Number(process.argv[2] ?? 100);
const primes=[];
let divisions=0;
for(let i=2;i<=N;i++){
  let isPrime=true;
  for(let d=2; d*d<=i; d++){
    divisions++;
    if(i%d===0){ isPrime=false; break;}
  }
  if(isPrime) primes.push(i);
}
console.log("Primos até",N,":",primes.join(", "));
console.log("Divisões executadas:", divisions);
