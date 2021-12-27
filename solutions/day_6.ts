import { getInputForDay } from './../helpers/getInputByDay';

const freq = new Array(9).fill(0);

getInputForDay(6).split(',').forEach(fish => ++freq[+fish]);

const getTheStar = (days: number) => {
  while (days--) {
    freq[8] = freq.shift();
    freq[6] += freq[8];
  }

  return freq.reduce((a, c) => a + c);
};

const [star1, star2] = [getTheStar(80), getTheStar(256 - 80)];

export const day6 = () => ({ star1, star2 });
