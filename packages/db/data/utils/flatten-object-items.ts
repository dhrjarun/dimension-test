export function flattenObjectItems(data: { [key: number]: number }) {
  const result: number[] = [];
  Object.entries(data).forEach(([key, value]) => {
    for (let i = 0; i < value; i += 1) {
      result.push(parseInt(key, 10));
    }
  });

  return result.sort(() => Math.random() - 0.5);
}
