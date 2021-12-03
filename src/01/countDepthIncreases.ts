export const countDepthIncreases = (list: number[]) => {
  if(list.length < 2) return 0;

  let count = 0;
  for (let i = 1; i < list.length; i++) {
    if(list[i] > list[i-1]) count++;
  }

  return count;
}
