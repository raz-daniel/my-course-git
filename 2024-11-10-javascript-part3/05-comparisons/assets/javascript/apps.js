const myAge = 22;
const yourAge = `22`;

// Always Use strict Comparison!
if (myAge === yourAge) {
    console.log(`myAge and yourAge are equal`)
} else {
    console.log(`myAge and yourAge are NOT equal`)
}

// Never Use Weak Comparison!
if (myAge == yourAge) {
    console.log(`myAge and yourAge are equal`)
} else {
    console.log(`myAge and yourAge are NOT equal`)
}

const num = 0;
const bool = false;
// Never Use Weak Comparison!
if (num == bool) {
    console.log(`num & bool are equal`)
} else {
    console.log(`num & bool are NOT equal`)
}

// Always Use strict Comparison!
if (num === bool) {
    console.log(`num & bool are equal`)
} else {
    console.log(`num & bool are NOT equal`)
}
