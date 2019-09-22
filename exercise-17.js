function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var numStr = String(angka)
    var result = 1
    for (var i = 0; i < numStr.length; i++) {
        result = result * Number(numStr[i])
    }
    var numnum = String(result)
    if (result < 10) {
        return Number(numnum)
    } else {
        return kaliTerusRekursif(result)
        // return Number(numnum[0]) * kaliTerusRekursif(Number(numnum.slice(1)))
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6