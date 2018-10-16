const addItems = document.querySelector('.add-items');
const deleteItem = document.querySelector('.delete-button');
const itemsList = document.querySelector('.plates');
const checkAll = document.querySelector('.button-check')
const uncheckAll = document.querySelector('.button-uncheck')
const clearAll = document.querySelector('.button-clear ')
let items = JSON.parse(localStorage.getItem('items')) || [];

function disableButtons() {
  const buttons = document.querySelectorAll('.button-all');
  buttons.forEach(button => {
    if (items.length === 0) {
      button.disabled = true;
      button.classList.add('disabled');
    } else {
      button.disabled = false;
      button.classList.remove('disabled');
    }
  });
}

function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  disableButtons();
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
        <label for="item${i}">${plate.text}</label>
        <input type="button" class="delete-button" value="x" onClick="deleteElement(${i})">
      </li>
    `;
  }).join('');
}

function toggleDone(e) {
  if (e.target.type !== 'checkbox') return;
  const index = e.target.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function deleteElement(i) {
  items.splice(i, 1);
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function hancleClear() {
  if (confirm('Are you sure?')) {
    items = [];
    itemsList.innerHTML = '';
    populateList(items, itemsList);
    localStorage.clear();
  }
}

function handleChecks() {
  items.map(item => {
    item.done = true
  });
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function handleUnchecks() {
  items.map(item => {
    item.done = false
  });
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
checkAll.addEventListener('click', handleChecks);
uncheckAll.addEventListener('click', handleUnchecks);
clearAll.addEventListener('click', hancleClear);


populateList(items, itemsList);

// Disable new buttons when list is empty