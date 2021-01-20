function union(arr1, arr2) {
    let arr = []
    const arr1 = arr[0]
    const arr2 = 
    for (let i = 0; i < arr1.length - 1; i++){
        for (let j = 0; j < arr2.length - 1; j++){
            if (arr1[i] !== arr2[j]) {
                arr1.slice(i, 1);
            }
            arr = arr1.concat(arr2)
        }
            
    }
    return arr;
    console.log(union([1, 2, 3], [100, 2, 1, 10]));
