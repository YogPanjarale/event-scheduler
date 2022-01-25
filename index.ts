import fs from "fs";
import path from "path";
import jobs from "./jobs";
import { Task, TaskWithoutDateStirng } from "./types";

function getTasks(): Task[] {
	let rawData = fs.readFileSync(path.resolve(__dirname) + "\\tasks.json");
	const tasksRaw: TaskWithoutDateStirng[] = JSON.parse(rawData.toString());
	const tasks: Task[] = tasksRaw.map((task) => {
		const runAt = new Date(task.runAt);
		return {
			...task,
			runAt,
		};
	});
	return tasks;
}

const checkEvery = 1000; // 1000 ms = 1 second

async function main() {
	const tasks = getTasks();

	setInterval(() => {
		tasks.forEach((task) => {
			const now = new Date();
			if (task.runAt < now) return;
            const job = jobs.get(task.job);
            if (job && task.status === "pending") {
                job(task.params);
                task.status = "done";
            }
		});
	}, checkEvery);
}
main().then(() => {
	console.log("Done");
    
});
