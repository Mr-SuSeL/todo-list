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
                <li>
                    ${task.content}
                </li>
            `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const init = () => {
        render();

    };

    init();
}