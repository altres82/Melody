$(document).ready(function () {
  var currentFloor = 2; // переменная где хранится этаж
  var counterUp = $(".counter-up"); //кнопка увеличения этажа
  var counterDown = $(".counter-down"); //кнопка уменьшения этажа
  var floorPath = $(".home-image path"); //каждый отдельный этаж в SVG
  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button");
  var viewFlatsButton = $(".view-flats");

  //функция при наведении мышью на этаж
  floorPath.on("mouseover", function () {
    //каждый отдельный этаж в SVG
    floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
    currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
    $(".counter").text(currentFloor); //записываем значение этажа в счетчик справа от картинки
  });

  floorPath.on("click", toggleModal); //при клике на этаж вызывает модальное окно
  modalCloseButton.on("click", toggleModal); // закрывает окно по кнопке закрыть
  viewFlatsButton.on("click", toggleModal);

  counterUp.on("click", function () {
    //отслеживаем клик по кнопке вверх
    if (currentFloor < 18) {
      //проверяем значемние этажа не больше 18
      currentFloor++; //прибавляем один этаж
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }); //форматируем переменную с этажом чтобы было 01 а не 1
      //toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false,}); чтобы число было с ноликом впереди
      $(".counter").text(usCurrentFloor); //записываем значение этажа в счетчик справа
      floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); //подсвечиваем текущий этаж. обязательно обратные опострафы иначе не поймет номер этажа
    }
  });

  counterDown.on("click", function () {
    if (currentFloor > 2) {
      //проверяем значение этажа
      currentFloor--; //уменьшаем значение этажа
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      //toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false,}); чтобы число было с ноликом впереди
      $(".counter").text(usCurrentFloor); //записываем значение этажа в счетчик справа
      floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); //подсвечиваем текущий этаж. обязательно обратные опострафы иначе не поймет номер этажа
    }
  });
  //функция добавляет/убирает класс is-open (закрыть открыть окно)
  function toggleModal() {
    modal.toggleClass("is-open");
  }
});
