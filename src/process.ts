import { queue, jobType, invertPriorities } from './queue';

const TIMEOUT_DURATION = 100;

queue.process(jobType, function(job, done) {
  setTimeout(() => {
    console.log('Processing job with', invertPriorities[job._priority], 'priority', job.data);
    if (Math.floor(Math.random() + 0.5)) {
      console.log('SUCCESS');
      done(null, job.data);
    }
    else {
      console.log('FAILED');
      done(new Error(`FAILED`));
    }
    queue.inactiveCount(jobType, function(err, total) {
      console.log(`Remaining items in the queue: ${total}`, "\n");
    });
  }, TIMEOUT_DURATION);
});

queue.on('error', function(err) {
  console.log('Oops... ', err);
});

console.log('Waiting for jobs');
