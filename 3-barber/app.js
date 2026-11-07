const dateField = document.querySelector('#bookingDate');
dateField.min = new Date().toISOString().slice(0,10);
document.querySelector('#bookingForm').addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#bookingStatus').textContent = 'Это демонстрация: для реальной записи нужно подключить календарь или CRM.';
});