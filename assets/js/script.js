const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Adding Task
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // Add cross Icon in the span tag
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        // To display span tag
        li.appendChild(span);
    }
    // clear a text box after entering a text.
    inputBox.value = "";
    saveData();
}

// Js for Click funftion
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// To Save data in browser
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
// To display saved DATA 
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

