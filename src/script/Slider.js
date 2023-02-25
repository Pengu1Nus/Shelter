export function createSlider() {
  const leftArrow = document.querySelector('.pets__left-arrow');
  const rightArrow = document.querySelector('.pets__right-arrow');
  const petCards = document.querySelectorAll('.pets__card');
  let currentCardIndex = 0;

  petCards[currentCardIndex].classList.add('active');
  for (let i = 0; i < petCards.length; i++) {
    if (i !== currentCardIndex) {
      petCards[i].classList.add('hidden');
    }
  }

  function nextCard() {
    petCards[currentCardIndex].classList.remove('active');
    petCards[currentCardIndex].classList.add('hidden');
    currentCardIndex = (currentCardIndex + 1) % petCards.length;
    petCards[currentCardIndex].classList.remove('hidden');
    petCards[currentCardIndex].classList.add('active');
  }

  function prevCard() {
    petCards[currentCardIndex].classList.remove('active');
    petCards[currentCardIndex].classList.add('hidden');
    currentCardIndex = (currentCardIndex - 1 + petCards.length) % petCards.length;
    petCards[currentCardIndex].classList.remove('hidden');
    petCards[currentCardIndex].classList.add('active');
  }

  leftArrow.addEventListener('click', prevCard);
  rightArrow.addEventListener('click', nextCard);
}
