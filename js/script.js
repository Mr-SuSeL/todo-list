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

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <li
                  class="list__item${task.done ? " list__item--done" : ""}"
                >
                  <button class = "js_done">zrobione?</button>
                  <button class = "js-remove">usuń</button>
                    ${task.content}
                </li>
            `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const addNewTask = (newTaskContent) => {
      tasks.push({
        content: newTaskContent,
      });
      render();
    };



    // function eraseInput() {
    //     const inputToErase = doument.querySelector(".js-newTask");
    //     inputToErase.value = "";

    // };
    const onFormSubmit = (event) => {
      event.preventDefault();

      const newTaskContent = document.querySelector(".js-newTask").value.trim();
      console.log(newTaskContent);

      if (newTaskContent === "") {
        return;
      }
      addNewTask(newTaskContent);
      // eraseInput();

    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}