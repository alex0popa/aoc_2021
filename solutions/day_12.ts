import { getInputForDay } from './../helpers/getInputByDay';

// const input = getInputForDay(12)

const input = `dc-end
HN-start
start-kj
dc-start
dc-HN
LN-dc
HN-end
kj-sa
kj-HN
kj-dc`.split('\n').map(line => line.split('-'));

const obj: { [key: string]: string[] } = {};

input.forEach((el) => {
  const [el1, el2] = el;
  el2 !== 'start' &&
  (typeof obj[el1] === 'object' ? obj[el1].push(el2) : obj[el1] = [el2]);

  el1 !== 'start' &&
  (typeof obj[el2] === 'object' ? obj[el2].push(el1) : obj[el2] = [el1]);  
})

console.log(obj)