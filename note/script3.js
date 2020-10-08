const iterate = f => x => [x, ...iterate(f)(f(x))];

_.go(
  [1],
  iterate(_.pipe(
  ))
)