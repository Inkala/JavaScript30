const addItems = document.querySelector('.add-items');
const deleteItem = document.querySelector('.delete-button');
const itemsList = document.querySelector('.plates');
const checkAll = document.querySelector('.button-check')
const clearAll = document.querySelector('.button-clear ')
let items = JSON.parse(localStorage.getItem('items')) || [];

// if (items.length === 0) {
//   console.log(items)
//   const buttons = document.querySelectorAll('.button-all');
//   buttons.forEach(button => button.disabled = true);
// }

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

function handleChecks() {
  console.log('handleChecks clicked!');
}

function hancleClear() {
  if (confirm('Are you sure?')) {
    items = [];
    itemsList.innerHTML = '';
    populateList(items, itemsList);
    localStorage.clear();
  }
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
checkAll.addEventListener('click', handleChecks);
clearAll.addEventListener('click', hancleClear);


populateList(items, itemsList);

// Create a button to check and uncheck all
// Disable new buttons when list is empty