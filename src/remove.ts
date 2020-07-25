import * as kue from 'kue';
import { jobType } from './queue';

async function getJobs (status) {
  return new Promise<kue.Job[]>((resolve, reject) => {
    kue.Job.rangeByType(jobType, status, 0, -1, 'asc',(err, jobs) => {
      if(err){
        reject(err);
      }else{
        resolve(jobs);
      }
    });
  });
}

const states = ['complete', 'failed'];

(async () => {
  for(const state of states){
    const jobs = await getJobs(state);
    console.log(`found ${jobs.length} ${state} jobs`);
    jobs.forEach((job)=>{
      console.log(state, 'removed', job.remove().id);
    });
  }
  process.exit(0);
})();
