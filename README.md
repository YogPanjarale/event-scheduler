# Events Scheduleing system Microservice API

Event Scheduler similar to calendar events

Event Scheduler is a microservice that allows users to create, update, and delete events.
Events run on the given date and time schedule ; they can be recurring or not.

## Event Object

```js
{
    id:string,
    repeating: boolean,
    triggerAt: Date,
    webhookurl : string,
    webhookmethod : string,
    

}
```
