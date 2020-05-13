function add(x, y) {
  return x+y
}

function subtract(x, y) {
  return x-y
}

function multiply(x, y) {
  return x*y
}

function divide(x, y) {
  return x/y
}

var number =10.22
function increment(number) {
  return number+=1
}

function decrement(number) {
  return number-=1
}

function makeInt(x, base) {
  const parsed = parseInt(x, base);
  if (isNaN(parsed)) { return 0; }
  return parsed * 100;
}

console.log(makeInt('0xf', 16));

function preserveDecimal(string){
  parseFloat('2.74848')
}
