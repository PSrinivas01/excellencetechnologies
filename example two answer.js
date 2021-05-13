//**(a): [00110001001110];
const arr = [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0];
const findMaxconsecutiveOnes = (arr = []) => {
  let left = 0;
  let right = 0;
  let max = 0;
  while (right < arr.length) {
    if (arr[right] === 0 ) {
      max = right - left;
    }
    right++;
    left = right;
  } else {
    right++;
  }
  return right - left > max ? right - left : max;
};
console.log(findMaxconsecutiveOnes(arr));

//**(b): [1000010001];
const arr = [1, 0, 0, 0, 0, 1, 0, 0, 0, 1];
const findMaxconsecutiveOnes = (arr = []) => {
  let left = 0;
  let right = 0;
  let max = 0;
  while (right < arr.length) {
    if (arr[right] === 0 ) {
      max = right - left;
    }
    right++;
    left = right;
  } else {
    right++;
  }
  return right - left > max ? right - left : max;
};
console.log(findMaxconsecutiveOnes(arr));


