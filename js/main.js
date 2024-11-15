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