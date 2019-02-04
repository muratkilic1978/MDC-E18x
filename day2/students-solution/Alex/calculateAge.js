var birthYear = 1974;

function myAge(birthYear) {
    var age;
    age = 2019 - birthYear;
    if (age >= 67) {
        console.log("You can go to pension");
    } else {
        console.log("You cannot go to pension");
    }
}
myAge(birthYear);