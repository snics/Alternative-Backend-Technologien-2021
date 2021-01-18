const start = Date.now();

function log(index) {
  setTimeout(() => {
    console.log(`Time: ${Date.now() - start}, Index: ${index}`);
  }, 1000 * index);
}

for ( let i = 0; i < 4; i++ ) {
  log(i);
}
