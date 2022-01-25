import {Obj,IJob} from '../types';
const logJob = (params:Obj):void => {
    const message = params['message'];
    console.log(message);
};
const jobs = new Map<string,IJob>()
jobs.set('log', logJob);
export default jobs;