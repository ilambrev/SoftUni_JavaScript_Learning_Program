function evenPositionElements(input) {

    console.log(input.reduce((acc, curr, index) => {
        if (index % 2 === 0) {
            acc.push(curr);
        }
        return acc;
    }, []).join(' '));

}

// evenPositionElements(['20', '30', '40', '50', '60']);
// evenPositionElements(['5', '10']);