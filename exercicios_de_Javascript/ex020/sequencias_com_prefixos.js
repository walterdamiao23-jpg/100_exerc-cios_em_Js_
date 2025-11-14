for(let first=1; first<=10; first++){
  const seq = Array.from({length:10}, (_,i)=>i+1).join(" ");
  console.log(`(${first}, ${seq})`);
}
