document.addEventListener('DOMContentLoaded', () => {

    const toDoList = document.querySelector("#toDoList");
    console.warn(toDoList);

    const taskInput = document.querySelector("#taskInput");
    console.log("Taskbutton: ",taskInput);

    const addTaskButton = document.querySelector("#addTaskButton");
    console.log("addTaskButton: ",addTaskButton);

    const taskList = document.querySelector("#taskList");
    console.log("taskList: ",taskList);

    const removeFinishedTasksButton = document.querySelector("#removeFinishedTasksButton");
    console.log("removeFinishedTasksButton: ",removeFinishedTasksButton);


    let numberOfTasks = 0;
    console.log(numberOfTasks);


         // add new task functionality:
         let newTask = document.createElement("li");
         let newTaskTitle = document.createElement("h1");
         let newTaskDeleteButton = document.createElement("button");
         newTaskDeleteButton.innerHTML = "Delete";
         newTaskDeleteButton.addEventListener("click", () => {
             numberOfTasks--;
             newTask.parentElement.removeChild(newTask);
             console.log();
         });

         let newTaskCompleteButton = document.createElement("button");
         newTaskCompleteButton.innerHTML = "Completed";
         newTaskCompleteButton.addEventListener("click", () => {
             event.target.parentElement.classList.toggle("complete");
             if (event.target.parentElement.classList.contains("complete")) {
                 numberOfTasks--;
             } else {
                 numberOfTasks++;
             }
             console.log(numberOfTasks);

         });


    addTaskButton.addEventListener("click", () => {
        if (taskInput.value.length < 5 || taskInput.value.length > 100 ) {
             console.warn("The task description must fit between five and hundret signs!");
         } else {
             numberOfTasks++;
             console.log(numberOfTasks)

             newTaskTitle.innerHTML = taskInput.value;




            let counter = document.createElement("span");
            counter.classList.add("counter");
            toDoList.appendChild(counter);
            counter.innerText = numberOfTasks;


            newTask.appendChild(newTaskTitle);
            newTask.appendChild(newTaskDeleteButton);
            newTask.appendChild(newTaskCompleteButton);
            taskList.appendChild(newTask);

            taskInput.value = "";

        }
    })


//var removeCompletedArr = [...document.querySelectorAll("li")];
    removeFinishedTasksButton.addEventListener("click", () => {

        let removeCompletedArr = [...document.querySelectorAll("li")]
        function deleteAllCompleted (element) {
            if (element.classList.contains("complete")) {
                element.parentElement.removeChild(element);
                numberOfTasks--;

            }
        }
            removeCompletedArr.forEach(deleteAllCompleted);
    });


});
