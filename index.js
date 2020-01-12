const hamburger = document.querySelector('.menu_hamburger');
const cardio = document.querySelector('.statistics_cardio');
const weekly = document.querySelector('.statistics_weekly');
const cardioArrow = document.querySelector(' .cardioArrow');
const weeklyArrow = document.querySelector('.weeklyArrow');

hamburger.addEventListener('click', () => {
   hamburger.classList.toggle('menu_active');
})

cardio.addEventListener('click', () => {
   cardio.classList.toggle('turned');
   if (!cardio.classList.contains('turned')) {
      cardioArrow.style.transform = 'rotate(90deg)'
   }
   if (cardio.classList.contains('turned')) {
      cardioArrow.style.transform = 'rotate(-90deg)'
   }
})
weekly.addEventListener('click', () => {
   weekly.classList.toggle('turned');
   if (!weekly.classList.contains('turned')) {
      weeklyArrow.style.transform = 'rotate(90deg)'
   }
   if (weekly.classList.contains('turned')) {
      weeklyArrow.style.transform = 'rotate(-90deg)'
   }
})