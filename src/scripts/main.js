'use strict';

// write code here

const rowAppended = document.querySelector('.append-row');
const rowRemover = document.querySelector('.remove-row');
const columnAppended = document.querySelector('.append-column');
const columnRemover = document.querySelector('.remove-column');
const field = document.querySelector('.field');

function updateButtonStates() {
  const trs = field.querySelectorAll('tr');
  const tds = trs[0] ? trs[0].children : [];

  rowAppended.disabled = trs.length >= 10;

  rowRemover.disabled = trs.length <= 2;

  columnAppended.disabled = tds.length >= 10;

  columnRemover.disabled = tds.length <= 2;
}

updateButtonStates();

rowAppended.addEventListener('click', (e) => {
  const trs = document.querySelectorAll('tr');

  if (trs.length < 10) {
    const trCopy = field.querySelector('tr').cloneNode(true);

    field.append(trCopy);
    updateButtonStates();
  }
});

rowRemover.addEventListener('click', (e) => {
  const trs = document.querySelectorAll('tr');

  if (trs.length > 2 && field.lastElementChild) {
    field.lastElementChild.remove();
    updateButtonStates();
  }
});

columnAppended.addEventListener('click', (e) => {
  const trs = field.querySelectorAll('tr');

  trs.forEach((tr) => {
    if (tr.children.length < 10) {
      const td = document.createElement('td');

      tr.append(td);
    }
  });
  updateButtonStates();
});

columnRemover.addEventListener('click', (e) => {
  const trs = field.querySelectorAll('tr');

  trs.forEach((tr) => {
    if (tr.children.length > 2 && tr.lastElementChild) {
      tr.lastElementChild.remove();
    }
  });
  updateButtonStates();
});
