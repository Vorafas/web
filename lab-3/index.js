let tasks = [
    'Изучить JavaScript',
    'Изучить jQuery',
    'Изучить React'
];

const listGroup = document.querySelector('.todo-list');
const form = document.querySelector('.item-add-form');
const formControl = document.querySelector('.form-control');
const formButton = document.querySelector('.form-button');

const renderTasks = () => {
    const html = tasks.map(item => renderItem(item));
    listGroup.innerHTML = html.join("");
    hangEvents();
}

const renderItem = (text) => {
    let html = '';
    html += '<li class="todo-list-item">';
    html += '<span class="todo-list-item-label">'
    html += '<span class="todo-label">' + text + '</span>';
    html += '<div class="buttons">';
    html += '<button class="delete-button">Удалить</button>';
    html += '</div>';
    html += '<span>';
    html += '</li>'
    return html;
}

const hangEvents = () => {
    for (item of listGroup.children) {
        const deleteButton = item.querySelector('.delete-button');
        const label = item.querySelector('.todo-label');
        deleteButton.addEventListener('click', (evt) => {
            deleteTask(label.textContent);
            renderTasks();
        });
    }
}

const deleteTask = (text) => {
    tasks = tasks.filter(task => task !== text);
}

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const text = formControl.value.trim();
    if (text.length > 0) {
        formControl.value = "";
        formControl.classList.remove('error');
        tasks.push(text);
        renderTasks();
    } else {
        formControl.classList.add('error');
    }
});

renderTasks();