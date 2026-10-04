const $ = (selector) => document.querySelector(selector);

$('#guest-button').addEventListener('click', () => {
  $('#phone-view').hidden = true;
  $('#success-view').hidden = false;
  $('#done-button').focus();
});
$('#done-button').addEventListener('click', () => { $('#done-note').hidden = false; });

const dialogContent = {
  help: ['Поможем подключиться', '<p>Подключитесь к гостевой сети в настройках Wi-Fi вашего устройства. На этой странице не нужно вводить номер телефона или код.</p><p>Если интернет недоступен, обратитесь к сотруднику площадки: доступ к сети задаётся на роутере.</p>'],
  privacy: ['Ваши данные', '<p>Эта страница не запрашивает номер телефона, не отправляет SMS и не сохраняет персональные данные в браузере.</p>']
};
document.querySelectorAll('[data-dialog]').forEach((button) => button.addEventListener('click', () => {
  const [title, body] = dialogContent[button.dataset.dialog];
  $('#dialog-title').textContent = title;
  $('#dialog-body').innerHTML = body;
  $('#info-dialog').showModal();
}));
document.querySelectorAll('.close-dialog').forEach((button) => button.addEventListener('click', () => $('#info-dialog').close()));
$('#info-dialog').addEventListener('click', (event) => {
  if (event.target !== $('#info-dialog')) return;
  const box = event.target.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) event.target.close();
});
