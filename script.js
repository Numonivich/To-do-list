const input = document.getElementById("todoInput");
const list = document.getElementById("todoList");

// Enter tugmasini bosganda ham qo'shish
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const taskValue = input.value.trim();

    if (taskValue === "") {
        alert("Vazifa matnini kiriting!");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskValue}</span>
        <button class="delete-btn" onclick="this.parentElement.remove()">O'chirish</button>
    `;

    list.appendChild(li);
    input.value = ""; // Maydonni tozalash
}