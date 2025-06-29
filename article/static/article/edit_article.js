/**
 * Простая функция для редактирования статьи через fetch POST
 * Получает данные из формы и отправляет на сервер
 */

function editArticle(articleId) {
    // Получаем данные из формы
    let titleInput = document.getElementById('title_' + articleId);
    let textInput = document.getElementById('text_' + articleId);
    
    let newTitle = titleInput.value;
    let newText = textInput.value;
    
    console.log('Редактирую статью:', articleId);
    console.log('Новый заголовок:', newTitle);
    console.log('Новый текст:', newText);
    
    // Получаем CSRF токен из cookie
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    
    let csrftoken = getCookie('csrftoken');
    
    // Создаем данные для отправки
    let formData = new FormData();
    formData.append('article_id', articleId);
    formData.append('title', newTitle);
    formData.append('text', newText);
    
    // Отправляем запрос на сервер
    fetch('edit/', {
        method: 'POST',
        body: formData,
        headers: {
            'X-CSRFToken': csrftoken,
        }
    })
    .then((response) => {
        console.log('Получил ответ от сервера');
        return response.json();
    })
    .then((data) => {
        console.log('Данные от сервера:', data);
        if (data.status === 'success') {
            alert('Статья успешно отредактирована!');
            // Перезагружаем страницу чтобы показать обновленные данные
            location.reload();
        } else {
            alert('Ошибка: ' + data.message);
        }
    })
    .catch((error) => {
        console.error('Ошибка при отправке:', error);
        alert('Произошла ошибка при редактировании!');
    });
}

function showEditForm(articleId) {
    // Скрываем обычное отображение
    document.getElementById('article_' + articleId).style.display = 'none';
    // Показываем форму редактирования
    document.getElementById('edit_form_' + articleId).style.display = 'block';
}

function showArticle(articleId) {
    // Показываем обычное отображение
    document.getElementById('article_' + articleId).style.display = 'block';
    // Скрываем форму редактирования
    document.getElementById('edit_form_' + articleId).style.display = 'none';
} 