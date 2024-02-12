const sortedArr = [1, 3, 5, 7, 9, 11, 13];

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mean = Math.floor((left + right) / 2);
    if (arr[mean] === target) {
      return mean;
    } else if (arr[mean] < target) {
      left = mean + 1;
    } else {
      right = mean - 1;
    }
  }

  return -1;
};

console.log(binarySearch(sortedArr, 7));
