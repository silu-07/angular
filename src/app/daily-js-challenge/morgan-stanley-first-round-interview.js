function toTitleCase(str) {
    let result = "";
    let capitalizeNext = true;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (char === "_") {
            result += " ";
            capitalizeNext = true;
        } else if (capitalizeNext) {
            result += char.toUpperCase();
            capitalizeNext = false;
        } else {
            result += char;
        }
    }

    return result;
}

console.log(toTitleCase("this_is_snake_text"));
// Output: This Is Snake Text