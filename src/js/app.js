/*
(i) Код потрапляє у підсумковий файл,
тільки коли викликана функція,
наприклад flsFunctions.spollers();
Або коли імпортовано весь файл,
наприклад, import "files/script.js";
Невикористовуваний (не викликаний)
код у підсумковий файл не потрапляє.

Якщо ми хочемо додати модуль
слід його розкоментувати
*/

// Увімкнути/вимкнути FLS (Full Logging System) (в роботі)
window["FLS"] = true;

// Підключення основного файлу стилів
import "../scss/style.scss";

//============================================================================================================================================================================================================================================
// React ========================================================================================================================================================================================================================================================
//============================================================================================================================================================================================================================================
// import Index from './react/Index.jsx';
//============================================================================================================================================================================================================================================

// ========================================================================================================================================================================================================================================================
// Функціонал ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsFunctions from "./files/functions.js";

/* Перевірка підтримки webp, додавання класу webp або no-webp для HTML */
/* (i) необхідно для коректного відображення webp із css */
flsFunctions.isWebp();
/* Додавання класу touch для HTML якщо браузер мобільний */
// flsFunctions.addTouchClass();
/* Додавання loaded для HTML після повного завантаження сторінки */
// flsFunctions.addLoadedClass();
/* Модуль для роботи з меню (Бургер) */
flsFunctions.menuInit();
/* Форматування чисел */
// import './libs/wNumb.min.js';

/*
Модуль "Спойлери"
Документація: https://template.fls.guru/template-docs/modul-spojlery.html
Сніппет (HTML): spollers
*/
// flsFunctions.spollers();

/*
Модуль "Таби"
Документація: https://template.fls.guru/template-docs/modul-taby.html
Сніппет (HTML): tabs
*/
//flsFunctions.tabs();

/*
Модуль "Показати ще"
Документація: https://template.fls.guru/template-docs/modul-pokazat-eshhjo.html
Сніппет (HTML): showmore
*/
// flsFunctions.showMore();

/*
Модуль "До/Після"
Документація: https://template.fls.guru/template-docs/modul-do-pislia.html
Сніппет (HTML): ba
*/
// import './libs/beforeafter.js';

/*
Модуль "Ефект хвиль"
Документация: https://template.fls.guru/template-docs/modul-ripple-effect.html
Сниппет (HTML):
*/
// flsFunctions.rippleEffect();

/*
Модуль "Кастомний курсор"
Документация:
Сниппет (HTML):
*/
// flsFunctions.customCursor(true);

/*
Модуль "Бігучий рядок" (Alpha)
Документация:
Сниппет (HTML):
*/
// import './libs/keywords.js'

/*
Модуль "Попапи"
Документація: https://template.fls.guru/template-docs/funkcional-popup.html
Сніппет (HTML): pl, pop
*/
// import './libs/popup.js'

/*
Модуль паралаксу мишею
Документація: https://template.fls.guru/template-docs/modul-animacii-parallaks-obektov-pri-dvizhenii-myshi.html
*/
// import './libs/parallax-mouse.js'

// ========================================================================================================================================================================================================================================================
// Робота з формами ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsForms from "./files/forms/forms.js";

/* Робота з полями форми */
/* Документація: https://template.fls.guru/template-docs/rabota-s-formami.html */
/*
flsForms.formFieldsInit({
	viewPass: false,
	autoHeight: false
});
*/
/* Надсилання форми */
/* Документація: https://template.fls.guru/template-docs/rabota-s-formami.html */
// flsForms.formSubmit();

/* Модуль форми "кількість" */
// flsForms.formQuantity();

/* Модуль зіркового рейтингу */
// flsForms.formRating();

/* Модуль роботи з select. */
// import './libs/select.js'

/* Модуль роботи з календарем */
// import './files/forms/datepicker.js'

/* (У роботі) Модуль роботи з масками.*/
/*
Підключення та налаштування виконується у файлі js/files/forms/inputmask.js
Документація по роботі у шаблоні:
Документація плагіна: https://github.com/RobinHerbots/inputmask
Сніппет(HTML):
*/
// import "./files/forms/inputmask.js";

