import fs from 'fs';
import { config } from 'dotenv';

config({ path: './.env' });

export const getInputForDay = (day: number) => {

  const PATH = `${process.env.ROOT_PATH}/day_${day}.in`;

  return fs.readFileSync(PATH, 'utf-8');
};
