// JSON данные для отправки
var data = {
    username: 'user',
    password: '123456'
  };
  
  // Создаем новый объект XMLHttpRequest
  var xhr = new XMLHttpRequest();
  
  // Настраиваем запрос POST на URL API, где вы хотите отправить данные
  xhr.open('POST', 'http://makarovv25.pythonanywhere.com/api/token/', true);
  
  // Устанавливаем заголовок Content-Type для отправки JSON данных
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  
  // Назначаем обработчик события при успешном завершении запроса
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      // Запрос успешно завершен, данные доступны в xhr.responseText
      var response = JSON.parse(xhr.responseText);
      console.log('JWT Token (access):', response.access);
    } else {
      // В случае ошибки выводим сообщение
      console.error('Ошибка при выполнении запроса: ' + xhr.status);
    }
  };
  
  // Назначаем обработчик события при ошибке запроса
  xhr.onerror = function() {
    console.error('Произошла ошибка сети');
  };
  
  // Отправляем JSON данные в виде строки
  xhr.send(JSON.stringify(data));
  