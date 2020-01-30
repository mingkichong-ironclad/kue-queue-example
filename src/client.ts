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

const job = queue.create(jobType, data).priority(priority).save();
job.on('enqueue', function(result) {
  console.log('Enqueued');
  process.exit(0);
})
.on('complete', function(result) {
  console.log('Completed');
  process.exit(0);
})
.on('failed', function(result) {
  console.log('failed');
  process.exit(1);
})
.on('failed attempt', function(result) {
  console.log('failed attempt');
  process.exit(1);
})
.on('start', function(result) {
  console.log('start');
})
.on('remove', function(result) {
  console.log('remove');
})
.on('promotion', function(result) {
  console.log('promotion');
})
.on('progress', function(result) {
  console.log('progress');
});
