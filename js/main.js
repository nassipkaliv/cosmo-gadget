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



  document.getElementById('callbackForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const inputs = document.querySelectorAll('.form-control');
    let isValid = true;

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        input.classList.add('error'); 
        isValid = false;
      } else {
        input.classList.remove('error'); 
      }
    });

    if (isValid) {
      alert('Форма успешно отправлена!');
    }
  });
  

document.getElementById("d-click").addEventListener("click", function () {
  const dropdown = document.querySelector(".dropdown");
  const dropClicks = document.querySelectorAll(".drop-click");
  const dClick = document.querySelector(".d-click");

  if (window.getComputedStyle(dropdown).display === "none" || dropdown.style.display === "") {
    dropdown.style.display = "flex"; 

    dropClicks.forEach((dropClick) => {
      dropClick.style.display = "none";
    });
  } else {
    dropdown.style.display = "none"; 
    dClick.style.display = "none"; 

    dropClicks.forEach((dropClick) => {
      dropClick.style.display = "flex";
    });
  }
});

document.getElementById("dropdown-right-back").addEventListener("click", function () {
  const dropdown = document.querySelector(".dropdown");
  const dropClicks = document.querySelectorAll(".drop-click");
  const dClick = document.querySelector(".d-click");

  dropdown.style.display = "none";
  dropClicks.forEach((dropClick) => {
    dropClick.style.display = "none"; 
    dropdown.style.display = "flex";
  });
  dClick.style.display = "flex";
  console.log("Restored to initial state");
});


document.addEventListener('DOMContentLoaded', function () {
  const filterMenu = document.querySelector('.filterMenu');
  const triggerPoint = 300; 

  window.addEventListener('scroll', () => {
      if (window.scrollY > triggerPoint) {
          filterMenu.classList.add('active');
      } else {
          filterMenu.classList.remove('active');
      }
  });
});


// Handle collapse events
document.querySelectorAll('.tovar-question').forEach((question) => {
  question.addEventListener('show.bs.collapse', function (e) {
      const button = question.querySelector('.tovar-question-btn');
      const svg = button.querySelector('svg');

      // Change background color
      button.style.background = '#8306a1';

      // Replace SVG with "collapse" version
      svg.outerHTML = `
      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.7508 0.788658C11.6711 0.697192 11.5763 0.624593 11.4719 0.57505C11.3674 0.525507 11.2554 0.5 11.1423 0.5C11.0291 0.5 10.9171 0.525507 10.8127 0.57505C10.7082 0.624593 10.6134 0.697192 10.5338 0.788658L6.6085 5.2581C6.52883 5.34956 6.43404 5.42216 6.3296 5.4717C6.22516 5.52125 6.11314 5.54676 6 5.54676C5.88686 5.54676 5.77484 5.52125 5.6704 5.4717C5.56596 5.42216 5.47117 5.34956 5.3915 5.2581L1.46623 0.788658C1.38655 0.697192 1.29176 0.624593 1.18732 0.57505C1.08289 0.525507 0.970865 0.5 0.857725 0.5C0.744585 0.5 0.632564 0.525507 0.528125 0.57505C0.423686 0.624593 0.328896 0.697192 0.249222 0.788658C0.0895969 0.971497 0 1.21883 0 1.47664C0 1.73445 0.0895969 1.98178 0.249222 2.16462L4.18306 6.64382C4.66515 7.19206 5.31865 7.5 6 7.5C6.68135 7.5 7.33485 7.19206 7.81694 6.64382L11.7508 2.16462C11.9104 1.98178 12 1.73445 12 1.47664C12 1.21883 11.9104 0.971497 11.7508 0.788658Z" fill="white"/>
      </svg>`;
  });

  question.addEventListener('hide.bs.collapse', function (e) {
      const button = question.querySelector('.tovar-question-btn');
      const svg = button.querySelector('svg');

      // Reset background color
      button.style.background = '';

      // Replace SVG with "expand" version
      svg.outerHTML = `
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4.96932V7.03067H7.21543V12H4.78457V7.03067H0V4.96932H4.78457V0H7.21543V4.96932H12Z" fill="white"/>
      </svg>`;
  });
});


document.querySelectorAll('.tovar-question').forEach((question) => {
  // On collapse show event
  question.addEventListener('show.bs.collapse', function () {
    const button = question.querySelector('.tovar-question-btn');
    const svg = button.querySelector('svg');

    // Change button background color
    button.style.background = '#8306a1';

    // Replace SVG with the "collapse" version
    svg.outerHTML = `
      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.7508 0.788658C11.6711 0.697192 11.5763 0.624593 11.4719 0.57505C11.3674 0.525507 11.2554 0.5 11.1423 0.5C11.0291 0.5 10.9171 0.525507 10.8127 0.57505C10.7082 0.624593 10.6134 0.697192 10.5338 0.788658L6.6085 5.2581C6.52883 5.34956 6.43404 5.42216 6.3296 5.4717C6.22516 5.52125 6.11314 5.54676 6 5.54676C5.88686 5.54676 5.77484 5.52125 5.6704 5.4717C5.56596 5.42216 5.47117 5.34956 5.3915 5.2581L1.46623 0.788658C1.38655 0.697192 1.29176 0.624593 1.18732 0.57505C1.08289 0.525507 0.970865 0.5 0.857725 0.5C0.744585 0.5 0.632564 0.525507 0.528125 0.57505C0.423686 0.624593 0.328896 0.697192 0.249222 0.788658C0.0895969 0.971497 0 1.21883 0 1.47664C0 1.73445 0.0895969 1.98178 0.249222 2.16462L4.18306 6.64382C4.66515 7.19206 5.31865 7.5 6 7.5C6.68135 7.5 7.33485 7.19206 7.81694 6.64382L11.7508 2.16462C11.9104 1.98178 12 1.73445 12 1.47664C12 1.21883 11.9104 0.971497 11.7508 0.788658Z" fill="white"/>
      </svg>`;
  });

  // On collapse hide event
  question.addEventListener('hide.bs.collapse', function () {
    const button = question.querySelector('.tovar-question-btn');
    const svg = button.querySelector('svg');

    // Reset button background color
    button.style.background = '';

    // Replace SVG with the "expand" version
    svg.outerHTML = `
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4.96932V7.03067H7.21543V12H4.78457V7.03067H0V4.96932H4.78457V0H7.21543V4.96932H12Z" fill="white"/>
      </svg>`;
  });
});
