const title = "abinash mohanta angular"

//Output - anGular abiInash moHanta

const result = title
    .split(" ")
    .reverse()
    .map(word => {
        if (word.length >= 3) {
            return word.slice(0, 2) + word.charAt(2).toUpperCase() + word.slice(3);
        }
        return word;
    })
    .join(" ");

console.log(result)