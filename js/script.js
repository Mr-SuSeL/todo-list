{

    const tasks = [
        {
            content: "Zadanie nr 1 do wykonania",
            done: false,
        },
        {
            content: "Zadanie nr 2 do wykonania",
            done: true,
        },
    ];

    const addNewTask = (newTaskContent) => {
      tasks.push({
        content: newTaskContent,
      });
      render();
    };

    const removeTask = (taskIndex) => {
      tasks.splice(taskIndex, 1);
      render();
    }

    const toggleTaskDone = (taskIndex) => {
      tasks[taskIndex].done = !tasks[taskIndex].done;
      render();
    }

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
}

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <li
                  class="list__item${task.done ? " list__item--done" : ""}"
                >
                  <button class = "js-done">zrobione?</button>
                  <button class = "js-remove">usuń</button>
                    ${task.content}
                </li>
            `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvents();


    };



    function eraseInput(thisfield) {
      thisfield.value = "";
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