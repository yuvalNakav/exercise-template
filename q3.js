function first(Array, n){
    if (Array === 0){
        return 0;
    }if (n === 0){
        return Array[0];
    } if (n < 0) {
        return [];
    }
        return Array.splice(0, n);
    
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));