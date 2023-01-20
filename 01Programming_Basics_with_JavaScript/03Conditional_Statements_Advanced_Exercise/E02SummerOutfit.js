function summerOutfit(input) {
    let degree = Number(input[0]);
    let partOfTheDay = input[1];

    let outfit = "";
    let shoes = "";

    if ((partOfTheDay === "Morning" && degree > 18 && degree <= 24) ||
        (partOfTheDay === "Afternoon" && degree >= 10 && degree <= 18) ||
        partOfTheDay === "Evening") {

        outfit = "Shirt";
        shoes = "Moccasins";
    } else if ((partOfTheDay === "Morning" && degree >= 25) ||
        (partOfTheDay === "Afternoon" && degree > 18 && degree <= 24)) {

        outfit = "T-Shirt";
        shoes = "Sandals";
    } else if (partOfTheDay === "Morning" && degree >= 10 && degree <= 18) {

        outfit = "Sweatshirt";
        shoes = "Sneakers";
    } else if (partOfTheDay === "Afternoon" && degree >= 25) {

        outfit = "Swim Suit";
        shoes = "Barefoot";
    }

    console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);
}

// summerOutfit(["16", "Morning"]);
// summerOutfit(["22", "Afternoon"]);
// summerOutfit(["28", "Evening"]);