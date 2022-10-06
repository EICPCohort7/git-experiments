function add(x, y) {
  // Good code
  if (isNaN(x)) {
    x = 0;
  }

  // This is awesome
  if (isNaN(y)) {
    y = 0;
  }

  return x + y;
}

function subtract(x, y) {
  return x - y;
}
