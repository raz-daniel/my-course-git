import Color from "./color-enum.js";
const color = prompt(`enter color...`);
function getColorItem(color) {
    switch (color) {
        case `YELLOW`:
            return Color.YELLOW;
        case `GREEN`:
            return Color.GREEN;
    }
}
console.log(`${getColorItem(color)}`);
