function changeVocals(str) {
    //code di sini
    var vocal = "aiueo"
    var vocalUppper = "AIUEO"
    var vocalChanger = "bjvfp"
    var vocalUpperChanger = "BJVFP"
    var temp = ""
    for (var i = 0; i < str.length; i++) {
        var index = false
        for (var j = 0; j < vocal.length; j++) {
            if (str[i] === vocal[j] || str[i] === vocalUppper[j]) {
                index = true
            }
            if (str[i] === vocal[j]) {
                temp = temp + vocalChanger[j]
            } else if (str[i] === vocalUppper[j]) {
                temp = temp + vocalUpperChanger[j]
            }
            // console.log(i, j, temp)
        }
        if (index === false) {
            temp = temp + str[i]
        }
    }
    return temp
}

function reverseWord(str) {
    //code di sini
    var temp = ""
    for (var i = str.length - 1; i >= 0; i--) {
        temp = temp + str[i]
    }
    return temp
}

function setLowerUpperCase(str) {
    //code di sini
    var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var temp = ""
    for (var i = 0; i < str.length; i++) {
        var index = true
        if (str[i] === " ") {
            index = false
        }
        for (var j = 0; j < alphabet.length; j++) {
            if (str[i] === alphabet[j]) {
                temp = temp + alphabetUpper[j]
            } else if (str[i] === alphabetUpper[j]) {
                temp = temp + alphabet[j]
            }
        }
        if (index === false) {
            temp = temp + " "
        }
    }
    return temp
}

function removeSpaces(str) {
    //code di sini
    var temp = ""
    var index = false
    for (var i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            index = true
        } else {
            temp = temp + str[i]
        }
    }
    if (index === true) {
        temp = temp + ""
    }
    return temp
}

function passwordGenerator(name) {
    //code di sini
    var changeVoc = changeVocals(name)
    var reverse = reverseWord(changeVoc)
    var lowering = setLowerUpperCase(reverse)
    var removing = removeSpaces(lowering)
    if (name.length < 5) {
        return "Minimal karakter yang diinputkan adalah 5 karakter"
    }
    return removing
}
// console.log(reverseWord('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'