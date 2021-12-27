import { getInputForDay } from './../helpers/getInputByDay';

const input = getInputForDay(7).split(',').map(e => +e);

const maxPosition = Math.max(...input) + 1;

const computeConsum = (steps: number, consum = 0) => {
  while (steps) consum += steps--;

  return consum;
};


const getStar = (star: number) => Math.min(
  ...[...Array(maxPosition)].map((_, actualPosition) => input
    .map(crabPosition => star === 1
      ? Math.abs(crabPosition - actualPosition)
      : computeConsum(Math.abs(crabPosition - actualPosition))
    )
    .reduce((a, c) => a + c)
  )
);

const star1 = getStar(1);
const star2 = getStar(2);

export const day7 = () => ({ star1, star2 });