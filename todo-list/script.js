const input = document.getElementById('input-box');
const todolist = document.getElementById('list-container'); // Keep this name consistent
const addBtn = document.querySelector('.addBtn');

addBtn.addEventListener('click', () => {
    const taskvalue = input.value;

    if (taskvalue.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = taskvalue;

        todolist.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // This is the 'x' icon
        li.appendChild(span);

        input.value = "";
        input.classList.remove('error'); // Remove red glow on success
        saveData();
    } else {
        // --- THE RED GLOW ---
        input.classList.add('error');
        alert("Enter the task please");
    }
});

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addBtn.click();
    }
});

todolist.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData(); // Save status (checked/unchecked)
    } 
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData(); // Save after deleting
    }
});

// Use 'todolist' here to match your variable at the top
function saveData() {
    localStorage.setItem("data", todolist.innerHTML);
}

function showList() {
    todolist.innerHTML = localStorage.getItem("data") || ""; 
}

// CRITICAL: Call this so data appears when you open the page!
showList();