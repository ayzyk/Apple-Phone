const radioButtons = document.querySelectorAll('input[name="theme"]');
const phoneBg = document.querySelector('.bg');

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener('change', () => {
    const selectedTheme = radioButton.id;
    phoneBg.style.setProperty('--c-h', `var(--${selectedTheme})`);
  });
});