const menuData = {
  starter: [
    ['Брускетта с томатами','Хлеб на закваске, томаты, базилик','€8'],
    ['Буррата','Печёный перец, зелень, оливковое масло','€13'],
    ['Оливки и фокачча','Маринованные оливки, тёплая фокачча','€7'],
    ['Карпаччо из свёклы','Цитрусовая заправка, фундук','€10']
  ],
  pasta: [
    ['Тальятелле рагу','Томлёная говядина, пармезан','€17'],
    ['Спагетти ал лимоне','Лимон, сливочное масло, пекорино','€15'],
    ['Равиоли со шпинатом','Рикотта, шалфей, масло','€16'],
    ['Паппарделле с грибами','Лесные грибы, тимьян','€18']
  ],
  dessert: [
    ['Тирамису','Маскарпоне, кофе, какао','€8'],
    ['Панна-котта','Ваниль, сезонные ягоды','€7'],
    ['Канноли','Рикотта, апельсиновая цедра','€6'],
    ['Эспрессо и бискотти','Два печенья с миндалём','€5']
  ]
};
const menuItems = document.querySelector('#menuItems');
function renderMenu(key) {
  menuItems.innerHTML = menuData[key].map(([name,description,price]) =>
    '<article class="dish"><div><h3>'+name+'</h3><p>'+description+'</p></div><b>'+price+'</b></article>'
  ).join('');
}
document.querySelectorAll('.tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach((item) => item.classList.toggle('is-active', item === tab));
    renderMenu(tab.dataset.menu);
  });
});
renderMenu('starter');
const date = document.querySelector('#reserveDate');
date.min = new Date().toISOString().slice(0,10);
document.querySelector('#reserveForm').addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#reserveStatus').textContent = 'Демонстрация: бронь не создана. Подключите форму к системе бронирования.';
});