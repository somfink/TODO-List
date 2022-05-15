window.addEventListener('load', () => {
    const form = document.querySelector('#task-form');
    const input = document.querySelector('#task-input');
    const listEl = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        // WHEN INPUT IS EMPTY, DISPLAY ALERT
        if (!task) {
            alert('Please fill out the task');
            return;
        }

        // LOGIC WITH CREATE READONLY INPUT AND ALL ELEMETNTS
        const taskEl = document.createElement('div');
        taskEl.classList.add('task');

        const taskContentEl = document.createElement('div');
        taskContentEl.classList.add('content');

        taskEl.appendChild(taskContentEl);

        const taskInputEl = document.createElement('input');
        taskInputEl.classList.add('text');
        taskInputEl.type = 'text';
        taskInputEl.value = task;
        taskInputEl.setAttribute('readonly', 'readonly');

        taskContentEl.appendChild(taskInputEl);

        const taskActionEl = document.createElement('div');
        taskActionEl.classList.add('actions');

        // CREATE "EDIT" BTN
        const taskEditEl = document.createElement('button');
        taskEditEl.classList.add('edit');
        taskEditEl.innerHTML = 'Edit';

        // CREATE "DELETE" BTN
        const taskDeleteEl = document.createElement('button');
        taskDeleteEl.classList.add('delete');
        taskDeleteEl.innerHTML = 'Delete';

        taskActionEl.appendChild(taskEditEl);
        taskActionEl.appendChild(taskDeleteEl);

        taskEl.appendChild(taskActionEl);
        listEl.appendChild(taskEl);

        input.value = '';

        const editBtnEl = document.querySelector('.edit');

        // AFTER CLICK "EDIT" BTN IT CHANGE VALUE TO "SAVE", THAN FOCUS ON INPUT, 
        // CAN CHANGE INPUT VALUE, AND THAN YOU MUST SAVE IT AFTER CLICK "SAVE" BTN
        taskEditEl.addEventListener('click', () => {
            if (taskEditEl.innerText.toLowerCase() === 'edit') {
                taskInputEl.removeAttribute('readonly');
                taskInputEl.focus();
                taskEditEl.innerText = 'Save';
            } else {
                taskInputEl.setAttribute('readonly', 'readonly');
                taskEditEl.innerText = 'Edit';
                editBtnEl.removeAttribute('style');
            }
        });

        // DELETE INPUT AFTER CLICK "DELETE" BTN
        taskDeleteEl.addEventListener('click', () => {
            listEl.removeChild(taskEl);
        });
    });
});