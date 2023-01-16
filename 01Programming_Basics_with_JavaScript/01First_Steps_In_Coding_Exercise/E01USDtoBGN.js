function convertUSDToBGN(input) {
    const exchangeRate = 1.79549;
    let USD = Number(input[0]);
    let BGN =  USD * exchangeRate;

    console.log(BGN);
}

// convertUSDToBGN(["22"]);
// convertUSDToBGN(["100"]);
// convertUSDToBGN(["12.5"]);