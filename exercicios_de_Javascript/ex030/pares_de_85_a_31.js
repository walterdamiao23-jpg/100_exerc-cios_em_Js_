const res=[]; for(let i=84;i>=32;i--) if(i%2===0) res.push(i);
console.log(res.join(", "));
console.log("Soma:", res.reduce((a,b)=>a+b,0));
