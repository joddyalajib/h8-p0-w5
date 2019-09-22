function totalDigitRekursif(angka) {
    // you can only write your code here!
    var numStr = String(angka)
    if (numStr.length === 1) {
        return Number(numStr)
    } else {
        return Number(numStr[0]) + totalDigitRekursif(numStr.slice(1))
    }
    // var counter = 0
    // for (var i = 0; i < numStr.length; i++) {
    //     counter = counter + Number(numStr[i])
    // }
    // return counter
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5