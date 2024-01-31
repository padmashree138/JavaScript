let grades = [100, 50, 36, 76, 89];

grades = grades.sort(ascendingSort);

grades.forEach(print);

function desendingSort(x, y) {
  return y - x;
}

function ascendingSort(x, y) {
  return x - y;
}

function print(element) {
  console.log(element);
}
