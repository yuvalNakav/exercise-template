function is_array(a) {
  if (toString.call(a) === "[object Array]") {
    return true;
    } else {
        return false;   
    };
}
    

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));