// Selectors
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Event Listeners
todoForm.addEventListener('submit', addTodo);
todoList.addEventListener('click', handleTodoClick);

// Functions
function addTodo(event) {
  event.preventDefault();

  // Get input value
  const task = todoInput.value;

  // Create a new list item
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <span>${task}</span>
    <div>
      <button class="complete">✔</button>
      <button class="delete">✖</button>
    </div>
  `;

  // Add the new task to the list
  todoList.appendChild(listItem);

  // Clear the input field
  todoInput.value = '';
}

function handleTodoClick(event) {
  const target = event.target;
  const listItem = target.closest('li');

  // Mark as complete
  if (target.classList.contains('complete')) {
    const task = listItem.querySelector('span');
    task.classList.toggle('completed');
  }

  // Delete task
  if (target.classList.contains('delete')) {
    listItem.remove();
  }
}

