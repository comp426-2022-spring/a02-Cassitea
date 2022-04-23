import {coinFlips, countFlips} from './module/coin.mjs';
import {createRequire} from 'module';

const args = require('minimist')(process.argv.slice(2))
const require = createRequire(import.meta.url);

args["number"];
var numFlips = coinFlips(args.number || 1) ;

console.log(numFlips);
console.log(countFlips(numFlips));