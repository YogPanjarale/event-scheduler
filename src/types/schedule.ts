export interface  ISchedule{
    id:string,
    repeating: boolean,
    triggerAt: Date,//null if not repeating
    webhookurl : string,
    webhookmethod?: string,
    repeatType?: "daily"| "weekly" | "monthly"
    daily?: {
        time: Date,
    },
    weekly?:{
        time: Date,
        days: [string]//["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
    },
    monthly?: {
        time: Date,
        dates: [number]//[1-31]
    },
    status: "done" | "pending" | "error",
    nextRunningTime: Date,
}
