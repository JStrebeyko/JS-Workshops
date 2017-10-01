document.addEventListener('DOMContentLoaded', () => {


// basic DOM variables

    const toDoList = document.querySelector("#toDoList");
    const taskInput = document.querySelector("#taskInput");
    const addTaskButton = document.querySelector("#addTaskButton");
    const taskList = document.querySelector("#taskList");
    const removeFinishedTasksButton = document.querySelector("#removeFinishedTasksButton");

// Counter - we do it first, as later on some functionalities are modifying numberOfTasks

    const counter = document.createElement("span");
    counter.classList.add("counter");
    toDoList.appendChild(counter);
    let numberOfTasks = 0;
    counter.innerText = numberOfTasks;


 // addTaskButton functionality:

    addTaskButton.addEventListener("click", () => {
        if (taskInput.value.length < 5 || taskInput.value.length > 100 ) {
             console.warn("The task description must fit between five and hundret signs!");
         } else {
             numberOfTasks++;
             counter.innerText = numberOfTasks;


             let newTask = document.createElement("li");
             let newTaskTitle = document.createElement("h1");
             newTaskTitle.innerHTML = taskInput.value;
             let newTaskDeleteButton = document.createElement("button");
             newTaskDeleteButton.innerHTML = "Delete";
             newTaskDeleteButton.addEventListener("click", () => {
                 newTask.parentElement.removeChild(newTask);
                 numberOfTasks--;
                 counter.innerText = numberOfTasks;

             });

             let newTaskCompleteButton = document.createElement("button");
             newTaskCompleteButton.innerHTML = "Completed";
             newTaskCompleteButton.addEventListener("click", () => {
                 event.target.parentElement.classList.toggle("complete");
                 if (event.target.parentElement.classList.contains("complete")) {
                     numberOfTasks--;
                     toDoList.appendChild(counter);
                     counter.innerText = numberOfTasks;

                 } else {
                     numberOfTasks++;
                     toDoList.appendChild(counter);
                     counter.innerText = numberOfTasks;
                 }
             });

            newTask.appendChild(newTaskTitle);
            newTask.appendChild(newTaskDeleteButton);
            newTask.appendChild(newTaskCompleteButton);
            taskList.appendChild(newTask);

            taskInput.value = "";
        }
    })

// removeFinishedTasksButton functionality
    removeFinishedTasksButton.addEventListener("click", () => {

        let removeCompletedArr = [...document.querySelectorAll("li")]
        function deleteAllCompleted (element) {
            if (element.classList.contains("complete")) {
                element.parentElement.remov eChild(element);
            }
        }
            removeCompletedArr.forEach(deleteAllCompleted);
    });
});
