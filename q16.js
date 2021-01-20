function leapYear(thYear, endYear) {
    let leapYears = []
    for (i = thYear; i <= endYear; i++) {
        if ((i % 4 === 0 && i % 100 !== 0) || (i % 100 !== 0 && i % 400 === 0)) {
            leapYears.push(i)
            
        }
        
    }
    return leapYears
    
}
console.log(leapYear(1990, 2012));