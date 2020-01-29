import * as kue from 'kue';
import * as _ from 'lodash';

export const REDIS_HOST = "127.0.0.1";
export const REDIS_PORT = 6379;
const REDIS_URL = `redis://${REDIS_HOST}:${REDIS_PORT}`;

export const queue = kue.createQueue({
  prefix: 'q',
  redis: REDIS_URL,
});

export const jobType = 'Queue Job';

export const priorities = { low: 10, normal: 0, medium: -5, high: -10, critical: -15 };
export const invertPriorities = _.invert(priorities);
export const prioritiesKeys = _.keys(priorities);
