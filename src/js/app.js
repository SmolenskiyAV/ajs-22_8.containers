import {Team, errorRepository} from './basic';

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
let john2 = { name: "John2" };
let pete2 = { name: "Pete2" };
let mary2 = { name: "Mary2" };

const m = new Team();

m.add(john);
m.add(john2);
m.addAll(john, john2, pete, mary2);

const a = m.toArray();

console.log('toArray = ', a);

m.add(john2);
//=================================================================

console.log(errorRepository.translate('100'));

//=================================================================


console.log();
console.log('end of execution!');