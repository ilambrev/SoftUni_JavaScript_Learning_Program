function movieTickets(input) {

    let a1 = Number(input[0]);
    let a2 = Number(input[1]);
    let n = Number(input[2]);

    for (let i = a1 % 2 !== 0 ? a1 : a1 + 1; i < a2; i += 2) {

        let firstSymbol = String.fromCharCode(i);
        let fourthSymbol = i;

        for (let j = 1; j < n; j++) {

            let secondSymbol = j;

            for (let k = 1; k < Math.floor(n / 2); k++) {

                let thirdSymbol = k;

                if ((secondSymbol + thirdSymbol + fourthSymbol) % 2 !== 0) {

                    console.log(`${firstSymbol}-${secondSymbol}${thirdSymbol}${fourthSymbol}`);

                }

            }

        }

    }

}

// movieTickets(["86", "88", "4"]);
// movieTickets(["71", "74", "6"]);
// movieTickets(["69", "72", "4"]);