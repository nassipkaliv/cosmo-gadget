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

document.querySelectorAll('.sravnenya-btn').forEach(button => {
  button.addEventListener('click', () => {
      document.querySelectorAll('.sravnenya-btn').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const itemCounters = document.querySelectorAll('.item-counter');

  itemCounters.forEach((counter) => {
      const decreaseBtn = counter.querySelector('.decrease');
      const increaseBtn = counter.querySelector('.increase');
      const counterValue = counter.querySelector('.counter-value');
      const pricePerUnit = counter.closest('.izbrannoe-item-second').querySelector('.price-per-unit');

      function updatePrice() {
          const quantity = parseInt(counterValue.value, 10) || 1;
          const unitPrice = parseInt(pricePerUnit.dataset.price, 10);
          const totalPrice = quantity * unitPrice;
          pricePerUnit.textContent = totalPrice.toLocaleString(); // Formats with thousands separator
      }

      decreaseBtn.addEventListener('click', () => {
          let value = parseInt(counterValue.value, 10) || 1;
          if (value > 1) {
              counterValue.value = value - 1;
              updatePrice();
          }
      });

      increaseBtn.addEventListener('click', () => {
          let value = parseInt(counterValue.value, 10) || 1;
          counterValue.value = value + 1;
          updatePrice();
      });

      counterValue.addEventListener('input', () => {
          let value = parseInt(counterValue.value, 10);
          if (isNaN(value) || value < 1) {
              counterValue.value = 1;
          }
          updatePrice();
      });
  });
});


document.querySelectorAll('.tovar-question').forEach((question) => {
  const content = question.querySelector('.collapse-content');

  question.addEventListener('click', (e) => {
      const isExpanded = question.getAttribute('aria-expanded') === 'true';

      if (isExpanded) {
          // Collapse
          question.setAttribute('aria-expanded', false);
          content.style.height = `${content.scrollHeight}px`; // Set height explicitly to allow transition
          requestAnimationFrame(() => {
              content.style.height = '0'; // Set height to 0 for collapsing
          });
          content.classList.remove('show');
      } else {
          // Expand
          question.setAttribute('aria-expanded', true);
          content.style.height = '0'; // Set initial height for transition
          content.classList.add('show');
          requestAnimationFrame(() => {
              content.style.height = `${content.scrollHeight}px`; // Expand to full height
          });

          // Reset height to "auto" after the transition ends
          content.addEventListener(
              'transitionend',
              () => {
                  if (question.getAttribute('aria-expanded') === 'true') {
                      content.style.height = 'auto';
                  }
              },
              { once: true }
          );
      }
  });

  question.querySelectorAll('.sravnenya-btn').forEach((button) => {
      button.addEventListener('click', (e) => {
          e.stopPropagation();
      });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.dropItem').forEach((dropItem) => {
    dropItem.addEventListener('click', () => {
      const dropContent = dropItem.nextElementSibling;
      const arrowIcon = dropItem.querySelector('.arrow-icon');

      if (dropContent) {
        dropContent.classList.toggle('open');
        arrowIcon.classList.toggle('rotated');
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const editBtn = document.getElementById("editBtn");
  const editableContent = document.getElementById("editableContent");

  editableContent.style.display = "none";

  editBtn.addEventListener("click", (event) => {
    event.preventDefault(); 
    editableContent.style.display = "block"; 
    editBtn.style.display = "none"; 
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('#carouselExampleFade');
  const verticalNavBlocks = document.querySelectorAll('.verticalNavBlock');

  if (carousel && verticalNavBlocks.length) {
      const carouselInstance = new bootstrap.Carousel(carousel);

      carousel.addEventListener('slid.bs.carousel', () => {
          const activeSlideIndex = Array.from(carousel.querySelectorAll('.carousel-item')).findIndex((item) =>
              item.classList.contains('active')
          );

          verticalNavBlocks.forEach((block, index) => {
              block.classList.toggle('active', index === activeSlideIndex);
          });
      });

      verticalNavBlocks.forEach((block, index) => {
          block.addEventListener('click', () => {
              verticalNavBlocks.forEach((b) => b.classList.remove('active'));

              block.classList.add('active');

              carouselInstance.to(index);
          });
      });
  }
});