/* Модуль роботи з повзунком */
/*
Підключення та налаштування виконується у файлі js/files/forms/range.js
Документація по роботі у шаблоні:
Документація плагіна: https://refreshless.com/nouislider/
Сніппет (HTML): range
*/
// import "./files/forms/range.js";

/* Модуль роботи з підказками (tippy) */
/*
Підключення плагіна Tippy.js та налаштування виконується у файлі js/files/tippy.js
Документація по роботі у шаблоні:
Документація плагіна: https://atomiks.github.io/tippyjs/
Сніппет (HTML): tip (додає атрибут з підказкою для html тега)
*/
// import "./files/tippy.js";

// ========================================================================================================================================================================================================================================================
// Робота зі слайдером (Swiper) ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Налаштування підключення плагіна слайдера Swiper та нових слайдерів виконується у файлі js/files/sliders.js
Документація по роботі у шаблоні: https://template.fls.guru/template-docs/rabota-so-slajderom-swiper.html
Документація плагіна: https://swiperjs.com/
Сніппет(HTML): swiper
*/
// import "./files/sliders.js";

// ========================================================================================================================================================================================================================================================
// Модулі роботи з прокручуванням сторінки ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/*
Зміна дизайну скроллбару
Документація по роботі у шаблоні: У HTML додаємо до блоку атрибут data-simplebar
Документація плагіна: https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
Сніппет(HTML): 
*/
// import './files/scroll/simplebar.js';

// Ліниве (відкладене) завантаження картинок
// Документація по роботі у шаблоні: https://template.fls.guru/template-docs/modul-lenivaya-podgruzka-lazy-loading.html
// Документація плагіна: https://github.com/verlok/vanilla-lazyload
// Сніппет(HTML):
// import './files/scroll/lazyload.js';

// Спостерігач за об'єктами з атрибутом data-watch
// Документація: https://template.fls.guru/template-docs/modul-nabljudatel-za-poyavleniem-elementa-pri-skrolle.html
// Сніппет(HTML):
// import './libs/watcher.js'

// Модуль поекранної прокрутки
// Документація: https://template.fls.guru/template-docs/modul-poekrannoj-prokrutki-stranicy-fullpage.html
// Сніппет(HTML):
import "./libs/fullpage.js";

// Модуль паралаксу
// Документація: https://template.fls.guru/template-docs/paralaks-pri-skroli.html
// Сніппет(HTML):
// import './libs/parallax.js'

// Функції роботи скролом
import * as flsScroll from "./files/scroll/scroll.js";

// Плавна навігація по сторінці
// Документація: https://template.fls.guru/template-docs/modul-plavnoj-navigacii-po-stranice.html
// flsScroll.pageNavigation();

// Функціонал додавання класів до хедеру під час прокручування
// Документація: https://template.fls.guru/template-docs/modul-dobavleniya-klassov-k-shapke-pri-prokrutke-stranicy.html
// flsScroll.headerScroll();

// Модуль анімація цифрового лічильника
// Документація: https://template.fls.guru/template-docs/modul-animacii-cifrovogo-lichilnika.html
// Сніппет(HTML):
// flsScroll.digitsCounter();

// ========================================================================================================================================================================================================================================================
// Галерея ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Документація по роботі у шаблоні: 
Документація плагіна: https://www.lightgalleryjs.com/docs/
Сніппет(HTML):
*/
// import "./files/gallery.js";

// ========================================================================================================================================================================================================================================================
// Масонрі сітка ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Документація по роботі у шаблоні:
Документація плагіна: 
Сніппет(HTML):
*/
// import "./files/isotope.js";

// ========================================================================================================================================================================================================================================================
// Інші плагіни ============================================================================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/* Динамічний адаптив */
// Документація: https://template.fls.guru/template-docs/dinamicheskij-adaptiv.html
// import "./libs/dynamic_adapt.js";

// ========================================================================================================================================================================================================================================================
// Інше ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/* Підключаємо файли зі своїм кодом */
import "./files/script.js";
//============================================================================================================================================================================================================================================

// document.addEventListener("mousemove", function (e) {
//   const phone = document.querySelector(".DemoImg");
//   const { clientX: x, clientY: y } = e;
//   const { innerWidth: width, innerHeight: height } = window;

