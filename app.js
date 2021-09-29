// const questions = document.querySelectorAll('.question-btn')

const readMoreBtn = document.querySelector('.read-more-btn')
const text = document.querySelector('.about-info')


// questions.forEach(function (question) {
//   question.addEventListener('click', (e) => {
//     const question = e.currentTarget.parentElement.parentElement
//     question.classList.toggle('show-text')
//   })
// })


readMoreBtn.addEventListener('click', (e) => {
  text.classList.toggle('show-more')
  if (readMoreBtn.innerText === 'Read More') {
    readMoreBtn.innerText = 'Read Less'
  } else {
    readMoreBtn.innerText = 'Read More'
  }
})


