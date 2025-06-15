const select = document.getElementById('music-genre');

console.log('Значение:', select.value);
console.log('Текст:', select.options[select.selectedIndex].text);

const newOption = new Option('Классика', 'Classic');
select.add(newOption);
select.value = 'Classic';

select.dataset.placeholder = 'Выберите жанр';
select.classList.add('placeholder');

select.addEventListener('focus', () => {
  if (select.classList.contains('placeholder')) {
    select.classList.remove('placeholder');
  }
});

select.addEventListener('blur', () => {
  if (select.value === '') {
    select.classList.add('placeholder');
  }
});

const div = document.getElementById('editable-div');
let textarea;

document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'e') {
    e.preventDefault();
    textarea = document.createElement('textarea');
    textarea.value = div.innerHTML;
    div.replaceWith(textarea);
    textarea.focus();
  } else if (e.ctrlKey && e.key === 's') {
    e.preventDefault();
    if (textarea) {
      div.innerHTML = textarea.value;
      textarea.replaceWith(div);
    }
  } else if (e.key === 'Escape') {
    if (textarea) {
      textarea.replaceWith(div);
    }
  }
});

const table = document.getElementById('editable-table');
let activeCell = null;

table.addEventListener('click', (e) => {
  const cell = e.target.closest('td');
  if (!cell || activeCell) return;

  activeCell = cell;
  const originalContent = cell.innerHTML;

  const textarea = document.createElement('textarea');
  textarea.value = originalContent;
  textarea.style.width = '100%';
  textarea.style.height = '60px';
  textarea.style.resize = 'none';

  const buttonsDiv = document.createElement('div');
  buttonsDiv.style.marginTop = '5px';

  const okButton = document.createElement('button');
  okButton.textContent = 'OK';
  okButton.style.marginRight = '5px';

  const cancelButton = document.createElement('button');
  cancelButton.textContent = 'ОТМЕНА';

  buttonsDiv.append(okButton, cancelButton);
  cell.innerHTML = '';
  cell.append(textarea, buttonsDiv);
  textarea.focus();

  okButton.addEventListener('click', () => {
    cell.innerHTML = textarea.value;
    activeCell = null;
  });

  cancelButton.addEventListener('click', () => {
    cell.innerHTML = originalContent;
    activeCell = null;
  });
});

function showPrompt(html, callback) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';

  const form = document.createElement('div');
  form.className = 'modal-content';
  form.innerHTML = `
    <div>${html}</div>
    <input type="text" id="prompt-input">
    <div class="modal-buttons">
      <button id="ok-button">OK</button>
      <button id="cancel-button">ОТМЕНА</button>
    </div>
  `;

  overlay.appendChild(form);
  document.body.appendChild(overlay);

  const input = document.getElementById('prompt-input');
  const okButton = document.getElementById('ok-button');
  const cancelButton = document.getElementById('cancel-button');

  input.focus();

  okButton.addEventListener('click', () => {
    callback(input.value);
    overlay.remove();
  });

  cancelButton.addEventListener('click', () => {
    callback(null);
    overlay.remove();
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      callback(input.value);
      overlay.remove();
    } else if (e.key === 'Escape') {
      callback(null);
      overlay.remove();
    }
  });
}

document.getElementById('show-prompt-button').addEventListener('click', () => {
  showPrompt("Введите что-нибудь<br>... умное :)", (value) => {
    alert(value || 'Отменено');
  });
});