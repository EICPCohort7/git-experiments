function add(x, y) {

  if (isNaN(x)) { 
    x = 0;
  }

  if (isNaN(y)) { 
      y = 0;
  }
  
  return x + y;

}

function subtract(x, y) {
  return x - y;
}

/**
 *
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function multiply(x, y) {
  return x * y;
}
