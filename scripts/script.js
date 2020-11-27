let message = document.querySelector('p');
let form = document.querySelector('.form-menu');
let email = document.querySelector('#subscription-email')
form.onsubmit = function(evt) {
  // Инструкция ниже отменяет отправку данных
  evt.preventDefault();
  
  message.textContent = 'Адрес ' + email.value + ' добавлен в список получателей рассылки.';
  console.log(message.textContent)
};
