// Задание 1
const select = document.getElementById('musicGenre');
const selectOutput = document.getElementById('selectOutput');

// Выводим текущее значение
selectOutput.innerHTML = `
    Текущее значение: ${select.value}<br>
    Текущий текст: ${select.options[select.selectedIndex].text}
`;

// Добавляем новую опцию и выбираем её
const newOption = new Option('Классика', 'Classic');
select.add(newOption);
select.value = 'Classic';
selectOutput.innerHTML += `<br>Добавлена опция "Классика" и выбрана`;

// Задание 2
const input = document.getElementById('placeholderInput');
const hint = document.createElement('div');
hint.className = 'hint';
input.parentNode.insertBefore(hint, input.nextSibling);

input.addEventListener('focus', () => {
    if (input.value === input.dataset.placeholder) {
        input.value = '';
        input.classList.remove('placeholder');
    }
    hint.textContent = input.dataset.placeholder;
});

input.addEventListener('blur', () => {
    hint.textContent = '';
    if (input.value === '') {
        input.value = input.dataset.placeholder;
        input.classList.add('placeholder');
    }
});

// Инициализация
input.value = input.dataset.placeholder;

// Задание 3
const div = document.getElementById('editableDiv');
let textarea;

document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'e') {
        e.preventDefault();
        textarea = document.createElement('textarea');
        textarea.value = div.textContent;
        textarea.style.width = '300px';
        textarea.style.height = '100px';
        div.replaceWith(textarea);
        textarea.focus();
    } else if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        if (textarea) {
            div.textContent = textarea.value;
            textarea.replaceWith(div);
        }
    } else if (e.key === 'Escape') {
        if (textarea) {
            textarea.replaceWith(div);
        }
    }
});

// Задание 4
const table = document.getElementById('editableTable');
let activeCell = null;

table.addEventListener('click', (e) => {
    const td = e.target.closest('td');
    if (!td || activeCell) return;

    activeCell = td;
    const text = td.textContent;
    const textarea = document.createElement('textarea');
    textarea.value = text;
    td.innerHTML = '';
    td.appendChild(textarea);

    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'edit-buttons';

    const okBtn = document.createElement('button');
    okBtn.textContent = 'OK';
    okBtn.addEventListener('click', () => {
        td.innerHTML = textarea.value;
        activeCell = null;
    });

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'ОТМЕНА';
    cancelBtn.addEventListener('click', () => {
        td.textContent = text;
        activeCell = null;
    });

    buttonsDiv.appendChild(okBtn);
    buttonsDiv.appendChild(cancelBtn);
    td.appendChild(buttonsDiv);
});

// Задание 5
const showPromptBtn = document.getElementById('showPromptBtn');
const promptModal = document.getElementById('promptModal');
const promptMessage = document.getElementById('promptMessage');
const promptInput = document.getElementById('promptInput');
const promptOkBtn = document.getElementById('promptOkBtn');
const promptCancelBtn = document.getElementById('promptCancelBtn');
const promptResult = document.getElementById('promptResult');

function showPrompt(html, callback) {
    promptMessage.innerHTML = html;
    promptInput.value = '';
    promptModal.style.display = 'flex';
    promptInput.focus();

    function handleSubmit(value) {
        promptModal.style.display = 'none';
        callback(value);
    }

    promptOkBtn.onclick = () => handleSubmit(promptInput.value);
    promptCancelBtn.onclick = () => handleSubmit(null);
    
    promptInput.onkeydown = (e) => {
        if (e.key === 'Enter') handleSubmit(promptInput.value);
        if (e.key === 'Escape') handleSubmit(null);
    };
}

showPromptBtn.addEventListener('click', () => {
    showPrompt("Введите что-нибудь<br>... умное :)", (value) => {
        promptResult.textContent = value !== null 
            ? `Вы ввели: ${value}` 
            : 'Вы отменили ввод';
    });
});