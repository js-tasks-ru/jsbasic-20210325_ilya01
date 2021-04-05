function factorial(n) {
  let i = 1;
  let result = 1;

  if ( n === 0 || n === 1 ) {
    result = 1;
  } else {
    while ( i < n ) {
      result = result * (n - i);
      i++;
    }
    result = result * n;
  }

  return result;
}
