import myName, { showSale } from "./shop.js";
import { showSale as showBranchSale } from "./branch.js";
function sayHi() {
    console.log(myName);
    showSale();
    showBranchSale();
}
document.getElementById('sayHiButton').addEventListener('click', () => {
    sayHi();
});
