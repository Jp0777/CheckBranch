let remaining = [];
const tasks = {
    task: [
        {
            text: "Shopping",
            completed: true
        },
        {
            text: "Shopping2",
            completed: false
        }, {
            text: "Shopping3",
            completed: false
        },
        {
            text: "Watching",
            completed: false
        }
    ]
}

const getTasksToDo = () => {
    remaining = tasks.task.filter((task) => {
        return task.completed === false;
    })

}
getTasksToDo();

remaining.map((remain) => {
    console.log(remain.text)
})