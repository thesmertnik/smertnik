// самовызывающая функция для меню
!function (){
  const toggleButton = document.getElementsByClassName('toggle-button')[0]
  const navbarLinks = document.getElementsByClassName('navbar-links') [0]
  //При клике на кнопку меню переключаем в состояние меню
  toggleButton.addEventListener('click',() => navbarLinks.classList.toggle('active'))

}()

//закрытие мею при клике вне меню
$(".navbar").click(function (){
  $('.toggle-button').toggle();
});
$(document).on('click', function (e){
  if(!$(e.target).closest(".home").length){
    $('.navbar').hidden();
  }
  e.stopPropagation();
});

