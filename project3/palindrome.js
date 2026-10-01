let str = "racecar";

let reversed = str.split("").reverse().join("");

if (str === reversed) {
    console.log("The string is a palindrome");
} else {
    console.log("The string is not a palindrome");
}