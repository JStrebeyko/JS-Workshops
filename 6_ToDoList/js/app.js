document.addEventListener('DOMContentLoaded', () => {

    const taskInput = document.querySelector("#taskInput");
    console.log("Taskbutton: ",taskInput);

    const addTaskButton = document.querySelector("#addTaskButton");
    console.log("addTaskButton: ",addTaskButton);

    const taskList = document.querySelector("#taskList");
    console.log("taskList: ",taskList);

    const removeFinishedTasksButton = document.querySelector("#removeFinishedTasksButton");
    console.log("removeFinishedTasksButton: ",removeFinishedTasksButton);

    // add new task functionality:

    addTaskButton.addEventListener("click", () => {
        if (taskInput.value.length < 5 || taskInput.value.length > 100 ) {
             console.warn("The task description must fit between five and hundret signs!");
         } else {

            let newTask = document.createElement("li");

            let newTaskTitle = document.createElement("h1");
            newTaskTitle.innerHTML = taskInput.value;

            let newTaskDeleteButton = document.createElement("button");
            newTaskDeleteButton.innerHTML = "Delete";
            newTaskDeleteButton.addEventListener("click", () => {
                newTask.parentElement.removeChild(newTask);
            });


            let newTaskCompleteButton = document.createElement("button");
            newTaskCompleteButton.innerHTML = "Completed";
            newTaskCompleteButton.addEventListener("click", () => {
                event.target.parentElement.classList.toggle("complete")
            });

            newTask.appendChild(newTaskTitle);
            newTask.appendChild(newTaskDeleteButton);
            newTask.appendChild(newTaskCompleteButton);
            taskList.appendChild(newTask);

            taskInput.value = "";

        }
    })

    let counter = document.createElement("span");
    let numberOfUndone = 0;
    counter.classList.add("counter")
    counter.innerHTML = numberOfUndone;
    function countUndoneTasks() {
        if (!element.classList.contains("complete")) {
            count++;
        }
    }
    numberOfUndone = [...document.querySelectorAll("li")].forEach(countUndoneTasks)


//var removeCompletedArr = [...document.querySelectorAll("li")];
removeFinishedTasksButton.addEventListener("click", () => {

    let removeCompletedArr = [...document.querySelectorAll("li")]
    function deleteAllCompleted (element) {
        if (element.classList.contains("complete")) {
            element.parentElement.removeChild(element);
        }
    }
        removeCompletedArr.forEach(deleteAllCompleted);
});


});
