document.querySelectorAll('.tovar-colour').forEach(button => {
  button.addEventListener('click', () => {
      document.querySelectorAll('.tovar-colour').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
  });
});

document.querySelectorAll('.detail-btn').forEach(button => {
  button.addEventListener('click', () => {
      document.querySelectorAll('.detail-btn').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
  });
});

document.querySelectorAll('.detail-ozu-btn').forEach(button => {
  button.addEventListener('click', () => {
      document.querySelectorAll('.detail-ozu-btn').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
  });
});

document.querySelectorAll('.detail-display-btn').forEach(button => {
  button.addEventListener('click', () => {
      document.querySelectorAll('.detail-display-btn').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const tovarCard = document.querySelector('.tovar-card');

  if (tovarCard) { // Проверяем, что элемент существует
    tovarCard.addEventListener('click', function () {
      const defaultIcon = this.querySelector('.default-icon');
      const activeIcon = this.querySelector('.active-like-icon');
      const compIcon = this.querySelector('.tovar-card-comp');

      if (defaultIcon.style.display === 'none') {
        defaultIcon.style.display = 'block';
        compIcon.style.display = 'block';
        activeIcon.style.display = 'none';
      } else {
        defaultIcon.style.display = 'none';
        compIcon.style.display = 'none';
        activeIcon.style.display = 'block';
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const tovarCardSvg = document.querySelector('.tovar-card-svg');

  if (tovarCardSvg) { // Проверяем, что элемент существует
    tovarCardSvg.addEventListener('click', function () {
      this.style.visibility = 'hidden';

      const vkorzineBlock = document.querySelector('.tovar-card-vkorzine');
      if (vkorzineBlock) { // Проверяем, что vkorzineBlock существует
        vkorzineBlock.style.visibility = 'visible';
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const deleteButtons = document.querySelectorAll('.izbrannoe-delete');

  deleteButtons.forEach(button => {
    button.addEventListener('click', function () {
      const item = this.closest('.izbrannoe-item');
      item.remove(); // Удаляем элемент

      // Проверяем, есть ли еще элементы .izbrannoe-item
      const remainingItems = document.querySelectorAll('.izbrannoe-item');
      const emptyMessage = document.querySelector('.empty-message');

      if (remainingItems.length === 0) {
        emptyMessage.style.display = 'block'; 
      } else {
        emptyMessage.style.display = 'none'; 
      }
    });
  });
});