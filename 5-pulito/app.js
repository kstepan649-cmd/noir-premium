[Reading 22 lines from start (total: 22 lines, 0 remaining)]

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
  value.classList.remove('bump');
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) { requestAnimationFrame(() => { value.classList.add('bump'); setTimeout(() => value.classList.remove('bump'), 280); }); }
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