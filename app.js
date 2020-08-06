const list = document.querySelector('.todo');
const todoList = document.querySelector('.add-todo');

list.addEventListener('click', (e) => {
	//marcar concluido ou não
	if (e.target.classList.contains('check')) {
		e.target.classList.toggle('fa-circle');
		e.target.classList.toggle('fa-check-circle');
		e.target.nextElementSibling.classList.toggle('completed');
	}

	//excluir
	if (e.target.classList.contains('delete')) {
		e.target.parentElement.remove();
	}
});

//Adicionar novo Todo
const newTodo = (todo) => {
	const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <i class="far fa-circle check"></i>
        <span class="">${todo}</span>
        <i class="fas fa-trash delete"></i>
    </li>
    `;

	list.innerHTML += html;
};

todoList.addEventListener('submit', (e) => {
	e.preventDefault();
	const todo = todoList.add.value.trim();
	if (todo.length) {
		newTodo(todo);
		todoList.reset();
	}
});
