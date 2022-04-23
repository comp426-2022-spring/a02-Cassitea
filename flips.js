import {coinFlips, countFlips} from "./modules/coin.mjs";
import {createRequire} from 'module';
const require = createRequire(import.meta.url);
const args = require('minimist')(process.argv.slice(2))
args["number"];
var numFlips = coinFlips(args.number || 1) ;
console.log(numFlips);
console.log(countFlips(numFlips));
/* y u no work */