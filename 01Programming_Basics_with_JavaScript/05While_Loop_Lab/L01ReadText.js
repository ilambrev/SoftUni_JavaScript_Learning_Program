function readText(input) {

    let i = 0;
    let text = input[i];

    while (text !== "Stop") {
        console.log(text);
        i++;
        text = input[i];
    }

}

// readText(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"]);
// readText(["Sofia", "Berlin", "Moscow", "Athens", "Madrid", "London", "Paris", "Stop", "AfterStop"]);