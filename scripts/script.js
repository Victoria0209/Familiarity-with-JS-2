let message = document.querySelector('p');
let form = document.querySelector('.form-menu');
form.onsubmit = function(evt) {
  // Инструкция ниже отменяет отправку данных
  evt.preventDefault();
  console.log(message)
  message.textContent = 'Подписка оформлена';
};
