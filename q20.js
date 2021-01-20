const findDuplicates = (arr) => {
    let sortedArr = arr.slice().sort();
    let results = [];
    for (let i = 0; i < sortedArr.length - 1; i++) {
      if (sortedArr[i + 1] == sortedArr[i]) {
        results.push(sortedArr[i]);
      }
    }
    return results;
  }
  
  let duplicatedArray = [9, 9, 111, 2, 3, 4, 4, 5, 7];
  console.log(findDuplicates(duplicatedArray));