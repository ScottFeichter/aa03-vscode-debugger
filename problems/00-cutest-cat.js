/*

Fix the `cutestCat` function. Should return the cat with the highest `cuteness`
rating.
*/

function cutestCat(cats) {
  let cutest = 0;
  let cutestName = "";
  let i = 0;
  debugger;
  while (i < cats.length) {
    const cat = cats[i];
    debugger;
    if (cat["cuteness"] > cutest) {
      debugger;
      cutest = cat.cuteness;
      cutestName = cat.name;
    }
    i++;
  }

  debugger;
  return cutestName;
}

const cats = [
  { name: "Fluffy", cuteness: 9 },
  { name: "Princess", cuteness: 6 },
  { name: "Tiger", cuteness: 7 },
  { name: "Indie", cuteness: 5 },
];
debugger;
console.log(cutestCat(cats)); // { name: 'Fluffy', cuteness: 9 }
