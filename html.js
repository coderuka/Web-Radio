const credits = document.getElementById('credits');

function animateCredits() {
  credits.style.opacity = 1;
  credits.style.transition = 'opacity 2s ease-in-out';

  setTimeout(() => {
    credits.style.opacity = 0;
    setTimeout(animateCredits, 2000);
  }, 4000);
}

animateCredits();
