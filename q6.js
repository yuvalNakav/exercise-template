const number = 456845648465;
const str = number.toString();
const result = [str[0]];
for (let i = 1; i < str.length; i++){
    if (str[i] % 2 === 0 && str[i+1] % 2 === 0) {
        result.push("-" + str[i]);
    } else {
        result.push(str[i]);
    }
}
console.log(result.join(''))