{

  let tasks = [
    {
      content: "Zadanie nr 1 do wykonania",
      done: false,
    },
    {
      content: "Zadanie nr 2 do wykonania",
      done: true,
    },
  ];

  let hideDoneTasks = false; 

  const addNewTask = (newTaskContent) => {
    tasks = [
      ...tasks,
      { content: newTaskContent }
    ];
    render();
  };

  const removeTask = (taskIndex) => {
    tasks = [
      ...tasks.slice(0, taskIndex),
      ...tasks.slice(taskIndex + 1),
    ];

    render();
  };

  const toggleTaskDone = (taskIndex) => {

    tasks = [
      ...tasks.slice(0, taskIndex),
      {
        ...tasks[taskIndex],
        done: !tasks[taskIndex].done,
      },
      ...tasks.slice(taskIndex + 1),
    ];
    render();
  };


  const bindEvents = () => {

    const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      });
    });

    const toggleDonebuttons = document.querySelectorAll(".js-done");

    toggleDonebuttons.forEach((toggleDoneButton, index) => {
      toggleDoneButton.addEventListener("click", () => {
        toggleTaskDone(index);
      });
    });
    document.querySelector(".js-newTask").value = "";
  };


  const bindButtonsEvents = () => {
    const toggleAllTaskDoneButton = document.querySelector(".js-buttonFinishAll");
    const buttonHideDone = document.querySelector(".js-buttonHideDone");

    if (tasks.length) {
      toggleAllTaskDoneButton.addEventListener("click", () => {

        tasks = tasks.map((task) => ({ ...task, done: true }));

        render();
      });

      buttonHideDone.addEventListener("click", () => {
        hideDoneTasks = !hideDoneTasks;
        render();
      });

    };

  };


  const renderTasks = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
        <li
        class="list__item${task.done ? " list__item--done" : ""} list__item${task.done && hideDoneTasks ? " list__item--done taskList--hidden" : ""}"
      >
                <button class = "js-done grid__item grid__item--left">${task.done ? "✔" : ""}</button>

                <div class="js-text grid__item grid__item--center">${task.content}</div>

                <button class = "js-remove grid__item grid__item--right">🗑</button>
                
              </li>
          `;
    }
    document.querySelector(".js-tasks").innerHTML = htmlString;
  };

  const renderButtons = () => {

    let htmlString = "";

    if (!tasks.length) {
      htmlString = `
      <button class="buttonEmptyTasksTab"></button>
      <button class="buttonEmptyTasksTab"></button>
      `;
      document.querySelector(".js-tasksButtons").innerHTML = htmlString;
    }
    else {

      htmlString += `
      <button class="js-buttonHideDone section__heading__hideButton">
      ${hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone zadania
      </button>
      <button class="js-buttonFinishAll section__heading__finishButton"
      ${tasks.every(({ done }) => done) ? " disabled" : ""}>
      Zakończ wszystkie zadania
      </button>
    `;

      document.querySelector(".js-tasksButtons").innerHTML = htmlString;
    }
  };

  const render = () => {

    renderTasks();
    renderButtons();

    bindEvents();

    bindButtonsEvents();
  };


  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskContent = document.querySelector(".js-newTask").value.trim();
    console.log(newTaskContent);

    if (newTaskContent === "") {
      return;
    }
    addNewTask(newTaskContent);
  };

  const init = () => {
    render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);
  };

  init();
}