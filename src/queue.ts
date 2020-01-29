import * as kue from 'kue'

export const REDIS_HOST = "127.0.0.1";
export const REDIS_PORT = 6379;
const REDIS_URL = `redis://${REDIS_HOST}:${REDIS_PORT}`;

export const queue = kue.createQueue({
  redis: REDIS_URL,
});
