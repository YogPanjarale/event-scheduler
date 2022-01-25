type Obj = {
	[key: string]: any;
};
interface TaskBase {
	id: number;
	title: string;
	job: string;
	params: Obj;
	status: "pending" | "running" | "done" | "error";
}
type TaskWithoutDateStirng = TaskBase & { runAt: string };
type Task = TaskBase & { runAt: Date };

interface IJob {
    (params:Obj):void;
}
export { Obj,Task, TaskWithoutDateStirng, IJob };
