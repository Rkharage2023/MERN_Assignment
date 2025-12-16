const addBtn = document.getElementById("addBtn");
const input = document.getElementById("inputTask");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {

    if (input.value === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    li.innerText = input.value;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    input.value = "";
});
