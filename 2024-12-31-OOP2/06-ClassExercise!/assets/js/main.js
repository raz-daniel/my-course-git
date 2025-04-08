import AlertLogger from "./alert-logger.js";
import ConsoleLogger from "./console-logger.js";
function getLogger(name) {
    switch (name) {
        case 'console':
            return new ConsoleLogger();
        case 'alert':
            return new AlertLogger();
    }
}
const logger = getLogger('alert');
const logger2 = getLogger('console');
logger.log(`hello polymorphism`);
logger2.log(`hello polymorphism`);