//   const offsetX = (x / width - 0.5) * 2;
//   const offsetY = (y / height - 0.5) * 2;

//   const rotateX = offsetY * 10; // tilt up/down
//   const rotateY = -offsetX * 10; // tilt left/right

//   phone.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
// });
document.addEventListener("mousemove", function (e) {
  const phone = document.querySelector(".DemoImg");
  const { clientX: x, clientY: y } = e;
  const { innerWidth: width, innerHeight: height } = window;

  // Рассчитываем смещение по осям X и Y
  const offsetX = (x / width - 0.5) * 30; // Двигаем вправо/влево на 30px
  const offsetY = (y / height - 0.5) * 30; // Двигаем вверх/вниз на 30px

  phone.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});

//=====================================================================================

document.addEventListener("DOMContentLoaded", function () {
  const slides = [
    {
      number: "01",
      title: "Receive a Request",
      description:
        "Get notified of a new request and choose to accept it based on your availability.",
    },
    {
      number: "02",
      title: "Fast and Reliable Service",
      description:
        "Instant access to qualified professionals ready to assist at any time.",
    },
    {
      number: "03",
      title: "Trusted by Thousands",
      description:
        "Our platform is used by thousands of customers, guaranteeing quality service and support.",
    },
    {
      number: "04",
      title: "Efficient Workflow",
      description:
        "Our system ensures that every task is handled efficiently and effectively.",
    },
  ];

  let currentIndex = 0;
  const numberElement = document.querySelector(".number");
  const titleElement = document.querySelector(".title");
  const descriptionElement = document.querySelector(".description");
  const carousel = document.getElementById("carousel");
  const myDiv = document.getElementById("myDiv");
  let timeoutId;

  // Добавляем кнопки
  const arrowLeft = document.getElementById("arrow_left");
  const arrowRight = document.getElementById("arrow_right");

  let touchStartY = 0;
  let touchEndY = 0;

  function updateSlide(index) {
    const slide = slides[index];
    numberElement.classList.add("fade-out");
    titleElement.classList.add("fade-out");
    descriptionElement.classList.add("fade-out");

    setTimeout(() => {
      numberElement.textContent = slide.number;
      titleElement.textContent = slide.title;
      descriptionElement.textContent = slide.description;

      numberElement.classList.remove("fade-out");
      titleElement.classList.remove("fade-out");
      descriptionElement.classList.remove("fade-out");
    }, 500);

    if (index === 1) {
      myDiv.setAttribute("data-no-event", "true");
      clearTimeout(timeoutId);
    } else if (index === 3 || index === 0) {
      timeoutId = setTimeout(() => {
        myDiv.removeAttribute("data-no-event");
      }, 1000);
    }

    console.log("Current Slide Index:", index);
  }

  //first slide
  updateSlide(currentIndex);

  //wheel scroll
  carousel.addEventListener("wheel", function (event) {
    if (event.deltaY > 0) {
      if (currentIndex < slides.length - 1) {
        currentIndex = (currentIndex + 1) % slides.length;
      }
    } else {
      if (currentIndex > 0) {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      }
    }
    updateSlide(currentIndex);
  });

  // Touch events
  // carousel.addEventListener("touchstart", function (event) {
  //   touchStartY = event.touches[0].clientX;
  // });

  // carousel.addEventListener("touchmove", function (event) {
  //   touchEndY = event.touches[0].clientX;
  // });

  // carousel.addEventListener("touchend", function () {
  //   if (touchStartY - touchEndY > 50) {
  //     if (currentIndex < slides.length - 1) {
  //       currentIndex = (currentIndex + 1) % slides.length;
  //     }
  //   } else if (touchEndY - touchStartY > 50) {
  //     if (currentIndex > 0) {
  //       currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  //     }
  //   }
  //   updateSlide(currentIndex);
  // });

  //arrow buttons
  arrowLeft.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    } else {
      currentIndex = slides.length - 1;
    }
    updateSlide(currentIndex);
  });

  arrowRight.addEventListener("click", function () {
    if (currentIndex < slides.length - 1) {
      currentIndex = (currentIndex + 1) % slides.length;
    } else {
      currentIndex = 0;
    }
    updateSlide(currentIndex);
  });
});

//===================================================================================
