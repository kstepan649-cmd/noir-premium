[Reading 24 lines from start (total: 24 lines, 0 remaining)]

const filters = [...document.querySelectorAll('.filter')];
const products = [...document.querySelectorAll('.product-row')];
filters.forEach((button) => {
  button.addEventListener('click', () => {
    filters.forEach((item) => item.classList.toggle('is-active', item === button));
    const key = button.dataset.filter;
    products.forEach((row) => {
      row.hidden = key !== 'all' && row.dataset.kind !== key;
      if (!row.hidden) { row.classList.remove('filter-arrive'); void row.offsetWidth; row.classList.add('filter-arrive'); }
    });
  });
});
const machineSelect = document.querySelector('#machine');
document.querySelectorAll('[data-product]').forEach((button) => {
  button.addEventListener('click', () => {
    machineSelect.value = button.dataset.product;
    document.querySelector('#contacts').scrollIntoView({behavior:'smooth'});
    machineSelect.focus({preventScroll:true});
  });
});
document.querySelector('#quoteForm').addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#formStatus').textContent = 'Заявка проверена в демо-режиме. Подключите почту или CRM перед публикацией.';
});