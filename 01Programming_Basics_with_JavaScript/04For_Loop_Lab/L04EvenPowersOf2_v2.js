function evenPowersOf2(input) {

    let n = Number(input[0]);
    let num = 1;

    for (let i = 0; i <= n; i += 2) {
        console.log(num);
        num = num * 2 * 2;
    }

}

// evenPowersOf2(["3"]);
// evenPowersOf2(["4"]);
// evenPowersOf2(["5"]);
// evenPowersOf2(["6"]);
// evenPowersOf2(["7"]);