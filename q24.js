function bouncer(arr) {
    let array = arr.filter(function (val) {
        return val;
    });
    return array;
}
console.log(bouncer([NaN, 0, 15, false, -22, '', undefined, 47, null]))