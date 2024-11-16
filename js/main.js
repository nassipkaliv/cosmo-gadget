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

document.querySelector('.tovar-card').addEventListener('click', function () {
  const defaultIcon = this.querySelector('.default-icon');
  const activeIcon = this.querySelector('.active-like-icon');
  const compIcon = this.querySelector('.tovar-card-comp')


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

document.querySelector('.tovar-card-svg').addEventListener('click', function () {
  this.style.visibility = 'hidden';

  const vkorzineBlock = document.querySelector('.tovar-card-vkorzine');
  vkorzineBlock.style.visibility = 'visible';
});