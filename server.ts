import { day1 } from './solutions/day_1';
import { day2 } from './solutions/day_2';
import { day3 } from './solutions/day_3';
import { day4 } from './solutions/day_4';
import { day5 } from './solutions/day_5';
import { day6 } from './solutions/day_6';
import { day7 } from './solutions/day_7';
import { day8 } from './solutions/day_8';
import { day9 } from './solutions/day_9';
import { day10 } from './solutions/day_10';
import { day11 } from './solutions/day_11';
import { day13 } from './solutions/day_13';
import { day14 } from './solutions/day_14';
import { day20 } from './solutions/day_20';
import { day21 } from './solutions/day_21';

const day = +process.argv[2];

type Stars = { star1: string | number, star2: string | number }
type Days = (() => Stars)[]
  
const days: Days = [
  day1, day2, day3, day4, day5, day6, day7, day8, day9, day10, day11,
  () => ({ star1: 0, star2: 0}), // day_12 not ready
  day13, day14, 
  () => ({ star1: 0, star2: 0}), // day not ready
  () => ({ star1: 0, star2: 0}), // day not ready
  () => ({ star1: 0, star2: 0}), // day not ready
  () => ({ star1: 0, star2: 0}), // day not ready
  () => ({ star1: 0, star2: 0}), // day not ready
  day20,
  day21,
  () => ({ star1: 0, star2: 0}), // day not ready
  () => ({ star1: 0, star2: 0}), // day not ready
  () => ({ star1: 0, star2: 0}), // day not ready
  () => ({ star1: 0, star2: 0}), // day not ready
];

const displayResult = ({ star1, star2 }: Stars, i?: number) => {
  const maxLenght = Math.max(`${star1}`.length, `${star2}`.length);
  const dayToShow = isNaN(day) ? i! + 1 : day;
  const titleEnd = maxLenght + (dayToShow > 9 ? 1 : 2);
  const s1 = maxLenght - `${star1}`.length;
  const s2 = maxLenght - `${star2}`.length
  
  return `
   ${[...Array(maxLenght + 13).fill('-')].join('')}
  |      day_${dayToShow}${[...Array(titleEnd).fill(' ')].join('')}|
  |${[...Array(maxLenght + 13).fill(' ')].join('')}|
  |  star1 => ${star1}${[...Array(s1).fill(' ')].join('')}  |
  |  star2 => ${star2}${[...Array(s2).fill(' ')].join('')}  |
   ${[...Array(maxLenght + 13).fill('-')].join('')}
  `;
};

isNaN(day) ? (
  days.forEach((func, i) => console.log(`\x1b[1;9${Math.floor(i % 7)}m%s\x1b[0m`, displayResult(func(), i)))
) : (day > days.length ? (
  console.log('Number of day between 1 and 25, please...')
) : (
  console.log(`\x1b[1;94m%s\x1b[0m`, displayResult(days[day - 1]()))
));

// npm run day nrOfDay     colors terminal: https://gist.github.com/iamnewton/8754917
