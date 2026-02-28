let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let timerInterval;

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;
    list.appendChild(li);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const input = document.getElementById("taskInput");
  if (input.value.trim() !== "") {
    tasks.push(input.value);
    input.value = "";
    renderTasks();
  }
}

function pickTask() {
  if (tasks.length === 0) return;
  const random = tasks[Math.floor(Math.random() * tasks.length)];
  document.getElementById("chosenTask").textContent = "👉 " + random;
}

function startTimer() {
  let time = 1500;
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    document.getElementById("timer").textContent =
      `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    time--;

    if (time < 0) {
      clearInterval(timerInterval);
      alert("Time's up! 🎉");
    }
  }, 1000);
}

renderTasks();
