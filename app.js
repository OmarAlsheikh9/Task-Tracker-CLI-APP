import fs from "fs";
let tasks = fs.readFileSync("tasks.json", "utf-8");
tasks = JSON.parse(tasks);

if (process.argv[2] === "add" && process.argv.length === 4) {
  let newTask = {
    id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
    description: process.argv[3],
    status: "todo",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  tasks.push(newTask);
  fs.writeFileSync("tasks.json", JSON.stringify(tasks));
  console.log(`Task added successfully (ID: ${newTask.id})`); 
} 
else if (process.argv[2] === "update" && process.argv.length === 5 && !isNaN(process.argv[3])) {
  let id = +process.argv[3];
  let task = tasks.find((el) => el.id === id);
  if (task) {
    task.description = process.argv[4];
    task.updatedAt = new Date();
    fs.writeFileSync("tasks.json", JSON.stringify(tasks));
    console.log(`Task updated successfully (ID: ${id})`); 
  } else {
    console.log("Task not found");
  }
} 
else if (process.argv[2] === "delete" && process.argv.length === 4 && !isNaN(process.argv[3])) {
  let id = +process.argv[3];
  let taskExists = tasks.find((el) => el.id === id); 
  if (taskExists) {                                   
    let newTasks = tasks.filter((el) => el.id !== id);
    fs.writeFileSync("tasks.json", JSON.stringify(newTasks));
    console.log(`Task deleted successfully (ID: ${id})`); 
  } else {
    console.log("Task not found"); 
  }
} 
else if (process.argv[2].startsWith("mark-") && process.argv.length === 4 && !isNaN(process.argv[3])) {
  let id = +process.argv[3];
  let task = tasks.find((el) => el.id === id);
  if (task) {
    task.status = process.argv[2].split("-")[2] === "progress" ? "in-progress" : "done";
    task.updatedAt = new Date();
    fs.writeFileSync("tasks.json", JSON.stringify(tasks));
    console.log(task);
  } else {
    console.log("Task not found");
  }
} 
else if (process.argv[2] === "list" && process.argv.length === 3) {
  tasks.forEach((el) => console.log(el.description));
} 
else if (process.argv[2] === "list" && process.argv.length === 4) {
  tasks.forEach((el) => {
    if (el.status === process.argv[3]) console.log(el.description);
  });
} 
else {
  console.log("Invalid command");
}