function calcWordFrequencies(input) {
    if (!input) {
        console.log("No input provided.");
        return;
    }

    let words = input.split(" ");
    let frequencies = new Map();

    // Count the frequency of each word
    words.forEach(word => {
        let lowercaseWord = word.toLowerCase();
        if (frequencies.has(lowercaseWord)) {
            frequencies.set(lowercaseWord, frequencies.get(lowercaseWord) + 1);
        } else {
            frequencies.set(lowercaseWord, 1);
        }
    });

    // Output word frequencies to the console
    frequencies.forEach((value, key) => {
        console.log(key + " " + value);
    });
}

// Test cases
calcWordFrequencies("hey hi Mark hi mark");
calcWordFrequencies("pickle test rick Pickle test pickle");
calcWordFrequencies("a cat and a dog may fight but a cat and a cat may fight more");
