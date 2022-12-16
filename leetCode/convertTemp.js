

var convertTemperature = function(celsius) {
    let ans = [(celsius + 273.15), (celsius * (9/5) +32)]
    // console.log(ans)
    return ans
};

convertTemperature(36.50)