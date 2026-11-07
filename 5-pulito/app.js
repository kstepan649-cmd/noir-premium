const rooms = document.querySelector('#rooms');
const extras = [...document.querySelectorAll('.check input')];
const value = document.querySelector('#estimateValue');
const text = document.querySelector('#estimateText');
function updateEstimate() {
  const roomCount = Number(rooms.value);
  const selected = extras.filter((item) => item.checked);
  const extrasTotal = selected.reduce((sum,item) => sum + Number(item.value),0);
  const total = 42 + roomCount * 18 + extrasTotal;
  value.textContent = '€' + total;
  const labels = selected.map((item) => item.dataset.name);
  text.textContent = roomCount + (roomCount === 1 ? ' комната' : ' комнаты') + (labels.length ? ' · ' + labels.join(', ') : ' · базовая уборка');
}
rooms.addEventListener('change', updateEstimate);
extras.forEach((item) => item.addEventListener('change', updateEstimate));
updateEstimate();
document.querySelector('#requestForm').addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#requestStatus').textContent = 'Форма проверена. Для реальных заявок подключите почту или CRM.';
});