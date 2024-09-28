//(Q) What is the necessity to use await :- They will always tell you that Asynchronous function ka jarurat parega.
// No actually depends Upon use case.

//EX:-
// const StoreDa = await fetch(`https://randomuser.me/api/`);
// let FinalRes = await StoreDa.json();
// console.log(FinalRes);

//(or)
async function ajit() {
  const StoreDa = await fetch(`https://randomuser.me/api/`);
  let FinalRes = await StoreDa.json();
  console.log(FinalRes);
}
ajit();
