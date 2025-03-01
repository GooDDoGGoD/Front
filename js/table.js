const todoForm = document.querySelector('.zakaz__todo-form');
const todoInput = document.querySelector('.zakaz__todo-input');
const todoItemsList = document.querySelector('.zakaz__todo-items');

let todos = [];

todoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addTodo(todoInput.value);
});

function addTodo(item) {
    if (item !== '') {
        const todo = {
            id: Date.now(),
            name: item
        };

        todos.push(todo);
        addToLocalStorage(todos);
        todoInput.value = '';
    }
}

function renderTodos(todos) {
    todoItemsList.innerHTML = '';

    todos.forEach(function (item) {

        const li = document.createElement('li');
        li.setAttribute('class', 'item');
        li.setAttribute('data-key', item.id);

        li.innerHTML = `${item.name} <button class="delete-button">X</button>`;
        todoItemsList.append(li);
    });

}

function addToLocalStorage(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos(todos);
}

function getFromLocalStorage() {
    const reference = localStorage.getItem('todos');
    if (reference) {
        todos = JSON.parse(reference);
        renderTodos(todos);
    }
}

function deleteTodo(id) {
    todos = todos.filter(function (item) {
        return item.id != id;
    });
    addToLocalStorage(todos);
}

getFromLocalStorage();

todoItemsList.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-button')) {
        deleteTodo(event.target.parentElement.getAttribute('data-key'));
    }
});