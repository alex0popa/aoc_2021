import fs from 'fs';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const DAY = new Date().getDate();
const cookie = `session=${process.env.SESSION}`;

axios
  .get(`https://adventofcode.com/2021/day/${DAY}/input`, { headers: { cookie } })
  .then(({ data }) => fs.writeFile(`inputs/day_${DAY}.in`, data, _=> console.log(`\x1b[1;94m%s\x1b[0m`, '!! - Done - !!')));
