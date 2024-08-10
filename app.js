document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('new-task-form');
    const taskInput = document.getElementById('new-task-input');
    const taskList = document.getElementById('tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskValue = taskInput.value.trim();
        if (taskValue) {
            addTask(taskValue);
            taskInput.value = '';
        }
    });

    function addTask(value) {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskDiv.innerHTML = `
            <div class="content">
                <input type="text" class="text" value="${value}" readonly>
            </div>
            <div class="actions">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        `;

        const editButton = taskDiv.querySelector('.edit');
        const deleteButton = taskDiv.querySelector('.delete');

        editButton.addEventListener('click', () => {
            const input = taskDiv.querySelector('.text');
            input.removeAttribute('readonly');
            input.focus();
            input.addEventListener('blur', () => {
                input.setAttribute('readonly', 'true');
            });
        });

        deleteButton.addEventListener('click', () => {
            taskDiv.classList.add('fade-out');
            setTimeout(() => taskList.removeChild(taskDiv), 300); // Remove after fade-out
        });

        taskList.appendChild(taskDiv);
    }
});
