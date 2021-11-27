# Events Scheduleing system Microservice API

Event Scheduler similar to calendar events

Event Scheduler is a microservice that allows users to create, update, and delete events.
Events run on the given date and time schedule ; they can be recurring or not.

## Schedule Object

```ts
{
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
```

ref link
- https://youtu.be/0NKyO7ON58Q
- https://www.npmjs.com/package/cron-parser
- https://codepen.io/greg_h/pen/GpNXNY
