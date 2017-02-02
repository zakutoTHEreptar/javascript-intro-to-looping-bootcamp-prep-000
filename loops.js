function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  } return 'done'
}

function forLoop(array){
  for (var i = 0; i < 25; ++i) {
    array.unshift(`"I am ${i} strange loop${i === 0 ? '' : 's'}"`)
  } return array
}

function maybeTrue() {
  return Math.random() >= 0.5
};

function doWhileLoop(array) {
  do {
    array.shift(1)
  } while ( array.length > 0 && maybeTrue());
  return array
}
