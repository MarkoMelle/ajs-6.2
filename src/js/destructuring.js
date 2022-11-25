/* eslint-disable no-param-reassign, no-prototype-builtins */
export default function destrStats(obj) {
  const arr = [];
  obj.special.forEach((special, i) => {
    if (special.hasOwnProperty('description')) {
      arr[i] = special;
    } else {
      special.description = 'Описание недоступно';
      arr[i] = special;
    }
  });
  return arr;
}
