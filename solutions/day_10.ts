import { getInputForDay } from './../helpers/getInputByDay';

type Close = { '(': ')', '[': ']', '{': '}', '<': '>' };
type Points = { ')': number, ']': number, '}': number, '>': number };

const OPEN = '([{<';
const CLOSE: Close = { '(': ')', '[': ']', '{': '}', '<': '>' };
const POINTS1: Points = { ')': 3, ']': 57, '}': 1197, '>': 25137 };
const POINTS2: Points = { ')': 1, ']': 2, '}': 3, '>': 4 };

let star1 = 0;
let scores: number[] = [];

getInputForDay(10)
  .split('\n')
  .map(chunk => chunk.split(''))
  .forEach(chunk => {
    const opened: string[] = [];
    let isIncomplete = true;

    chunk.forEach(character => {

      if (OPEN.includes(character)) {
        opened.push(CLOSE[character as keyof Close]);
      } else  if (character !== opened.pop()) {
        star1 += POINTS1[character as keyof Points];
        isIncomplete = false;
        return;
      }
    });

    isIncomplete && scores.push(opened.reverse().reduce(
      (a, c) => a * 5 + POINTS2[c as keyof Points], 0)
    );
  });

const star2 = scores.sort((a, b) => a - b)[Math.floor(scores.length / 2)];

export const day10 = () => ({ star1, star2 });
