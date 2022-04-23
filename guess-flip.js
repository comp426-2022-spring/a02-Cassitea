import { flipACoin } from "./modules/coin.mjs";
import {createRequire} from 'module';
const args = require('minimist')(process.argv.slice(2))
const require = createRequire(import.meta.url);

console.log(flipACoin(args.call));