import { queue, jobType, prioritiesKeys } from './queue';
import * as Path from 'path';

export interface MockData {
  title: string,
  origin: string,
  date: string,
  epoch: number,
}

export function getMockData(origin: string): MockData {
  const date = new Date();
  return {
    title: `Job from ${origin} sent at ${date.toLocaleString()}`,
    origin: origin,
    date: date.toLocaleString(),
    epoch: date.getTime()
  };
}

const thisFileName = Path.basename(__filename);
const data = getMockData(thisFileName);
const priority = prioritiesKeys[Math.floor(Math.random() * prioritiesKeys.length)];
console.log("Job with", priority, "priority sent data", data, "\n");

queue.create(jobType, data).priority(priority).save().on('enqueue', function(result) {
  process.exit(0);
});
