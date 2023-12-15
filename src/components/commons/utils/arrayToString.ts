export const arrayToString = (arr: string[]) => {
  return arr.length === 0 ? undefined : arr.join(',');
};
