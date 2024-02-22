const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {cats.push("Ralph")}

destructivelyAppendCat;

function destructivelyPrependCat() {cats.unshift("Bob")}

destructivelyPrependCat;

function destructivelyRemoveLastCat() {
    cats.pop();
  }

  destructivelyRemoveLastCat;

function destructivelyRemoveFirstCat() {cats.shift()}

  destructivelyRemoveFirstCat;

function appendCat(name) {
    const newCats = cats.slice();
    newCats.push(name);
    return newCats;
}
const newCats = appendCat("Broom");

console.log(newCats);

function prependCat(name) {
  
  const newCat = cats.slice();
  
  newCat.unshift(name);
  
  return newCat;
}

const newCat = prependCat("Bob");

console.log(newCat);

function removeLastCat(){
    const newCatss = cats.slice();

    newCatss.pop();

    return newCatss;
}

const newCatss = removeLastCat();

console.log(newCatss)

function removeFirstCat(){
    const newwCats = cats.slice();
    newwCats.shift();
    return newwCats;
}

const newwCats = removeFirstCat();

console.log(newwCats)