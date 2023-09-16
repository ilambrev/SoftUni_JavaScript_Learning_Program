function calorieObject(input) {

    const food = {};

    for (let i = 0; i < input.length; i += 2) {
        const foodName = input[i];
        const calories = Number(input[i + 1]);

        food[foodName] = calories;
    }

    console.log(food);

}

// calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
// calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);