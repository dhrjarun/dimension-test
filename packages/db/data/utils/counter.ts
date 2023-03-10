export function counter(max: number, start: number = 0) {
  let count = start;
  return {
    next() {
      count += 1;
      if (count > max) {
        count = start;
      }
      return count;
    },
    current() {
      return count;
    },
  };
}
