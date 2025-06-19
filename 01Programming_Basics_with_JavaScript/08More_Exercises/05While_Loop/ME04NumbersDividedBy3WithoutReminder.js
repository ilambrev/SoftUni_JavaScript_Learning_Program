function numbersDividedBy3WithoutReminder() {
    let currentNum = 1;

    while (currentNum < 101) {
        if (currentNum % 3 == 0) {
            console.log(currentNum);
        }

        currentNum++;
    }
}

// numbersDividedBy3WithoutReminder();