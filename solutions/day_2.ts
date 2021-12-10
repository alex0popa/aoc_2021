import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

import fs from 'fs';

const PATH = `${process.env.ROOT_PATH}/day_2.in`;

type Sub = {
  horizontal: number,
  depth_1: number,
  depth_2: number,
  aim: number,
  forward: (val: number) => void;
  down: (val: number) => void;
  up: (val: number) => void;
  getResult(): { star1: number, star2: number }
};

type Functions = keyof Pick<Sub, 'forward' | 'up' | 'down'>;

const sub: Sub = {
  horizontal: 0,
  depth_1: 0,
  depth_2: 0,
  aim: 0,
  forward: function(val) {
    this.horizontal += val;

    this.depth_2 += val * this.aim;
  },
  down: function(val) {
    this.depth_1 += val;

    this.aim  += val;
  },
  up: function(val) {
    this.depth_1 -= val;

    this.aim -= val;
  },
  getResult: function() {
    const star1 = this.horizontal * this.depth_1;
    const star2 = this.horizontal * this.depth_2;

    return { star1, star2 };
  }
};

const computeCoordinates = (el: string) => {
  const action = el.split(' ')[0] as Functions;
  const val = +el.split(' ')[1];
  
  sub[action](val);
};

fs.readFileSync(PATH, 'utf-8').split('\n').forEach(computeCoordinates);

const { star1, star2 } = sub.getResult();

export const day2 = () => ({ star1, star2 });