const historyWrapper = document.querySelector('.history-wrapper')
const factsWrapper = document.querySelector('.facts-wrapper')
const playersWrapper = document.querySelector('.players-wrapper')

fetch('/history.json')
  .then(res => res.json())
  .then(history => {
    history.forEach(i => {
      historyWrapper.innerHTML += `
    <div class="swiper-slide">
        <h2>${i.title}</h2>
        <p>${i.text}</p>
        <img src=${i.image} width=500 height=300 alt="">

    </div>
    `
    })

    const swiper = new Swiper('.swiper', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      autoplay: {
        delay: 5000,
      },
    })
  })
  .catch(err => console.error('Помилка завантаження JSON:', err))

fetch('/facts.json')
  .then(res => res.json())
  .then(facts => {
    facts.forEach(i => {
      factsWrapper.innerHTML += `
        <div class="swiper-slide">
        <h2>${i.title} - <span>${i.value}</span></h2>
        
        <p>${i.description}</p>
        </div>
        `
    })

    const swiper = new Swiper('.swiper', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      autoplay: {
        delay: 3000,
      },
    })
  })
  .catch(err => console.error('Помилка завантаження JSON:', err))

fetch('/players.json')
  .then(res => res.json())
  .then(facts => {
    facts.forEach(i => {
      playersWrapper.innerHTML += `
<div class="swiper-slide player-card">
  <img src="${i.image}" width=400 height=400 alt="${i.name}">
  <h3>${i.name}</h3>
  <p>${i.position}</p>
  <span>${i.years}</span>
</div>
        `
    })

    const swiper = new Swiper('.swiper', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      autoplay: {
        delay: 3000,
      },
    })
  })
  .catch(err => console.error('Помилка завантаження JSON:', err))
