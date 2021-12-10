import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

import fs from 'fs';

const PATH = `${process.env.ROOT_PATH}/day_6.in`;

const freq = new Array(9).fill(0);

fs.readFileSync(PATH, 'utf-8').split(',').forEach(fish => ++freq[+fish]);

const getTheStar = (days: number) => {
  while (days--) {
    freq[8] = freq.shift();
    freq[6] += freq[8];
  }

  return freq.reduce((a, c) => a + c);
};

const [star1, star2] = [getTheStar(80), getTheStar(256 - 80)];

export const day6 = () => ({ star1, star2 });