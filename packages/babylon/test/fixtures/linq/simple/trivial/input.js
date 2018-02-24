const xs = [1];
const foo =
  FROM x IN xs
  WHERE x === 1
  SELECT {x: x};
