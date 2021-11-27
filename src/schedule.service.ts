import { ISchedule } from "./types/schedule";
import ScheduleModel from "./schedule.model";
export default class ScheduleService {
    static updateSchedule(body: ISchedule) {
        return ScheduleModel.findByIdAndUpdate(body.id, body);
    }
    static async createSchedule(schedule: ISchedule){
        const model  = new ScheduleModel(schedule);
        await model.save();
    };
}
