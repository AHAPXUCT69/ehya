$(document).ready(function() {

  // Swiper slider
  const swiper = new Swiper('.swiper-container', {
  // Optional parameters
    slidesPerView: 'auto',
    spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.portfolio-top__button-next',
    prevEl: '.portfolio-top__button-prev',
  },
  keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
});
// Swiper slider Reviews

const swiper2 = new Swiper('.reviews__container', {
  // Optional parameters
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slide__button--next',
  },
  keyboard: {
      enabled: false,
      onlyInViewport: true,
    }
});

  // Выпадающее меню
  var menuLink = $('.nav__tick, .nav__link');
  menuLink.on('click', function() {
    $(this).siblings('.nav__submenu').toggleClass('nav__submenu--visible');
  });

  var menuBottomMark = $('.nav-bottom__tick, .nav-bottom__link');
  menuBottomMark.on('click', function() {
    $(this).siblings('.nav-bottom__submenu').toggleClass('nav-bottom__submenu--visible');
  });

  menuLink.on('click', function() {
    $(this).siblings('.nav__tick').toggleClass('nav__tick--active');
  });

  menuBottomMark.on('click', function() {
    $(this).siblings('.nav-bottom__tick').toggleClass('nav-bottom__tick--active');
  })
  //  Маска для телефонов
  $('.phone').mask('+7(000)-000-00-00');
  // Menu Button
  var menuButton = $('.header-top__burger');
  menuButton.on('click', function () {
    $('.nav-bottom').toggleClass('nav-bottom--visible');
    $('body').toggleClass('lock');
  });

  // Modal
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  };

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  };

  $(document).on('keydown', function(event) {
          if (event.key == "Escape") {
            closeModal(event);
          }
      });
  var modalOverlay = $(".modal__overlay");
  modalOverlay.on('click', closeModal);

// Валидация форм
  $('.form').each(function() {
    $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required:"Укажите свое имя",
        minlength: "Слишком короткое"
      },
      phone: {
        minlength: jQuery.validator.format("Номер введен некорректно"),
        required: "Укажите номер телефона"
      },
      mail: {
        required: "Укажите адрес вашей почты",
        email: "Некорректный адрес"
      },
      email: {
        required: "Укажите адрес вашей почты",
        email: "Некорректный адрес"
      },
  },

  });
  })

})