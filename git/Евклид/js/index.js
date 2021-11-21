// -------------------------- search -------------------------------
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#search-add').addEventListener('click', function () {
    document.querySelector('#search').classList.add('search-active')
    document.querySelector('#search-add').classList.add('header__nav-active--move')
    document.querySelector('#search-remove').classList.add('header__nav-close--vue')
    document.querySelector('#logo-opacity').classList.add('logo-opacity')
    document.querySelector('#burger').classList.add('header-burger--opacity')
  })
  document.querySelector('#search-remove').addEventListener('click', function () {
    document.querySelector('#search').classList.remove('search-active')
    document.querySelector('#search-add').classList.remove('header__nav-active--move')
    document.querySelector('#search-remove').classList.remove('header__nav-close--vue')
    document.querySelector('#logo-opacity').classList.remove('logo-opacity')
    document.querySelector('#burger').classList.remove('header-burger--opacity')
  })
});

// -------------------------- burger -------------------------------
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')
    document.querySelector('#logo-opacity').classList.add('logo-opacity-btn')
  })
  document.querySelector('#cancel').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')
    document.querySelector('#logo-opacity').classList.remove('logo-opacity-btn')
  })
});


// -------------------------- tabs -------------------------------
document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){
      btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.toggle('tabs-nav__btn--active');


    document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
      tabsBtn.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

// -------------------------- slider -------------------------------
const container = document.querySelector(".container")
const swiper = new Swiper('.hero-swiper', {
  autoplay: {
    delay: 5000,
  },
  direction: 'horizontal',
  loop: true,
  speed: 500,
  spaceBetween: 1,
  pagination: {
    el: '.hero-pagination',
    type: 'bullets',
    clickable: true
  }
});

// -------------------------- accordion -------------------------------
$( function() {
  $( "#accordion" ).accordion({
    icons: false,
    heightStyle: "content",
    collapsible: true,
    active: true
  });
});





