function makanTerusRekursif(waktu) {
    // you can only write your code here!
    /*
    logika:
    apabila waktu kurang dari 0 menit, sudah tidak ambil makan
    selain itu, makan bertambah satu tetapi waktu dikurangi 15
    
    */
    if (waktu === 0) {
        // console.log(waktu + "ini nol")
        return 0
    }
    if (waktu < 15) {
        // console.log(waktu + "sisa")
        return 1
    } else {
        return 1 + makanTerusRekursif(waktu - 15)
    }
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0