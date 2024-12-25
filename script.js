const heart = document.getElementById('heart');
const popup = document.getElementById('popup');

heart.addEventListener('click', () => {
  // Увеличиваем сердце
  heart.classList.toggle('active');

  // Показываем всплывающее сообщение
  if (heart.classList.contains('active')) {
    popup.style.display = 'block';

    // Убираем всплывающее сообщение через 2 секунды
    setTimeout(() => {
      popup.style.display = 'none';
    }, 5000);
  }
});
