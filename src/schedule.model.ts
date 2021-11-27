import mongoose from "mongoose";
import type {ISchedule}from './types/schedule'

const schema = new mongoose.Schema<ISchedule>({
    id: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    repeating: {
        type: Boolean,
        required: true,
    },
    triggerAt: {
        type: Date,
        required: false,
    },
    webhookurl: {
        type: String,
        required: true,
    },
    webhookmethod: {
        type: String,
        required: false,
    },
    repeatType: {
        type: String,
        required: false,
    },
    daily: {
        time: {
            type: Date,
            required: false,
        },
    },
    weekly: {
        time: {
            type: Date,
            required: false,
        },
        days: {
            type: [String],
            required: false,
        },
    },
    monthly: {
        time: {
            type: Date,
            required: false,
        },
        dates: {
            type: [Number],
            required: false,
        },
    },
    status: {
        type: String,
        required: true,
    },
    nextRunningTime: {
        type: Date,
        required: true,
    },
});

const scheduleModel = mongoose.model<ISchedule>("Schedule", schema);
export default scheduleModel;