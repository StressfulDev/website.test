//-------------------------------------------select-------------------------------------------
const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: "",
  addItems: true,
  removeItems: true
});

//-------------------------------------------map-------------------------------------------
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);

function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [48.872185073737896, 2.354223999999991],

    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 15,
    controls: []
  });

  // Создание геообъекта с типом точка (метка).
  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: [48.872185073737896, 2.354223999999991] // координаты точки
    },
  });

  var myPlacemark = new ymaps.Placemark([48.872185073737896, 2.354223999999991], {}, {
    iconLayout: 'default#imageWithContent',
    iconImageHref: '/img/placemark.svg',
    iconImageSize: [28, 40],
    iconImageOffset: [-3, -42],
  });
// Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);
}

//-------------------------------------------form-------------------------------------------
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      },
    },
    mail: {
      required: true,
      email: true
    },
  },
  messages: {
    name: {
      required: 'Это поле обязательно',
      minLength: 'Поле должно содержать минимум два символа'
    },
    mail: {
      required: 'Это поле обязательно',
      email: 'Пожалуйста введите действительный e-mail адрес'
    },
    tel: {
      required: 'Это поле обязательно',
      function: 'Пожалуйста, введите действительный номер телефона'
    },
  },
});

