import Backup from "./backup.js";
import Kitten from "./kitten.js";

const stringObject = new Backup (`Daniel`, `Name`);
stringObject.display();

const numberObject = new Backup (`Hundred`, 10);
numberObject.display()

const booleanObject = new Backup (`Daniel`, true);
booleanObject.display()

const dateObject = new Backup (`Daniel`, new Date());
dateObject.display()

const kitten = new Kitten(`Eden`, 6, `gray`)
const kittenObject = new Backup (`Cat`, kitten)
kittenObject.display()

