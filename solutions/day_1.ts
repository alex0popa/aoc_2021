import { getInputForDay } from './../helpers/getInputByDay';

type Stars = { star1: number, star2: number };

const input = getInputForDay(1).split('\n').map(el => +el);

const MAX_POS = input.length - 3;

const INITIAL_STARS: Stars = { star1 : 0, star2: 0 };

const computeValues = ({ star1, star2 }: Stars, val: number, i: number) => ({
  star1: i && val > input[i - 1] ? ++star1 : star1,
  star2: i < MAX_POS && val < input[i + 3] ? ++star2 : star2
});

const { star1, star2 } = input.reduce(computeValues, INITIAL_STARS);

export const day1 = () => ({ star1, star2 });
