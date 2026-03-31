window.addEventListener('DOMContentLoaded', () => {
  const historyWrapper = document.querySelector('.history-wrapper');
  const factsWrapper = document.querySelector('.facts-wrapper');
  const playersWrapper = document.querySelector('.players-wrapper');

  Promise.all([
    fetch('./history.json').then(res => res.json()),
    fetch('./facts.json').then(res => res.json()),
    fetch('./players.json').then(res => res.json())
  ])
  .then(([history, facts, players]) => {

    history.forEach(i => {
      historyWrapper.innerHTML += `
        <div class="swiper-slide">
          <h2>${i.title}</h2>
          <p>${i.text}</p>
          <img src="${i.image}" width="500" height="300" alt="${i.title}">
        </div>
      `;
    });

    facts.forEach(i => {
      factsWrapper.innerHTML += `
        <div class="swiper-slide">
          <h2>${i.title} - <span>${i.value}</span></h2>
          <p>${i.description}</p>
        </div>
      `;
    });

    players.forEach(i => {
      playersWrapper.innerHTML += `
        <div class="swiper-slide player-card">
          <img src="${i.image}" width="400" height="400" alt="${i.name}">
          <h3>${i.name}</h3>
          <p>${i.position}</p>
          <span>${i.years}</span>
        </div>
      `;
    });

    new Swiper('.history-swiper', {
      loop: true,
      autoplay: { delay: 5000 },
      pagination: { el: '.history .swiper-pagination', clickable: true },
      navigation: { nextEl: '.history .swiper-button-next', prevEl: '.history .swiper-button-prev' }
    });

    new Swiper('.facts-swiper', {
      loop: true,
      autoplay: { delay: 3000 },
      pagination: { el: '.facts .swiper-pagination', clickable: true }
    });

    new Swiper('.players-swiper', {
      loop: true,
      autoplay: { delay: 3000 },
      pagination: { el: '.players .swiper-pagination', clickable: true }
    });

  })
  .catch(err => console.error('Помилка:', err));
});